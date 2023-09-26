import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import { TableBody, Typography, Box } from "@mui/material";
import { glassEffect } from "../../themes/MyTheme";
import TablePagination from "@mui/material/TablePagination";
import { useState } from "react";
import dayjs from "dayjs";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

export default function LogTable({ logs }) {
    //pagination
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(15);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        const newRowsPerPage = Number(event.target.value);
        setRowsPerPage(newRowsPerPage);
        setPage(0);
    };

    return (
        <Box sx={{ ...glassEffect, p: 2 }}>
            <Table sx={{ width: "100%" }} size="small" aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Time Stamp</StyledTableCell>
                        <StyledTableCell align="center">Queue Name</StyledTableCell>
                        <StyledTableCell align="center">Action</StyledTableCell>
                        <StyledTableCell align="center">Number</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {logs.length === 0 ? (
                        <StyledTableRow>
                            <StyledTableCell colSpan={4} align="center" sx={{ py: "20px", color: "grey" }}>
                                No results found
                            </StyledTableCell>
                        </StyledTableRow>
                    ) : (
                        logs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((log, i) => (
                            <StyledTableRow key={i} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                <StyledTableCell align="center" component="th" scope="row">
                                    {dayjs(log.created_at).format("YYYY-MM-DD HH:mm:ss")}
                                </StyledTableCell>
                                <StyledTableCell align="center">{log.name}</StyledTableCell>
                                <StyledTableCell align="center">{log.action_type}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <Typography variant="subtitle2">{log.current_number}</Typography>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))
                    )}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[15, 25, 50]}
                component="div"
                count={logs.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Box>
    );
}
