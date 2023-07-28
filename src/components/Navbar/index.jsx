import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import FormatDateTime from "./DateTime";
import NavLink from "./NavLink";
import AppName from "./AppName";
import HamburgerMenu from "./HamburgerMenu";
import { dark } from "./../../themes/MyTheme";

export default function NavBar() {
    return (
        <AppBar position="sticky" sx={{ paddingX: "20px", ...dark }}>
            <Toolbar disableGutters>
                <HamburgerMenu />
                <AppName />
                <NavLink />
                <FormatDateTime />
            </Toolbar>
        </AppBar>
    );
}
