import { TextField, InputAdornment, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";

export default function EditableTextField({ label, value }) {
    const [editable, setEditable] = useState(false);
    const editableStyle = { background: "azure", color: "#1976D2" };
    const inputStyles = {
        style: {
            color: "grey",
            fontSize: ".85rem",
            ...(editable ? editableStyle : {}),
        },
        readOnly: !editable,
        endAdornment: (
            <InputAdornment position="end">
                <IconButton
                    onClick={() => {
                        setEditable(!editable);
                    }}
                >
                    {editable ? (
                        <SaveIcon style={{ width: "20px", color: "#1976D2" }} />
                    ) : (
                        <EditIcon style={{ width: "20px" }} />
                    )}
                </IconButton>
            </InputAdornment>
        ),
    };
    return (
        <>
            <TextField
                sx={{ width: "100%" }}
                size="small"
                label={label}
                defaultValue={value}
                multiline
                InputProps={{
                    ...inputStyles,
                }}
            />
        </>
    );
}
