import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import AdminNavLink from "./AdminNavLink";
import AdminNavBarAppName from "./AdminNavBarAppName";
import AdminHamburgerMenu from "./AdminHamburgerMenu";
import { dark } from "./../../themes/MyTheme";
import { CheckLogin } from "../../hooks/CheckLogin";

export default function AdminNavbar() {
    const isLoggedIn = CheckLogin();
    return (
        <AppBar position="sticky" sx={{ paddingX: "20px", ...dark }}>
            <Toolbar disableGutters>
                <AdminHamburgerMenu />
                <AdminNavBarAppName />
                {isLoggedIn && <AdminNavLink />}
            </Toolbar>
        </AppBar>
    );
}
