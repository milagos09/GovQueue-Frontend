import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import userStore from "../../stores/userStore";
import { gold } from "./../../themes/MyTheme";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Logout() {
    const { setLoggedIn } = userStore();
    const logout = async () => {
        const options = {
            method: "POST",
            credentials: "include",
        };
        await fetch(`${import.meta.env.VITE_SERVER_URL}/users/logout`, options);
        sessionStorage.clear();
        setLoggedIn(false);
    };

    return (
        <Box>
            <Link
                to={"/admin"}
                style={{
                    textDecoration: "none",
                    cursor: "default",
                }}
            >
                <Button
                    onClick={logout}
                    sx={{
                        my: 2,
                        display: "block",
                        width: "100%",
                        color: "white",
                        "&:hover": {
                            cursor: "pointer",
                            fontWeight: "bold",
                            ...gold,
                        },
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center", columnGap: 1, fontSize: ".66rem" }}>
                        Logout <LogoutIcon fontSize="small" />
                    </Box>
                </Button>
            </Link>
        </Box>
    );
}
