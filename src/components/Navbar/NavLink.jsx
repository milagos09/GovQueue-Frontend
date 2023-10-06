import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function NavLink() {
  const pages = [
    { nav: "Home", link: "/" },
    { nav: "About us", link: "/about" },
    { nav: "Support", link: "/support" },
  ];

  const location = useLocation();

  return (
    <Box
      sx={{
        display: { xs: "none", sm: "flex" },
        // visibility: { xs: "hidden", sm: "visible" },
      }}>
      {pages.map((page) => (
        <Link
          key={page.nav}
          to={page.link}
          style={{
            textDecoration: "none",
            cursor: "default",
          }}>
          <Button
            sx={{
              my: 2,
              // color: "white",
              display: "block",
              width: "100%",
              color: location.pathname === page.link ? "#FB9300" : "white",
              "&:hover": {
                cursor: "pointer",
                fontWeight: "bold",
              },
            }}>
            {page.nav}
          </Button>
        </Link>
      ))}
    </Box>
  );
}
