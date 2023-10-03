import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavLink from "./NavLink";
import AppName from "./AppName";
import HamburgerMenu from "./HamburgerMenu";
import { dark } from "./../../themes/MyTheme";
import Search from "./Search";
import DateTime from "./DateTime";

export default function NavBar({ search, setSearch }) {
  return (
    <AppBar position="sticky" sx={{ paddingX: "20px", ...dark }}>
      <Toolbar
        disableGutters
        sx={{
          flexDirection: { xs: "row-reverse", md: "row" },
        }}>
        <HamburgerMenu />
        <AppName />
        <NavLink />
        {search == undefined ? (
          <DateTime />
        ) : (
          <Search search={search} setSearch={setSearch} />
        )}
      </Toolbar>
    </AppBar>
  );
}
