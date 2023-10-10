import Typography from "@mui/material/Typography";
import { gold } from "../../themes/MyTheme";
export default function AppName() {
    return (
        <>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/admin"
                sx={{
                    color: "azure",
                    display: { sm: "flex" },
                    fontWeight: 700,
                    textDecoration: "none",
                    "&:hover": { ...gold },
                }}
            >
                GovQueue
            </Typography>
        </>
    );
}
