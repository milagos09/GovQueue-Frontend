import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";

export default function AdminNavLink() {
    const id = useParams().id;
    const [setAnchorElNav] = useState(null);
    const pages = [
        { nav: "Home", link: `/${id}` },
        { nav: "Logs", link: id ? `/admin/logs/${id}` : `/login` },
        { nav: "Support", link: id ? `/admin/support/${id}` : `/login` },
        { nav: "Settings", link: id ? `/admin/settings/${id}` : `/login` },
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
                        sx={{ my: 2, color: "white", display: "block", width: "100%" }}
                    >
                        {page.nav}
                    </Button>
                </Link>
            ))}
        </Box>
    );
}
