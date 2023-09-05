import { TextField, MenuItem } from "@mui/material";
import { useState } from "react";

export default function EditableTextField({ label, value, menu }) {
    const [currentValue, setCurrentValue] = useState(value);
    return (
        <>
            <TextField
                select
                label={label}
                value={currentValue}
                size="small"
                sx={{ "& .MuiSelect-select": { color: "grey", fontSize: ".8rem" } }}
            >
                {menu.map((region, i) => (
                    <MenuItem key={region} value={i} sx={{ fontSize: ".8rem" }}>
                        {region}
                    </MenuItem>
                ))}
            </TextField>
        </>
    );
}
