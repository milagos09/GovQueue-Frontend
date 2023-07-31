import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function NavLink() {
    const pages = [
        { nav: "Home", link: "/" },
        { nav: "About us", link: "/about" },
        { nav: "Support", link: "/support" },
    ];

    const [selectedTab, setSelectedTab] = useState("/");

    const location = useLocation();

    return (
        <Box
            sx={{
                justifyContent: "space-evenly",
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
            }}
        >
            {pages.map((page) => (
                <Link
                    key={page.nav}
                    to={page.link}
                    style={{
                        textDecoration: "none",

                        boxShadow: location.pathname === page.link ? "0 0 0 -5px blue" : null,
                    }}
                    onClick={() => setSelectedTab(page.link)}
                >
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
                        }}
                    >
                        {page.nav}
                    </Button>
                </Link>
            ))}
        </Box>
    );
}
