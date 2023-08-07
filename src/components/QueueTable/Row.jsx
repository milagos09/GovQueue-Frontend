import { useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import WindowsLayout from "../QueueTabs/WindowsLayout";

export default function Row({ admin, width }) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
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
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" sx={{ textAlign: "center" }}>
                    <img src={admin.logo} loading="lazy" style={{ maxWidth: "80px" }} />
                </TableCell>
                <TableCell align="center">{admin.agency}</TableCell>
                {width > 500 && <TableCell align="center">{admin.region}</TableCell>}
                {width > 600 && <TableCell align="center">{admin.queues.length}</TableCell>}
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ marginBottom: "20px" }}>
                            <WindowsLayout queue={admin.queues} width={width} />
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}
