import { Primary } from "./../Buttons/";
import { Stack, Box, Switch, FormControlLabel, FormGroup } from "@mui/material";
import DownloadCSVButton from "./DownloadCSVButton";
import ChartModal from "./ChartModal";
import { useState } from "react";

export default function LogOptions({ logs, agency }) {
    const [showCharts, setShowCharts] = useState(false);
    return (
        <Box sx={{ my: 4 }}>
            <Stack
                direction={{ xs: "col", sm: "row" }}
                justifyContent="space-between"
                alignItems="center"
                spacing={5}
                rowGap={3}
            >
                <FormGroup>
                    {/* <FormControlLabel control={<Switch defaultChecked />} label="Always Show Logs" /> */}
                </FormGroup>
                <Box>
                    <DownloadCSVButton logs={logs} agency={agency} />
                    <Primary
                        value={"Analyze"}
                        onClick={() => {
                            setShowCharts(true);
                        }}
                    />
                    {showCharts && <ChartModal setOpenCharts={setShowCharts} logs={logs} />}
                </Box>
            </Stack>
        </Box>
    );
}
