import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import AdminNavLink from "./AdminNavLink";
import AdminNavBarAppName from "./AdminNavBarAppName";
import AdminHamburgerMenu from "./AdminHamburgerMenu";
import { dark } from "./../../themes/MyTheme";

export default function AdminNavbar() {
  return (
    <AppBar position="sticky" sx={{ paddingX: "20px", ...dark }}>
      <Toolbar disableGutters>
        <AdminHamburgerMenu />
        <AdminNavBarAppName />
        <AdminNavLink />
      </Toolbar>
    </AppBar>
  );
}
