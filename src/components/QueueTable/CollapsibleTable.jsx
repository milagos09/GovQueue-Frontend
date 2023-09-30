import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { glassEffect } from "../../themes/MyTheme";
import Row from "./Row";

export default function CollapsibleTable({
  agencies,
  favorites,
  setFavorites,
  width,
}) {
  //responsiveness
  const customBreakPoint = width > 530;

  const toggleFavorite = (id, isFavorite) => {
    const updatedFavorites = isFavorite
      ? favorites.filter((f) => f !== id)
      : [...favorites, id];
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

  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden", mb: 4, ...glassEffect }}>
        <TableContainer
          sx={{ maxHeight: "550px", paddingX: width > 900 ? "100px" : "2px" }}
        >
          <Table stickyHeader sx={{ mb: "15px" }}>
            <TableHead>
              <TableRow>
                <TableCell align="center">Agency</TableCell>
                <TableCell align="center">Name</TableCell>
                {customBreakPoint && (
                  <TableCell align="center">Region</TableCell>
                )}
                <TableCell align="center">More</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {agencies.length > 0 ? (
                agencies
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((agency) => (
                    <Row
                      key={agency.name}
                      agency={agency}
                      customBreakPoint={customBreakPoint}
                      isFavorite={favorites.includes(agency.agency_id)}
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
          rowsPerPageOptions={[4, 10, 20]}
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
