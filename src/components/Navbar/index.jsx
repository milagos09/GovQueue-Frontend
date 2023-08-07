import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import FormatDateTime from "./DateTime";
import NavLink from "./NavLink";
import AppName from "./AppName";
import HamburgerMenu from "./HamburgerMenu";
import { dark } from "./../../themes/MyTheme";
import { useState } from "react";
import Search from "./Search";

export default function NavBar() {
    const [input, setInput] = useState("");
    return (
        <AppBar position="sticky" sx={{ paddingX: "20px", ...dark }}>
            <Toolbar disableGutters>
                <HamburgerMenu />
                <AppName />
                <NavLink />
                <Search />
                {/* <FormatDateTime /> */}
            </Toolbar>
        </AppBar>
    );
}
