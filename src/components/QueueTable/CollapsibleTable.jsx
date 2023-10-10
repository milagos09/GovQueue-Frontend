import { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { glassEffect } from "../../themes/MyTheme";
import Row from "./Row";
import Skeleton from "../Skeleton";
import utilityStore from "../../stores/utilityStore";
import { StyledTableCell } from "../AdminHome/StyledTableElements";

export default function CollapsibleTable({ agencies, favorites, setFavorites, width }) {
    //responsiveness
    const customBreakPoint = width > 900;

    const { isLoading } = utilityStore();

    const toggleFavorite = (id, isFavorite) => {
        const updatedFavorites = isFavorite ? favorites.filter((f) => f !== id) : [...favorites, id];
        setFavorites(updatedFavorites);
    };

    //pagination
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

    const TableContent = () => {
        if (isLoading) {
            return (
                <tr>
                    <td colSpan={5} style={{ padding: "5px 12px" }}>
                        <Skeleton number={5} variant="rounded" height={60} />
                    </td>
                </tr>
            );
        } else if (agencies.length > 0) {
            return agencies
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((agency) => (
                    <Row
                        key={agency.name}
                        agency={agency}
                        customBreakPoint={customBreakPoint}
                        isFavorite={favorites.includes(agency.agency_id)}
                        toggleFavorite={toggleFavorite}
                    />
                ));
        } else {
            return (
                <TableRow>
                    <TableCell align="center" colSpan={5} sx={{ py: 3 }}>
                        No results found
                    </TableCell>
                </TableRow>
            );
        }
    };

    return (
        <>
            <Paper
                sx={{
                    mb: 4,
                    paddingX: width > 1048 ? "90px" : "2px",
                    ...glassEffect,
                    background: "transparent",
                    border: "none",
                    boxShadow: 0,
                    minWidth: "320px",
                }}
            >
                <Table stickyHeader sx={{ mb: "15px", ...glassEffect }} size="small">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Agency</StyledTableCell>
                            <StyledTableCell align="center">Name</StyledTableCell>
                            {customBreakPoint && <StyledTableCell align="center">Region</StyledTableCell>}
                            <StyledTableCell align="center">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableContent />
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 20]}
                    component="div"
                    count={agencies.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    );
}
