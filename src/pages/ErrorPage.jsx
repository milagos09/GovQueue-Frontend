import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { gold } from "./../themes/MyTheme";
import { Primary } from "../components/Buttons";

const errorMessages = {
    400: {
        title: "400 - BAD REQUEST",
        description: "The request you made is invalid.",
    },
    404: {
        title: "404 - PAGE NOT FOUND",
        description:
            "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
    },
    500: {
        title: "500 - INTERNAL SERVER ERROR",
        description: "An internal server error occurred. Please try again later.",
    },
};

export default function ErrorPage({ status, redirect }) {
    const message = errorMessages[status] || {
        title: "Unknown Error",
        description: "An unknown error occurred.",
    };

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
                {message.title}
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
                {message.description}
            </Typography>
            {redirect && (
                <Link to={redirect.to} style={{ textDecoration: "none" }}>
                    <Primary value={redirect.buttonValue} />
                </Link>
            )}
        </Box>
    );
}
