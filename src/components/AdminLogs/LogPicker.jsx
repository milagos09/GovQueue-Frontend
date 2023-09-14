import { Grid, Stack, FormControl, Box, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import MenuItem from "@mui/material/MenuItem";

export default function LogPicker({ queues, startDate, endDate, handleChangeDate, selectedQueue, handleChangeSelect }) {
    return (
        <Box sx={{ padding: 2, margin: 2 }}>
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center" spacing={2}>
                <Stack
                    direction={{ xs: "row", sm: "row" }}
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    padding={2}
                >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer
                            components={["DatePicker", "MobileDatePicker", "DesktopDatePicker", "StaticDatePicker"]}
                        >
                            <DemoItem label="">
                                <DatePicker
                                    label="Start Date"
                                    sx={{
                                        align: "left",
                                        width: "150px",
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
                </Stack>

                <Stack
                    direction={{ xs: "row", sm: "row" }}
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    padding={2}
                >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer
                            components={["DatePicker", "MobileDatePicker", "DesktopDatePicker", "StaticDatePicker"]}
                        >
                            <DemoItem label="">
                                <DatePicker
                                    label="End Date"
                                    sx={{
                                        align: "left",
                                        width: "150px",
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
                </Stack>
                <Stack
                    direction={{ xs: "row", sm: "row" }}
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    padding={2}
                >
                    <FormControl sx={{ minWidth: "150px", height: "45px" }}>
                        <TextField
                            select
                            label="Queue"
                            labelId="queue-simple-select-label"
                            id="queue-simple-select"
                            value={selectedQueue}
                            onChange={handleChangeSelect}
                            sx={{ "& .MuiSelect-select": { fontSize: ".8rem", height: "18px" } }}
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
                </Stack>
            </Grid>
        </Box>
    );
}
