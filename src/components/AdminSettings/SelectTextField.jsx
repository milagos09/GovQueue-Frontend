import { TextField, MenuItem } from "@mui/material";
import { useState } from "react";

export default function EditableTextField({ label, value, menu, property, handleSave }) {
    const [currentValue, setCurrentValue] = useState(menu[value]);
    return (
        <>
            <TextField
                onChange={(e) => {
                    setCurrentValue(e.target.value);
                    handleSave(property, e.target.value);
                }}
                select
                label={label}
                value={currentValue}
                size="small"
                sx={{ "& .MuiSelect-select": { color: "grey", fontSize: ".8rem" } }}
            >
                {menu.map((region, i) => (
                    <MenuItem key={region} value={region} sx={{ fontSize: ".8rem" }}>
                        {region}
                    </MenuItem>
                ))}
            </TextField>
        </>
    );
}
