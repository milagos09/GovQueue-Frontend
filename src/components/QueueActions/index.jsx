import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { useState } from "react";
import Favorites from "./Favorites";

export default function QueueActions({ admin }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    const actions = [
        {
            icon: <Favorites id={admin.id} />,
            name: "Favorite",
        },
        { icon: <EventNoteIcon />, name: "Logs" },
    ];

    return (
        <Box sx={{ transform: "translateZ(0px)" }}>
            <Backdrop open={open} sx={{ background: "none" }} />
            <SpeedDial
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
    );
}
