import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavLink from "./NavLink";
import AppName from "./AppName";
import HamburgerMenu from "./HamburgerMenu";
import { dark } from "./../../themes/MyTheme";
import Search from "./Search";
import DateTime from "./DateTime";
import searchStore from "../../stores/searchStore";

export default function NavBar() {
  const { showSearch } = searchStore();

  return (
    <AppBar position="sticky" sx={{ paddingX: "20px", ...dark }}>
      <Toolbar disableGutters>
        <HamburgerMenu />
        <AppName />
        <NavLink />
        {showSearch ? <Search /> : <DateTime />}
      </Toolbar>
    </AppBar>
  );
}
