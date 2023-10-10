import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";

export default function HamburgerMenu() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const pages = [
        { nav: "Home", link: "/" },
        { nav: "About us", link: "/about" },
        { nav: "Support", link: "/support" },
    ];
    const handleOpenNavMenu = (e) => {
        setAnchorElNav(e.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{ display: { xs: "flex" } }}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-nav"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>

            <Menu
                id="menu-nav"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: "block" },
                }}
            >
                {pages.map((page, i) => (
                    <div style={{ padding: "0 8px" }} key={page.nav}>
                        {!!i && <Divider />}
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">
                                <Link to={page.link} style={{ textDecoration: "none", color: "inherit" }}>
                                    {page.nav}
                                </Link>
                            </Typography>
                        </MenuItem>
                    </div>
                ))}
            </Menu>

            <Box
                sx={{
                    justifyContent: "space-evenly",
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" },
                }}
            >
                <Box sx={{ flexGrow: 0 }}>
                    <Menu
                        sx={{ mt: "45px" }}
                        id="menu-user"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    ></Menu>
                </Box>
            </Box>
        </Box>
    );
}
