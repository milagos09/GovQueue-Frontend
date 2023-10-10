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
import Skeleton from "../Skeleton";
import utilityStore from "../../stores/utilityStore";

export default function CollapsibleTable({
  agencies,
  favorites,
  setFavorites,
  width,
}) {
  //responsiveness
  const customBreakPoint = width > 900;

  const { isLoading } = utilityStore();

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

  const TableContent = () => {
    if (isLoading) {
      return (
        <tr>
          <td colSpan={5}>
            <Skeleton number={5} variant="rounded" />
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
          <TableCell align="center" colSpan={5}>
            No results.
          </TableCell>
        </TableRow>
      );
    }
  };

  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden", mb: 4, ...glassEffect }}>
        <TableContainer
          sx={{
            maxHeight: "655px",
            paddingX: width > 1048 ? "90px" : "2px",
            overflow: "hidden",
          }}
        >
          <Table stickyHeader sx={{ mb: "15px" }}>
            <TableHead>
              <TableRow>
                <TableCell align="center">Agency</TableCell>
                <TableCell align="center">Name</TableCell>
                {customBreakPoint && (
                  <TableCell align="center">Region</TableCell>
                )}
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableContent />
            </TableBody>
          </Table>
        </TableContainer>
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
