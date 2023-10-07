import { Grid, FormControl, Box, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import MenuItem from "@mui/material/MenuItem";
import { CheckScreenSize } from "./../../hooks/CheckScreenSize";

export default function LogPicker({ queues, startDate, endDate, handleChangeDate, selectedQueue, handleChangeSelect }) {
    const { width } = CheckScreenSize();

    return (
        <>
            <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                rowGap={2}
                sx={{ my: 2 }}
            >
                <Grid item xs={width < 400 ? 12 : 6} sm={4}>
                    <Box sx={{ display: "inline-block" }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                                components={["DatePicker", "MobileDatePicker", "DesktopDatePicker", "StaticDatePicker"]}
                            >
                                <DemoItem label="">
                                    <DatePicker
                                        label="Start Date"
                                        sx={{
                                            align: "left",
                                            maxWidth: "190px",
                                            "& .MuiInputBase-input": {
                                                fontSize: "0.8rem",
                                                textAlign: "center",
                                            },
                                        }}
                                        value={startDate}
                                        onChange={(newDate) => handleChangeDate("startDate", newDate)}
                                    />
                                </DemoItem>
                            </DemoContainer>
                        </LocalizationProvider>
                    </Box>
                </Grid>
                <Grid item xs={width < 400 ? 12 : 6} sm={4}>
                    <Box sx={{ display: "inline-block" }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                                components={["DatePicker", "MobileDatePicker", "DesktopDatePicker", "StaticDatePicker"]}
                            >
                                <DemoItem label="">
                                    <DatePicker
                                        label="End Date"
                                        sx={{
                                            align: "left",
                                            maxWidth: "190px",
                                            "& .MuiInputBase-input": {
                                                fontSize: "0.8rem",
                                                textAlign: "center",
                                            },
                                        }}
                                        value={endDate}
                                        onChange={(newDate) => handleChangeDate("endDate", newDate)}
                                    />
                                </DemoItem>
                            </DemoContainer>
                        </LocalizationProvider>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControl sx={{ width: "190px", mb: "32px" }}>
                        <TextField
                            select
                            label="Queue"
                            labelId="queue-simple-select-label"
                            id="queue-simple-select"
                            value={selectedQueue}
                            onChange={handleChangeSelect}
                            sx={{
                                height: ".78rem",
                                "& .MuiSelect-select": { fontSize: ".8rem", height: "1px" },
                            }}
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
        </>
    );
}
