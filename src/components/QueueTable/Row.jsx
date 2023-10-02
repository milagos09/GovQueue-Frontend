import { useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Windows from "../Windows";
import QueueActions from "../QueueActions";
import { roundIcon } from "../../themes/MyTheme";
import { Link } from "react-router-dom";

export default function Row({
  agency,
  customBreakPoint,
  isFavorite,
  toggleFavorite,
}) {
  const [open, setOpen] = useState(false);
  const fontSize = customBreakPoint ? ".9rem" : ".75rem";
  const maxWidth = customBreakPoint ? "80px" : "60px";

  return (
    <>
      <TableRow
        aria-label="expand row"
        size="small"
        onClick={() => setOpen(!open)}
        sx={{
          "&:hover *": {
            color: "black",
          },
        }}
      >
        {
          // <TableCell align="center">
          //   <IconButton
          //   aria-label="expand row"
          //   size="small"
          //   onClick={() => setOpen(!open)}
          //   sx={{
          //     "&:hover *": {
          //       color: "black",
          //     },
          //   }}
          // >
          //   {open ? (
          //     <KeyboardArrowUpIcon
          //       style={{
          //         ...roundIcon,
          //       }}
          //     />
          //   ) : (
          //     <KeyboardArrowDownIcon
          //       style={{
          //         ...roundIcon,
          //       }}
          //     />
          //   )}
          //   </IconButton>
          // </TableCell>
        }
        <TableCell component="th" scope="row" sx={{ textAlign: "center" }}>
          <Link target="_blank" to={`agency/${agency.agency_id}`}>
            <img
              src={agency.logo}
              loading="lazy"
              style={{ maxWidth: maxWidth, borderRadius: "50%" }}
            />
          </Link>
        </TableCell>
        <TableCell align="center" sx={{ fontSize: fontSize }}>
          <Link target="_blank" to={`agency/${agency.agency_id}`}>
            {agency.name}
          </Link>
        </TableCell>
        {customBreakPoint && (
          <TableCell align="center">{agency.region}</TableCell>
        )}
        <TableCell>
          <QueueActions
            agency={agency}
            isFavorite={isFavorite}
            boolean
            toggleFavorite={toggleFavorite}
            function
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ marginBottom: "20px" }}>
              <Windows minWidth={80} queues={agency.queues} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
