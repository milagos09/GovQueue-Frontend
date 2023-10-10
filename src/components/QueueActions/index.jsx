import { useState } from "react";
import { Tooltip, Box, Backdrop, Menu, MenuItem, ListItemIcon, IconButton, Divider } from "@mui/material";
import ShowLogs from "./ShowLogs";
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import UnFavoriteIcon from "@mui/icons-material/FavoriteBorder";
import EventNoteIcon from "@mui/icons-material/EventNote";
import Filter1Icon from "@mui/icons-material/Filter1";
import { gold, roundIcon } from "../../themes/MyTheme";

export default function QueueActions({ agency, isFavorite, toggleFavorite, toggleQueues, customBreakPoint }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [openLogs, setOpenLogs] = useState(false);
    const [isQueuesToggled, setIsQueuesToggled] = useState(false);

    const handleOpen = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const toggleLogs = () => {
        setOpenLogs(!openLogs);
    };

    const toggleQueuesHandler = () => {
        toggleQueues();
        setIsQueuesToggled(!isQueuesToggled); // Toggle Queues state
        setOpenLogs(false); // Close the Logs when Queues is clicked
    };

    const handleToggleFavorite = () => {
        toggleFavorite(agency.agency_id, isFavorite);
    };

    const SpreadActions = () => {
        return (
            <>
                <Tooltip title="Favorite" placement="top" arrow>
                    <IconButton sx={{ ...roundIcon, mx: 1 }} onClick={handleToggleFavorite}>
                        {isFavorite ? (
                            <FavoriteIcon sx={{ ...gold }} fontSize="small" />
                        ) : (
                            <UnFavoriteIcon fontSize="small" />
                        )}
                    </IconButton>
                </Tooltip>
                <Tooltip title="Logs" placement="top" arrow>
                    <IconButton sx={{ ...roundIcon, mx: 1 }} onClick={toggleLogs}>
                        <EventNoteIcon
                            sx={{ ...(openLogs && gold) }} // Change icon color to gold if openLogs is true
                            fontSize="small"
                        />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Queues" placement="top" arrow>
                    <IconButton sx={{ ...roundIcon, mx: 1 }} onClick={toggleQueuesHandler}>
                        <Filter1Icon
                            sx={{ ...(isQueuesToggled && gold) }} // Change icon color to gold if isQueuesToggled is true
                            fontSize="small"
                        />
                    </IconButton>
                </Tooltip>
            </>
        );
    };

    return (
        <>
            {customBreakPoint ? (
                <SpreadActions />
            ) : (
                <Box sx={{ transform: "translateZ(0px)" }}>
                    <Backdrop open={Boolean(anchorEl)} sx={{ background: "none" }} />
                    <IconButton
                        onClick={handleOpen}
                        sx={{
                            ...roundIcon,
                        }}
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                    >
                        <MoreHorizTwoToneIcon />
                    </IconButton>
                    <Menu
                        dense
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        transformOrigin={{ horizontal: "right", vertical: "top" }}
                        anchorOrigin={{ horizontal: "left", vertical: "center" }}
                    >
                        <MenuItem onClick={handleToggleFavorite}>
                            <ListItemIcon>
                                {isFavorite ? (
                                    <FavoriteIcon sx={{ ...gold }} fontSize="small" />
                                ) : (
                                    <UnFavoriteIcon fontSize="small" />
                                )}
                            </ListItemIcon>
                            Favorite
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={toggleLogs}>
                            <ListItemIcon>
                                <EventNoteIcon
                                    sx={{ ...(openLogs && gold) }} // Change icon color to gold if openLogs is true
                                    fontSize="small"
                                />
                            </ListItemIcon>
                            Logs
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={toggleQueuesHandler}>
                            <ListItemIcon>
                                <Filter1Icon
                                    sx={{ ...(isQueuesToggled && gold) }} // Change icon color to gold if isQueuesToggled is true
                                    fontSize="small"
                                />
                            </ListItemIcon>
                            Queues
                        </MenuItem>
                    </Menu>
                </Box>
            )}
            {openLogs && <ShowLogs agencyId={agency.agency_id} title={agency.name} setOpenLogs={toggleLogs} />}
        </>
    );
}
