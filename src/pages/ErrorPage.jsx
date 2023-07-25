import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

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
      <Typography variant="h1" sx={{ marginBottom: "1rem", color: "#1976d2" }}>
        Oops!
      </Typography>
      <Typography variant="h2" sx={{ marginBottom: "1rem" }}>
        404 - PAGE NOT FOUND
      </Typography>
      <Typography
        variant="body1"
        sx={{ marginBottom: "1.5rem", maxWidth: "400px" }}
      >
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </Typography>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary">
          GO TO HOMEPAGE
        </Button>
      </Link>
    </Box>
  );
};

export default ErrorPage;
