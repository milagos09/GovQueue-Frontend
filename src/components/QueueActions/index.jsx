import { Box, Backdrop, Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import Favorites from "./Favorites";
import ShowLogs from "./ShowLogs";
import EventNoteIcon from "@mui/icons-material/EventNote";
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";
import { roundIcon } from "../../themes/MyTheme";

export default function QueueActions({ agency, isFavorite, toggleFavorite }) {
  const [open, setOpen] = useState(false);
  const [openLogs, setOpenLogs] = useState(false);

  const handleOpen = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  const handleToggleFavorite = () => {
    toggleFavorite(agency.agency_id, isFavorite);
    handleClose();
  };

  const actions = [
    {
      icon: (
        <Favorites
          id={agency.agency_id}
          isFavorite={isFavorite}
          toggleFavorite={toggleFavorite}
        />
      ),
      name: "Favorite",
    },
    { icon: <EventNoteIcon onClick={() => setOpenLogs(true)} />, name: "Logs" },
  ];

  return (
    <>
      <Box sx={{ transform: "translateZ(0px)" }}>
        <Backdrop open={open} sx={{ background: "none" }} />
        <MoreHorizTwoToneIcon
          id="MoreHorizTwoToneIcon-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleOpen}
          style={{
            ...roundIcon,
          }}
        ></MoreHorizTwoToneIcon>
        <Menu
          id="basic-menu"
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleToggleFavorite}>
            {isFavorite ? "Unfavorite" : "Favorite"}
          </MenuItem>

          <MenuItem onClick={() => setOpenLogs(true)}>Logs</MenuItem>
        </Menu>
        {/* <SpeedDial
                    ariaLabel="SpeedDial tooltip"
                    icon={<SpeedDialIcon onClick={handleOpen} sx={{}} />}
                    open={open}
                    FabProps={{
                        size: "small",
                        color: "info",
                    }}
                    sx={{ position: "relative" }}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            onClick
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
                </SpeedDial> */}
      </Box>
      {openLogs && (
        <ShowLogs
          agencyId={agency.agency_id}
          title={agency.name}
          setOpenLogs={setOpenLogs}
        />
      )}
    </>
  );
}
