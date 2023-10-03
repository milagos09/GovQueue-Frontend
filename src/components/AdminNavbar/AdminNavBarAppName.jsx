import Typography from "@mui/material/Typography";
import { gold } from "./../../themes/MyTheme";

export default function AdminNavBarAppName() {
  return (
    <>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/admin"
        sx={{
          mr: 2,
          color: "azure",
          display: { xs: "none", md: "flex" },
          fontWeight: 700,
          textDecoration: "none",
        }}>
        GovQueue
      </Typography>

      <Typography
        variant="h6"
        noWrap
        component="a"
        sx={{
          ...gold,
          mr: 2,
          display: { xs: "flex", md: "none" },
          visibility: { xs: "hidden" },
          flexGrow: { xs: "50" },
          fontWeight: 700,
          textDecoration: "none",
        }}>
        GovQueue
      </Typography>
    </>
  );
}
