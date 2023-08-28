import { useState } from "react";
import Table from "@mui/material/Table";
import queues from "../../../fake/queues.json";
import Box from "@mui/material/Box";
import TableBody from "@mui/material/TableBody";
import { TableHead, Paper } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { glassEffect } from "../../themes/MyTheme";
import TablePagination from "@mui/material/TablePagination";
import { styled } from "@mui/material/styles";
import QueueData from "./QueueData";

export default function AdminQueueTable({ id }) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        const newRowsPerPage = Number(event.target.value);
        setRowsPerPage(newRowsPerPage);
        setPage(0);
    };

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const fakeQueues = queues.filter((queue) => queue.adminId == id);

    return (
        <>
            <Paper
                sx={{
                    width: "100%",
                    overflow: "hidden",
                    mb: 4,
                    ...glassEffect,
                    position: "relative",
                }}
            >
                <Table sx={{ width: "100%" }} size="small" aria-label="customized table">
                    <TableHead>
                        <StyledTableCell align="center">Queue</StyledTableCell>
                        <StyledTableCell align="center">Number</StyledTableCell>
                        <StyledTableCell align="center">Updated</StyledTableCell>
                        <StyledTableCell align="center">Action</StyledTableCell>
                    </TableHead>

                    <TableBody sx={{ columnGap: 100 }}>
                        {fakeQueues.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((queue, i) => (
                            <QueueData queue={queue} key={i} />
                        ))}
                    </TableBody>
                </Table>
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        my: 1,
                    }}
                >
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 20]}
                        component="div"
                        count={fakeQueues.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Box>
            </Paper>
        </>
    );
}
