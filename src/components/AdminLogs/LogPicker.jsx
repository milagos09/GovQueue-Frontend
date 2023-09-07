import { Grid, Stack, Typography, Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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
                    <Typography>Start:</Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer
                            components={["DatePicker", "MobileDatePicker", "DesktopDatePicker", "StaticDatePicker"]}
                        >
                            <DemoItem label="">
                                <DatePicker
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
                    <Typography>End:</Typography>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer
                            components={["DatePicker", "MobileDatePicker", "DesktopDatePicker", "StaticDatePicker"]}
                        >
                            <DemoItem label="">
                                <DatePicker
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
                    <Typography>Queue:</Typography>

                    <FormControl sx={{ m: 2, minWidth: "150px" }}>
                        <Select
                            size="small"
                            labelId="queue-simple-select-label"
                            id="queue-simple-select"
                            value={selectedQueue}
                            sx={{ fontSize: ".84rem" }}
                            onChange={handleChangeSelect}
                        >
                            <MenuItem sx={{ fontSize: ".84rem" }} value={"All"}>
                                All
                            </MenuItem>
                            {queues.map((queue) => (
                                <MenuItem key={queue} sx={{ fontSize: ".84rem" }} value={queue}>
                                    {queue}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Stack>
            </Grid>
        </Box>
    );
}
