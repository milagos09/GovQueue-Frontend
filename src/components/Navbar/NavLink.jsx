import { useState } from "react";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function NavLink() {
    const [setAnchorElNav] = useState(null);
    const pages = [
      { nav: "Home", link: "/" },
      { nav: "About us", link: "/about" },
      { nav: "Support", link: "/support" },
    ];
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
    return (
        <>
          <Box
            sx={{
              justifyContent: "space-evenly",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
            <MenuItem key={page.nav} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <Link to={page.link} style={{ textDecoration: "none", color: "inherit" }}>
                  {page.nav}
                </Link>
              </Typography>
            </MenuItem>
          ))}
          </Box>
        </>
      );
    }