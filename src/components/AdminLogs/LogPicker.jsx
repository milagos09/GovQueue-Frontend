import { Grid, Stack, FormControl, Box, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import MenuItem from "@mui/material/MenuItem";

export default function LogPicker({
  queues,
  startDate,
  endDate,
  handleChangeDate,
  selectedQueue,
  handleChangeSelect,
}) {
  return (
    <Grid
      container
      direction="row"
      rowGap={3}
      columnGap={3}
      justifyContent="space-evenly"
      alignItems="center"
      sx={{ my: 5, px: 7, ml: { sm: 3.5 } }}
    >
      <Grid item xs={5} sm={3}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            components={[
              "DatePicker",
              "MobileDatePicker",
              "DesktopDatePicker",
              "StaticDatePicker",
            ]}
          >
            <DemoItem label="">
              <DatePicker
                label="Start Date"
                sx={{
                  align: "left",
                  maxWidth: "200px",
                  "& .MuiInputBase-input": {
                    fontSize: "0.8rem",
                  },
                }}
                value={startDate}
                onChange={(newDate) => handleChangeDate("startDate", newDate)}
              />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
      </Grid>
      <Grid item xs={5} sm={3}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            components={[
              "DatePicker",
              "MobileDatePicker",
              "DesktopDatePicker",
              "StaticDatePicker",
            ]}
          >
            <DemoItem label="">
              <DatePicker
                label="End Date"
                sx={{
                  align: "left",
                  maxWidth: "200px",
                  "& .MuiInputBase-input": {
                    fontSize: "0.8rem",
                  },
                }}
                value={endDate}
                onChange={(newDate) => handleChangeDate("endDate", newDate)}
              />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
      </Grid>
      <Grid item xs={10} sm={3}>
        <FormControl sx={{ mt: "10px", width: "200px", height: "45px" }}>
          <TextField
            select
            label="Queue"
            labelId="queue-simple-select-label"
            id="queue-simple-select"
            value={selectedQueue}
            onChange={handleChangeSelect}
            sx={{ "& .MuiSelect-select": { fontSize: ".8rem", height: "1px" } }}
          >
            <MenuItem sx={{ fontSize: ".84rem" }} value={"All"}>
              All Queues
            </MenuItem>
            {queues.map((queue) => (
              <MenuItem key={queue} sx={{ fontSize: ".84rem" }} value={queue}>
                {queue}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
      </Grid>
    </Grid>
  );
}
