import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

export default function AdminNavBar() {
  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar disableGutters>
          {/* <HamburgerMenu />
                    <AppName />
                    <NavLink />
                    <FormatDateTime /> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
