import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import AdminNavLink from "./AdminNavLink";
import AdminNavBarAppName from "./AdminNavBarAppName";
import AdminHamburgerMenu from "./AdminHamburgerMenu";

export default function AdminNavBar() {
  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar disableGutters>
          <AdminHamburgerMenu />
          <AdminNavBarAppName />
          <AdminNavLink />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
