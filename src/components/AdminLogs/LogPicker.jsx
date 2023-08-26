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

export default function LogPicker({ queues }) {
    const [defaultDate, setDefaultDate] = useState(dayjs());
    const currentDate = dayjs();
    const defaultStartDate = currentDate.subtract(1, "day");
    const [startDate, setStartDate] = useState(defaultStartDate);
    console.log(queues);
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
                    padding={2}
                >
                    <Typography>Queue:</Typography>

                    <FormControl sx={{ m: 2, minWidth: "150px" }}>
                        <Select
                            size="small"
                            labelId="queue-simple-select-label"
                            id="queue-simple-select"
                            defaultValue={"all"}
                            sx={{ fontSize: ".84rem" }}
                        >
                            <MenuItem sx={{ fontSize: ".84rem" }} value={"all"}>
                                All
                            </MenuItem>
                            {queues.map((queue, i) => (
                                <MenuItem key={i} sx={{ fontSize: ".84rem" }} value={queue.name}>
                                    {queue.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Stack>
            </Grid>
        </Box>
    );
}
