import { Box, Backdrop, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import Favorites from "./Favorites";
import ShowLogs from "./ShowLogs";
import EventNoteIcon from "@mui/icons-material/EventNote";
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";
import { roundIcon } from "../../themes/MyTheme";

export default function QueueActions({ agency, isFavorite, toggleFavorite }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openLogs, setOpenLogs] = useState(false);

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

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
        <Backdrop open={Boolean(anchorEl)} sx={{ background: "none" }} />
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
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "MoreHorizTwoToneIcon-button",
          }}
        >
          <MenuItem onClick={handleToggleFavorite}>
            {isFavorite ? "Unfavorite" : "Favorite"}
          </MenuItem>
          <MenuItem onClick={() => setOpenLogs(true)}>Logs</MenuItem>
        </Menu>
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
