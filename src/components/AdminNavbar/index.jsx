import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import AdminNavLink from "./AdminNavLink";
import AdminNavBarAppName from "./AdminNavBarAppName";
import AdminHamburgerMenu from "./AdminHamburgerMenu";
import { dark } from "./../../themes/MyTheme";
import userStore from "../../stores/userStore";
import { Box, Grid } from "@mui/material";
import Logout from "./Logout";

export default function AdminNavbar() {
    const { setLoggedIn, loggedIn } = userStore();

    const pages = [
        { nav: "Home", link: `/admin` },
        { nav: "Logs", link: `/admin/logs` },
        { nav: "Support", link: `/admin/support` },
        { nav: "Settings", link: `/admin/settings` },
    ];

    return (
        <AppBar position="sticky" sx={{ paddingX: "20px", ...dark }}>
            <Toolbar disableGutters>
                <Grid container justifyContent={"space-between"} alignItems={"center"}>
                    <Grid item>
                        <Box sx={{ display: "flex", alignItems: "center", columnGap: 2 }}>
                            {loggedIn && <AdminHamburgerMenu pages={[...pages]} />}
                            <AdminNavBarAppName />
                        </Box>
                    </Grid>
                    {loggedIn && (
                        <>
                            <Grid item>
                                <AdminNavLink pages={pages} />
                            </Grid>
                            <Grid item>
                                <Logout />
                            </Grid>
                        </>
                    )}
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
