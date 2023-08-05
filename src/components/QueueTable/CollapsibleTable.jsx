import { useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import queues from "./../../../fake/queues.json";
import WindowsLayout from "./../QueueTabs/WindowsLayout";
import { CheckScreenSize } from "../../hooks/CheckScreenSize";

function Row({ admin, width }) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
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
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: "bold" }} align="center">
                                            <WindowsLayout queue={admin.queues} width={width} />
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

export default function CollapsibleTable({ admins }) {
    const { width } = CheckScreenSize();
    const adminsWithQueue = admins.map((admin) => {
        return { ...admin, queues: queues.filter((q) => q.adminId === admin.id) };
    });

    return (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell align="center">Agency</TableCell>
                            <TableCell align="center">Name</TableCell>
                            {width > 500 && <TableCell align="center">Region</TableCell>}
                            {width > 600 && <TableCell align="center">Number of Queues</TableCell>}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {adminsWithQueue.map((admin) => (
                            <Row key={admin.id} admin={admin} width={width} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
