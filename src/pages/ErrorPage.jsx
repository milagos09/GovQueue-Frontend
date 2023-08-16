import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { gold } from "./../themes/MyTheme";
import { Primary } from "../components/Buttons";

const ErrorPage = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                textAlign: "center",
                fontFamily: "Arial, sans-serif",
            }}
        >
            <Typography
                variant="h1"
                sx={{
                    marginBottom: "1rem",
                    ...gold,
                    fontSize: {
                        xs: "3rem",
                        sm: "4rem",
                        lg: "5rem",
                    },
                }}
            >
                Oops!
            </Typography>
            <Typography
                variant="h2"
                sx={{
                    marginBottom: "1rem",
                    fontSize: {
                        xs: "2rem",
                        sm: "3rem",
                        lg: "4rem",
                    },
                }}
            >
                404 - PAGE NOT FOUND
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    marginBottom: "1.5rem",
                    maxWidth: "400px",
                    fontSize: {
                        xs: "0.8rem",
                        sm: "1rem",
                        lg: "1.2rem",
                    },
                }}
            >
                The page you are looking for might have been removed, had its name changed, or is temporarily
                unavailable.
            </Typography>
            <Link to="/" style={{ textDecoration: "none" }}>
                <Primary value={"Go to homepage"} />
            </Link>
        </Box>
    );
};

export default ErrorPage;
