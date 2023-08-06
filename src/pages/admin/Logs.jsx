import AdminNavbar from "../../components/AdminNavbar";
import * as React from "react";
import dayjs from "dayjs";
import { Box, Paper, TableBody, Button } from "@mui/material";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { dark } from "../../themes/MyTheme";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";

export default function Logs() {
  function createData(timestamp, queuename, description, number) {
    return { timestamp, queuename, description, number };
  }

  const rows = [createData("2023-06-22 11:00", "Window 1", "Set", "0")];
  return (
    <>
      <AdminNavbar />
      <Box p={1} sx={{ width: "100%", height: "100%" }}>
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <h2>Start:</h2>
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
                <TableCell>
                  <h2>End:</h2>
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
                <TableCell>
                  <h2>Window:</h2>
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
      <Box p={2} sx={{ width: "100%" }}>
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Time Stamp</TableCell>
                <TableCell align="center">Queue Name</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.queue}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell align="center" component="th" scope="row">
                    {row.timestamp}
                  </TableCell>
                  <TableCell align="center">{row.queuename}</TableCell>
                  <TableCell align="center">{row.description}</TableCell>
                  <TableCell align="center">{row.number}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box p={2} sx={{ width: "100%", height: "100%" }}>
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="left">
                  <ToggleOnOutlinedIcon /> Always Show Logs
                </TableCell>
                <TableCell align="right" l>
                  <Button variant="outlined" sx={{ ...dark, p: 1, m: 0 }}>
                    Download CSV
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button variant="outlined" sx={{ ...dark, p: 1, m: 0 }}>
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
