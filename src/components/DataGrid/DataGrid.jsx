import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { dark } from "../../themes/MyTheme";

function createData(queue, number, updated, add, remove, reset, edit) {
  return { queue, number, updated, add, remove, reset, edit };
}

const rows = [
  createData(
    "Window 1",
    33,
    "2023-06-22 11:00",
    <AddIcon />,
    <RemoveIcon />,
    <Button variant="text" sx={{ ...dark, p: 0, m: 0 }}>
      Reset
    </Button>,
    <Button variant="text" sx={{ ...dark, p: 0, m: 0 }}>
      Edit
    </Button>
  ),
];

export default function DataGrid() {
  return (
    <>
      <Box p={1} sx={{ width: "100%" }}>
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Card sx={{ border: 1, width: 100, height: 100 }}>
                    <CardMedia></CardMedia>
                  </Card>
                </TableCell>
                <TableCell align="left">
                  <Typography
                    variant="h4"
                    sx={{
                      alignItems: "center",
                      width: "600px",
                      p: 0,
                      m: 0,
                    }}>
                    Bureau of Internal Revenue Region VI{" "}
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Button variant="outlined" sx={{ ...dark, p: 1, m: 0 }}>
                    Add
                  </Button>
                </TableCell>{" "}
                <TableCell align="left">
                  <Button variant="outlined" sx={{ ...dark, p: 1, m: 0 }}>
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Box>

      <Box p={2} sx={{ width: "100%" }}>
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Queue</TableCell>
                <TableCell align="right">Number</TableCell>
                <TableCell align="center">Updated</TableCell>
                <TableRow>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">Action</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.queue}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.queue}
                  </TableCell>
                  <TableCell align="right">{row.number}</TableCell>
                  <TableCell align="center">{row.updated}</TableCell>
                  <TableRow>
                    <TableCell
                      padding="none"
                      align="right"
                      sx={{ border: "1px" }}>
                      {row.add}
                    </TableCell>
                    <TableCell padding="none" align="right">
                      {row.remove}
                    </TableCell>
                    <TableCell padding="none" align="right">
                      {row.reset}
                    </TableCell>
                    <TableCell
                      padding="none"
                      align="right"
                      sx={{ border: "1px" }}>
                      {row.edit}
                    </TableCell>
                  </TableRow>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
