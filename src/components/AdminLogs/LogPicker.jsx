import { Grid, Stack, Typography, Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function LogPicker() {
  const [defaultDate, setDefaultDate] = useState(dayjs());
  const currentDate = dayjs();
  const defaultStartDate = currentDate.subtract(1, "day");
  const [startDate, setStartDate] = useState(defaultStartDate);

  return (
    <Box sx={{ padding: 2, margin: 2 }}>
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
          spacing={2}
          padding={2}>
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
                  value={startDate}
                  onChange={(newValue) => setStartDate(newValue)}
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
          padding={2}>
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
                  value={defaultDate}
                  onChange={(newValue) => setDefaultDate(newValue)}
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
          padding={2}>
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
    </Box>
  );
}
