import { Primary } from "./../Buttons/";
import { Stack, Box, Switch, FormControlLabel, FormGroup } from "@mui/material";
import DownloadCSVButton from "./DownloadCSVButton";

export default function LogOptions({ logs, agency }) {
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
                    <FormControlLabel control={<Switch defaultChecked />} label="Always Show Logs" />
                </FormGroup>
                <Box>
                    <DownloadCSVButton logs={logs} agency={agency} />
                    <Primary value={"Analyze"} />
                </Box>
            </Stack>
        </Box>
    );
}
