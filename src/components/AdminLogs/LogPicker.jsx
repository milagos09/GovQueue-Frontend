import { Paper, Grid, Stack, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { dark, glassEffect } from "../../themes/MyTheme";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function LogPicker() {
  return (
    <Paper sx={{ ...glassEffect, padding: 2, margin: 2 }}>
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
  );
}
