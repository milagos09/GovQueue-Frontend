import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function AdminNavLink({ pages }) {
    const [setAnchorElNav] = useState(null);
    const navigate = useNavigate();
    const handleCloseNavMenu = () => {
        // setAnchorElNav(null);
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
                <Link
                    key={page.nav}
                    to={page.link}
                    onClick={page.onClick}
                    style={{ textDecoration: "none", color: "inherit" }}
                >
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
        </Box>
    );
}
