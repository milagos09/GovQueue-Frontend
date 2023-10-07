import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import AdminNavLink from "./AdminNavLink";
import AdminNavBarAppName from "./AdminNavBarAppName";
import AdminHamburgerMenu from "./AdminHamburgerMenu";
import { dark } from "./../../themes/MyTheme";
import userStore from "../../stores/userStore";

export default function AdminNavbar() {
    const { setLoggedIn, loggedIn } = userStore();

    const pages = [
        { nav: "Home", link: `/admin` },
        { nav: "Logs", link: `/admin/logs` },
        { nav: "Support", link: `/admin/support` },
        { nav: "Settings", link: `/admin/settings` },
        {
            nav: "Logout",
            link: "/admin",
            onClick: async () => {
                const options = {
                    method: "POST",
                    credentials: "include",
                };
                await fetch(`${import.meta.env.VITE_SERVER_URL}/users/logout`, options);
                sessionStorage.clear();
                setLoggedIn(false);
            },
        },
    ];

    return (
        <AppBar position="sticky" sx={{ paddingX: "20px", ...dark }}>
            <Toolbar disableGutters>
                {loggedIn && <AdminHamburgerMenu pages={pages} />}
                <AdminNavBarAppName />
                {loggedIn && <AdminNavLink pages={pages} />}
            </Toolbar>
        </AppBar>
    );
}
