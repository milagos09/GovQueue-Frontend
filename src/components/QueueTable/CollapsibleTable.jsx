import { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import ToggleFavorites from "./ToggleFavorites";
import { glassEffect } from "../../themes/MyTheme";
import { CheckScreenSize } from "../../hooks/CheckScreenSize";
import Row from "./Row";
import queues from "./../../../fake/queues.json";

export default function CollapsibleTable({ admins, search }) {
    const { width } = CheckScreenSize();
    const customBreakPoint = width > 530;
    const localStorageFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [favorites, setFavorites] = useState(localStorageFavorites);
    const [showFavorites, setShowFavorites] = useState(false);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

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

    let adminsWithQueue = admins
        .filter((admin) => admin.agency.toLowerCase().includes(search.toLowerCase()))
        .map((admin) => {
            return { ...admin, queues: queues.filter((q) => q.adminId === admin.id) };
        });

    if (showFavorites) {
        adminsWithQueue = adminsWithQueue.filter((admin) => favorites.includes(admin.id));
    }

    return (
        <Paper sx={{ width: "100%", overflow: "hidden", my: 4, ...glassEffect, borderRadius: "2%" }}>
            <TableContainer sx={{ maxHeight: "550px", paddingX: width > 800 ? "100px" : "2px" }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">
                                <ToggleFavorites showFavorites={showFavorites} setShowFavorites={setShowFavorites} />
                            </TableCell>
                            <TableCell align="center">Agency</TableCell>
                            <TableCell align="center">Name</TableCell>
                            {customBreakPoint && <TableCell align="center">Region</TableCell>}
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {adminsWithQueue.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((admin) => (
                            <Row
                                key={admin.id}
                                admin={admin}
                                customBreakPoint={customBreakPoint}
                                isFavorite={favorites.includes(admin.id)}
                                toggleFavorite={toggleFavorite}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 20]}
                component="div"
                count={adminsWithQueue.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
