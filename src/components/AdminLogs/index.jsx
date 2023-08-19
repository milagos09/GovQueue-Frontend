import dayjs from "dayjs";
import {
  Box,
  Paper,
  TableBody,
  Button,
  Typography,
  Grid,
  Stack,
  Container,
} from "@mui/material";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { dark, glassEffect } from "../../themes/MyTheme";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import logs from "../../../fake/logs.json";
import Feildset from "../Fieldset";

export default function AdminLogs(onClick) {
  return (
    <>
      <Container maxWidth="lg">
        <Paper sx={{ padding: 2, margin: 2 }}>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}>
            <Stack
              direction={{ xs: "row", sm: "row" }}
              justifyContent="center"
              alignItems="center"
              spacing={2}>
              <Typography variant="h6">Start:</Typography>
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
            </Stack>

            <Stack
              direction={{ xs: "row", sm: "row" }}
              justifyContent="center"
              alignItems="center"
              spacing={2}>
              <Typography variant="h6">End:</Typography>

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
            </Stack>
            <Stack
              direction={{ xs: "row", sm: "row" }}
              justifyContent="center"
              alignItems="center"
              spacing={2}
              padding={1}>
              <Typography variant="h6">Window:</Typography>

              <FormControl sx={{ m: 2, minWidth: 189 }}>
                <Select
                  size="small"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value="Region">
                  <MenuItem>Window 1</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
        </Paper>

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
                      {log.timestamp.slice(0, 16)}
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
        <Paper sx={{ padding: 1, minWidth: "100%" }}>
          <Stack
            direction={{ xs: "row", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}>
            <FormGroup>
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Always Show Logs"
              />
            </FormGroup>

            <Button
              variant="contained"
              onClick={onClick}
              sx={{
                ...dark,
                "&:hover": { fontWeight: "bold", background: "black" },
                borderRadius: "2px",
                mx: "3px",
              }}>
              Download CSV
            </Button>

            <Button
              variant="contained"
              onClick={onClick}
              sx={{
                ...dark,
                "&:hover": { fontWeight: "bold", background: "black" },
                borderRadius: "2px",
                mx: "3px",
              }}>
              Analyze Data
            </Button>
          </Stack>
        </Paper>
      </Container>
    </>
  );
}
