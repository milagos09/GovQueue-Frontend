import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import logs from "../../../fake/logs.json";
import { TableBody, Typography, Box } from "@mui/material";
import { glassEffect } from "../../themes/MyTheme";

export default function LogTable() {
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
  return (
    <Box sx={{ ...glassEffect, p: 2 }}>
      <Table sx={{ width: "100%" }} size="small" aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Time Stamp</StyledTableCell>
            <StyledTableCell align="center">Queue Name</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
            <StyledTableCell align="center">Number</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {logs.map((log) => (
            <StyledTableRow
              key={log.adminId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <StyledTableCell align="center" component="th" scope="row">
                {log.timestamp.slice(0, 19)}
              </StyledTableCell>
              <StyledTableCell align="center">{log.queueId}</StyledTableCell>
              <StyledTableCell align="center">{log.id}</StyledTableCell>
              <StyledTableCell align="center">
                <Typography variant="subtitle2">{log.queue}</Typography>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
