import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { Box, Backdrop, SpeedDial, SpeedDialIcon, SpeedDialAction } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useState } from "react";
import calculateTimeDifference from "../../helpers/calculateTimeDifference";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: open ? 16 : 14,
    },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },

    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

export default function QueueData({ queue }) {
    const [open, setOpen] = useState(false);
    const [number, setNumber] = useState(queue.current_number);
    const handleOpen = () => setOpen(!open);
    const editNumber = () => {
        const updatedNumber = prompt();

        if (!isNaN(Number(updatedNumber))) {
            console.log(updatedNumber);
        }
    };
    const actions = [
        {
            icon: <ModeEditIcon />,
            name: "Set",
            onClick: editNumber,
        },
        { icon: <RemoveIcon />, name: "Decrement" },
        { icon: <AddIcon />, name: "Increment" },
    ];
    return (
        <StyledTableRow>
            <StyledTableCell align="center">{queue.name}</StyledTableCell>
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
                    {number}
                </Box>
            </StyledTableCell>
            <StyledTableCell align="center">{calculateTimeDifference(queue.updated_at)}</StyledTableCell>
            <StyledTableCell align="center">
                <Box sx={{ transform: "translateZ(0px)" }}>
                    <Backdrop open={open} sx={{ background: "none" }} />
                    <SpeedDial
                        direction="up"
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
    );
}
