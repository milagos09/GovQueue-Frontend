import { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { glassEffect } from "../../themes/MyTheme";
import { CheckScreenSize } from "../../hooks/CheckScreenSize";
import Row from "./Row";

export default function CollapsibleTable({ admins, favorites, setFavorites }) {
    //responsiveness
    const { width } = CheckScreenSize();
    const customBreakPoint = width > 530;

    //pagination
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const toggleFavorite = (id, isFavorite) => {
        const updatedFavorites = isFavorite ? favorites.filter((f) => f !== id) : [...favorites, id];
        setFavorites(updatedFavorites);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        const newRowsPerPage = Number(event.target.value);
        setRowsPerPage(newRowsPerPage);
        setPage(0);
    };

    return (
        <Paper sx={{ width: "100%", overflow: "hidden", mb: 4, ...glassEffect }}>
            <TableContainer sx={{ maxHeight: "550px", paddingX: width > 900 ? "100px" : "2px" }}>
                <Table stickyHeader sx={{ mb: "15px" }}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Show</TableCell>
                            <TableCell align="center">Agency</TableCell>
                            <TableCell align="center">Name</TableCell>
                            {customBreakPoint && <TableCell align="center">Region</TableCell>}
                            <TableCell align="center">More</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {admins.length > 0 ? (
                            admins
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((admin) => (
                                    <Row
                                        key={admin.id}
                                        admin={admin}
                                        customBreakPoint={customBreakPoint}
                                        isFavorite={favorites.includes(admin.id)}
                                        toggleFavorite={toggleFavorite}
                                    />
                                ))
                        ) : (
                            <TableRow>
                                <TableCell align="center" colSpan={5}>
                                    No results found
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 20]}
                component="div"
                count={admins.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
