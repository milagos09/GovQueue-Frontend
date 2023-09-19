import { Table, TableBody, TableContainer, TableHead, TableRow, TablePagination, Box } from "@mui/material";
import { StyledTableCell, StyledTableRow } from "../AdminHome/StyledTableElements";
import { useState } from "react";

export default function LogTable({ logs }) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        const newRowsPerPage = Number(event.target.value);
        setRowsPerPage(newRowsPerPage);
        setPage(0);
    };

    const slicedLogs = logs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <TableContainer>
            <Table aria-label="a dense table" size="small">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Updated</StyledTableCell>
                        <StyledTableCell align="center">Window</StyledTableCell>
                        <StyledTableCell align="center">Number</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {slicedLogs.map((log) => (
                        <StyledTableRow key={"log" + log.log_id}>
                            <StyledTableCell align="center">
                                {new Date(log.created_at).toLocaleTimeString()}
                            </StyledTableCell>
                            <StyledTableCell align="center">{log.name}</StyledTableCell>
                            <StyledTableCell align="center">{log.current_number}</StyledTableCell>
                        </StyledTableRow>
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
                    rowsPerPageOptions={[10, 20, 50]}
                    component="div"
                    count={logs.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Box>
        </TableContainer>
    );
}
