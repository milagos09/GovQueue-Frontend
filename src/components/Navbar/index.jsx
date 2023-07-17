import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import FormatDateTime from "./DateTime";
import NavLink from "./NavLink";
import AppName from "./AppName";
import HamburgerMenu from "./HamburgerMenu";


export default function NavBar() {
    return (
        <AppBar position="sticky">
            <Container>
                <Toolbar disableGutters>
                    <HamburgerMenu />
                    <AppName />
                    <NavLink />
                    <FormatDateTime />
                </Toolbar>
            </Container>
        </AppBar>
    );
}
