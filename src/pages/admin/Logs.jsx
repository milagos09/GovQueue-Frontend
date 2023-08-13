import AdminNavbar from "../../components/AdminNavbar";
import dayjs from "dayjs";
import { Box, Paper, TableBody, Button, Typography } from "@mui/material";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { dark, glassEffect } from "../../themes/MyTheme";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export default function Logs(onClick) {
  function createData(timestamp, queuename, description, number) {
    return { timestamp, queuename, description, number };
  }

  const rows = [createData("2023-06-22 11:00", "Window 1", "Set", "0")];
  return (
    <>
      <AdminNavbar />
      <Box
        p={1}
        sx={{
          width: "100%",
          height: "100%",
          ...glassEffect,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <TableContainer component={Paper}>
          <Table
            sx={{
              width: "100%",
            }}
            size="small"
            aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <Typography variant="h6">Start:</Typography>
                </TableCell>
                <TableCell align="left">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                      components={[
                        "DatePicker",
                        "MobileDatePicker",
                        "DesktopDatePicker",
                        "StaticDatePicker",
                      ]}>
                      <DemoItem label="">
                        <DatePicker
                          sx={{ align: "left", width: "150px" }}
                          defaultValue={dayjs("2022-04-17")}
                        />
                      </DemoItem>
                    </DemoContainer>
                  </LocalizationProvider>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h6">End:</Typography>
                </TableCell>
                <TableCell align="left">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                      components={[
                        "DatePicker",
                        "MobileDatePicker",
                        "DesktopDatePicker",
                        "StaticDatePicker",
                      ]}>
                      <DemoItem label="">
                        <DatePicker
                          sx={{ align: "left", width: "150px" }}
                          defaultValue={dayjs("2022-04-17")}
                        />
                      </DemoItem>
                    </DemoContainer>
                  </LocalizationProvider>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h6">Window:</Typography>
                </TableCell>
                <TableCell>
                  <FormControl sx={{ m: 2, minWidth: 189 }}>
                    <Select
                      size="small"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value="Region">
                      <MenuItem>Window 1</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Box>
      <Box p={1} sx={{ width: "100%" }}>
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <Typography variant="h6">Time Stamp</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h6">Queue Name</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h6">Description</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h6">Number</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.queue}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell align="center" component="th" scope="row">
                    <Typography variant="subtitle1">{row.timestamp}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="subtitle1">{row.queuename}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="subtitle1">
                      {row.description}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="subtitle1">{row.number}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box p={1} sx={{ width: "100%" }}>
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="left">
                  <FormGroup>
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="Always Show Logs"
                    />
                  </FormGroup>
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    onClick={onClick}
                    sx={{
                      ...dark,
                      "&:hover": { fontWeight: "bold", background: "black" },
                      borderRadius: "4px",
                      mx: "10px",
                    }}>
                    Download CSV
                  </Button>
                </TableCell>
                <TableCell align="left">
                  <Button
                    variant="contained"
                    onClick={onClick}
                    sx={{
                      ...dark,
                      "&:hover": { fontWeight: "bold", background: "black" },
                      borderRadius: "4px",
                      mx: "10px",
                    }}>
                    Analyze Data
                  </Button>
                </TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
