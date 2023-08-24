import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function AdminNavLink() {
    const [setAnchorElNav] = useState(null);
    const pages = [
        { nav: "Home", link: `/admin` },
        { nav: "Logs", link: `/admin/logs` },
        { nav: "Support", link: `/admin/support` },
        { nav: "Settings", link: `/admin/settings` },
    ];
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <Box
            sx={{
                justifyContent: "space-evenly",
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                "&:hover": {
                    cursor: "pointer",
                    textDecoration: "none",
                },
            }}
        >
            {pages.map((page) => (
                <Link key={page.nav} to={page.link} style={{ textDecoration: "none", color: "inherit" }}>
                    <Button
                        onClick={handleCloseNavMenu}
                        sx={{
                            my: 2,
                            display: "block",
                            width: "100%",
                            color: location.pathname === page.link ? "#FB9300" : "white",
                            "&:hover": {
                                cursor: "pointer",
                                fontWeight: "bold",
                            },
                        }}
                    >
                        {page.nav}
                    </Button>
                </Link>
            ))}
            <Link
                key={"Logout"}
                to={"/admin/login"}
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={() => sessionStorage.clear()}
            >
                <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block", width: "100%" }}>
                    {"Logout"}
                </Button>
            </Link>
        </Box>
    );
}
