import Button from "@mui/material/Button";
import { dark } from "../../themes/MyTheme";

export function Primary({ value, onClick }) {
    return (
        <>
            <Button
                variant="contained"
                onClick={onClick}
                sx={{ ...dark, "&:hover": { fontWeight: "bold", background: "black" }, borderRadius: "4px" }}
            >
                {value}
            </Button>
        </>
    );
}

export function Secondary({ value, onClick }) {
    return (
        <>
            <Button variant="contained" color="grey" onClick={onClick}>
                {value}
            </Button>
        </>
    );
}
