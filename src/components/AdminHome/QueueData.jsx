import {
  Box,
  Backdrop,
  SpeedDial,
  SpeedDialAction,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";
import calculateTimeDifference from "../../helpers/calculateTimeDifference";
import { getSessionStorage } from "./../../helpers/sessionStorage";
import { socket } from "../../helpers/socket";
import { StyledTableCell, StyledTableRow } from "./StyledTableElements";

export default function QueueData({ queue, hidden }) {
  const user = getSessionStorage("user");
  const [open, setOpen] = useState(false);
  const [isIncrementDisabled, setIsIncrementDisabled] = useState(false);
  const [isSetDisabled, setIsSetDisabled] = useState(false);

  const handleOpen = () => setOpen(!open);

  const increaseNumber = () => {
    const body = {
      queueId: queue.queue_id,
      agencyId: queue.agency_id,
      actionType: "increment",
      currentNumber: queue.current_number + 1,
      updatedBy: user.user_id,
    };
    socket.emit("updateQueue", body);
    setIsIncrementDisabled(true);
    setTimeout(() => {
      setIsIncrementDisabled(false);
    }, 5000);
  };
  const editNumber = () => {
    if (!isSetDisabled) {
      const updatedNumber = prompt("Set number:");

      if (!isNaN(Number(updatedNumber))) {
        const body = {
          queueId: queue.queue_id,
          agencyId: queue.agency_id,
          actionType: "set",
          currentNumber: updatedNumber,
          updatedBy: user.user_id,
        };
        socket.emit("updateQueue", body);
        setIsSetDisabled(true);
        setTimeout(() => {
          setIsSetDisabled(false);
        }, 5000);
      }
    }
  };

  const editName = () => {
    const newName = prompt("Edit queue name:", queue.name);
    socket.emit("editQueue", { queueId: queue.queue_id, name: newName.trim() });
  };

  const actions = [
    {
      icon: <ModeEditIcon />,
      name: "Set",
      onClick: () => {
        editNumber();
      },
      disabled: isSetDisabled,
    },
    {
      icon: <AddIcon />,
      name: "Increment",
      onClick: () => {
        increaseNumber();
      },
      disabled: isIncrementDisabled,
    },
  ];

  return (
    <>
      <StyledTableRow>
        <StyledTableCell align="center">{queue.queue_id}</StyledTableCell>
        <StyledTableCell align="center">
          <Button
            variant="text"
            color="inherit"
            onClick={editName}
            sx={{ m: 0, p: 0, textTransform: "none" }}
          >
            {queue.name}
          </Button>
        </StyledTableCell>
        <StyledTableCell align="center">
          <Box
            component={"span"}
            style={
              open
                ? {
                    fontSize: "2rem",
                    padding: "1rem",
                    borderRadius: "5px",
                  }
                : {}
            }
          >
            {queue.current_number}
          </Box>
        </StyledTableCell>
        {!hidden && (
          <StyledTableCell align="center">
            {calculateTimeDifference(queue.updated_at)}
          </StyledTableCell>
        )}
        <StyledTableCell align="center">
          <Box sx={{ transform: "translateZ(0px)" }}>
            <Backdrop open={open} sx={{ background: "none" }} />
            <SpeedDial
              direction="up"
              ariaLabel="SpeedDial tooltip"
              icon={<MoreHorizIcon onClick={handleOpen} sx={{}} />}
              open={open}
              FabProps={{
                size: "small",
                color: "info",
              }}
              sx={{ position: "relative" }}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  onClick={action.onClick}
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  sx={{
                    position: !open ? "absolute" : "",
                    transition: open ? ".5s" : "none",
                    borderRadius: "50%",
                    "&:hover": {
                      color: "black",
                      background: "azure",
                    },
                  }}
                />
              ))}
            </SpeedDial>
          </Box>
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
}
