import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import AdminNavLink from "./AdminNavLink";
import AdminNavBarAppName from "./AdminNavBarAppName";
import AdminHamburgerMenu from "./AdminHamburgerMenu";
import { dark } from "./../../themes/MyTheme";
import { useNavigate } from "react-router-dom";

export default function AdminNavbar() {
  const navigate = useNavigate();
  const pages = [
    { nav: "Home", link: `/admin` },
    { nav: "Logs", link: `/admin/logs` },
    { nav: "Support", link: `/admin/support` },
    { nav: "Settings", link: `/admin/settings` },
    {
      nav: "Logout",
      link: "/admin/login",
      onClick: async () => {
        const options = {
          method: "POST",
          credentials: "include",
        };
        await fetch(`${import.meta.env.VITE_SERVER_URL}/users/logout`, options);
        sessionStorage.clear();
        navigate(0);
      },
    },
  ];

  const isLoggedIn = !!sessionStorage.getItem("user");

  return (
    <AppBar position="sticky" sx={{ paddingX: "20px", ...dark }}>
      <Toolbar
        disableGutters
        sx={{
          flexDirection: { xs: "row-reverse", md: "row" },
        }}>
        {isLoggedIn && <AdminHamburgerMenu pages={pages} />}
        <AdminNavBarAppName />
        {isLoggedIn && <AdminNavLink pages={pages} />}
      </Toolbar>
    </AppBar>
  );
}
