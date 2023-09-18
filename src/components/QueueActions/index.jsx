import { Box, Backdrop, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { useState } from "react";
import Favorites from "./Favorites";
import ShowLogs from "./ShowLogs";
import EventNoteIcon from "@mui/icons-material/EventNote";

export default function QueueActions({ agency, isFavorite, toggleFavorite }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    const [openLogs, setOpenLogs] = useState(false);

    const actions = [
        {
            icon: <Favorites id={agency.agency_id} isFavorite={isFavorite} toggleFavorite={toggleFavorite} />,
            name: "Favorite",
        },
        { icon: <EventNoteIcon onClick={() => setOpenLogs(true)} />, name: "Logs" },
    ];

    return (
        <>
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
            {openLogs && <ShowLogs agencyId={agency.agency_id} title={agency.name} setOpenLogs={setOpenLogs} />}
        </>
    );
}
