import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import queues from "./../../../fake/queues.json";
import { CheckScreenSize } from "../../hooks/CheckScreenSize";
import Row from "./Row";
import { glassEffect } from "../../themes/MyTheme";
import TablePagination from "@mui/material/TablePagination";
import { useState } from "react";
import { useEffect } from "react";

const localStorageFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

export default function CollapsibleTable({ admins, search }) {
    const { width } = CheckScreenSize();
    const customBreakPoint = width > 530;

    const adminsWithQueue = admins
        .filter((admin) => admin.agency.toLowerCase().includes(search.toLowerCase()))
        .map((admin) => {
            return { ...admin, queues: queues.filter((q) => q.adminId === admin.id) };
        });

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [favorites, setFavorites] = useState(localStorageFavorites);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (id, isFavorite) => {
        if (isFavorite) {
            const removedId = favorites.filter((f) => f !== id);
            setFavorites(removedId);
        } else {
            setFavorites((prev) => [...prev, id]);
        }
    };

    const handleChangePage = (event, newPage) => {
        console.log(`handleChangePage: ${newPage}`);
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        console.log(`handleChangeRowsPerPage: ${+event.target.value}`);
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: "100%", overflow: "hidden", my: 4, ...glassEffect }}>
            <TableContainer sx={{ maxHeight: "550px", paddingX: width > 800 ? "100px" : "10px" }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell />
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
