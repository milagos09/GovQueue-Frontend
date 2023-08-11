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

export default function Row({ admin, customBreakPoint, isFavorite, toggleFavorite }) {
    const [open, setOpen] = useState(false);
    const fontSize = customBreakPoint ? ".9rem" : ".75rem";
    const maxWidth = customBreakPoint ? "80px" : "60px";

    return (
        <>
            <TableRow>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                        sx={{
                            "&:hover *": {
                                color: "black",
                            },
                        }}
                    >
                        {open ? (
                            <KeyboardArrowUpIcon
                                style={{
                                    ...roundIcon,
                                }}
                            />
                        ) : (
                            <KeyboardArrowDownIcon
                                style={{
                                    ...roundIcon,
                                }}
                            />
                        )}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" sx={{ textAlign: "center" }}>
                    <img src={admin.logo} loading="lazy" style={{ maxWidth: maxWidth, borderRadius: "50%" }} />
                </TableCell>
                <TableCell align="center" sx={{ fontSize: fontSize }}>
                    {admin.agency}
                </TableCell>
                {customBreakPoint && <TableCell align="center">{admin.region}</TableCell>}
                <TableCell>
                    <QueueActions admin={admin} isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ marginBottom: "20px" }}>
                            <Windows queue={admin.queues} />
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}
