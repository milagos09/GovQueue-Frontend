import { useState } from "react";
import { Box, Table, TableBody, TableHead, TableRow, TablePagination } from "@mui/material";
import { CheckScreenSize } from "./../../hooks/CheckScreenSize";
import QueueData from "./QueueData";
import queuesStore from "./../../stores/queuesStore";
import { StyledTableCell } from "./StyledTableElements";

export default function AdminQueueTable({ agencyId }) {
    const { width } = CheckScreenSize();
    const { queues } = queuesStore();
    const queuesFiltered = queues.filter((q) => q.agency_id === agencyId);
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

    const hidden = width < 400;

    return (
        <>
            <Table size="small" aria-label="customized table" sx={{ minWidth: "380px", overflowX: "auto" }}>
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">ID</StyledTableCell>
                        <StyledTableCell align="center">Queue</StyledTableCell>
                        <StyledTableCell align="center">Number</StyledTableCell>
                        {!hidden && <StyledTableCell align="center">Updated</StyledTableCell>}
                        <StyledTableCell align="center">Action</StyledTableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {queuesFiltered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((queue, i) => (
                        <QueueData queue={queue} hidden={hidden} key={queue.name + i} />
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
                    count={queuesFiltered.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Box>
        </>
    );
}
