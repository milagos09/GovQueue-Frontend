import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import logs from "../../../fake/logs.json";
import { TableBody, Typography } from "@mui/material";
import { dark, glassEffect } from "../../themes/MyTheme";

export default function LogTable() {
  return (
    <fieldset
      style={{
        // borderRadius: "3px",
        border: "1px inset rgba(0, 0, 0, .2)",
        padding: "5px 1px",
        // margin: "20px 10px",
        ...glassEffect,
      }}>
      <Table sx={{ width: "100%" }} size="small" aria-label="a dense table">
        <TableRow>
          <TableCell align="center">
            <Typography variant="subtitle1">Time Stamp</Typography>
          </TableCell>
          <TableCell align="center">
            <Typography variant="subtitle1">Queue Name</Typography>
          </TableCell>
          <TableCell align="center">
            <Typography variant="subtitle1">Description</Typography>
          </TableCell>
          <TableCell align="center">
            <Typography variant="subtitle1">Number</Typography>
          </TableCell>
        </TableRow>

        <TableBody>
          {logs.map((log) => (
            <TableRow
              key={log.adminId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell align="center" component="th" scope="row">
                <Typography variant="subtitle2">
                  {log.timestamp.slice(0, 19)}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle1">{log.queueId}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle1">{log.id}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle1">{log.queue}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </fieldset>
  );
}
