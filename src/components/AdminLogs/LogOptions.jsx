import { Primary } from "./../Buttons/";
import { Stack, Box } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export default function LogOptions() {
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
                    <Primary value={"Download"} />
                    <Primary value={"Analyze"} />
                </Box>
            </Stack>
        </Box>
    );
}
