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
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import queues from "./../../../fake/queues.json";

function Row({ admin }) {
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
                <TableCell align="center">{admin.region}</TableCell>
                <TableCell align="center">{4}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Queues
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: "bold" }} align="center">
                                            Window
                                        </TableCell>
                                        <TableCell sx={{ fontWeight: "bold" }} align="center">
                                            Number
                                        </TableCell>
                                        <TableCell sx={{ fontWeight: "bold" }} align="center">
                                            Last update
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {admin.queues.map((q) => (
                                        <TableRow key={q.id}>
                                            <TableCell align="center">{q.name}</TableCell>
                                            <TableCell align="center">{q.current}</TableCell>
                                            <TableCell align="center">
                                                {new Date(q.updatedOn).toLocaleTimeString()}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

export default function CollapsibleTable({ admins }) {
    const adminsWithQueue = admins.map((admin) => {
        return { ...admin, queues: queues.filter((q) => q.adminId === admin.id) };
    });
    console.log(adminsWithQueue);
    return (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell align="center">Agency</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Region</TableCell>
                            <TableCell align="center">Number of Queues</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {adminsWithQueue.map((admin) => (
                            <Row key={admin.id} admin={admin} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
