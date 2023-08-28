import Button from "@mui/material/Button";
import { dark } from "../../themes/MyTheme";

export function Primary({ value, onClick, type = "button" }) {
    return (
        <>
            <Button
                variant="contained"
                onClick={onClick}
                sx={{
                    ...dark,
                    "&:hover": { fontWeight: "bold", background: "black" },
                    borderRadius: "4px",
                    mx: "10px",
                }}
                type={type}
            >
                {value}
            </Button>
        </>
    );
}

export function Secondary({ value, onClick, type = "button" }) {
    return (
        <>
            <Button
                variant="contained"
                onClick={onClick}
                sx={{
                    backgroundColor: "azure",
                    color: "black",
                    "&:hover": { fontWeight: "bold", backgroundColor: "azure" },
                    borderRadius: "4px",
                    mx: "10px",
                }}
                type={type}
            >
                {value}
            </Button>
        </>
    );
}
