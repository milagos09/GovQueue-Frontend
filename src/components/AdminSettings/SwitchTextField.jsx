import { Box, Switch } from "@mui/material";
import { useState } from "react";
import EditableTextField from "./EditableTextField";

export default function SwitchTextField({ label, value, enabled, handleSave, property }) {
    const [isEnabled, setEnabled] = useState(enabled);
    return (
        <div>
            <Box sx={{ ml: "10px", mb: "10px" }}>
                {label}
                <Switch defaultChecked={isEnabled} onChange={() => setEnabled(!isEnabled)} />
            </Box>

            <EditableTextField property={property} value={value} enabled={isEnabled} handleSave={handleSave} />
        </div>
    );
}
