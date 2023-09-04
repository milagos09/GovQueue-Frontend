import { Box, InputAdornment, IconButton, Switch } from "@mui/material";
import EditableTextField from "./EditableTextField";

export default function SwitchTextField({ label, value, enabled }) {
    return (
        <div>
            <Box sx={{ ml: "10px", mb: "10px" }}>
                {label}
                <Switch checked={enabled} />
            </Box>

            <EditableTextField value={value} />
        </div>
    );
}
