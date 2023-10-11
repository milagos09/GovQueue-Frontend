import { useState, useEffect } from "react";
import { TextField, Container, InputAdornment, Grid, Snackbar, Alert, Stack } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Primary } from "./../Buttons";
import FetchData from "./../../hooks/FetchData";
import LoadingScreen from "./../LoadingScreen";
import userStore from "../../stores/userStore";
import queuesStore from "../../stores/queuesStore";
import { setSessionStorage } from "../../helpers/sessionStorage";
import RegisterNavLink from "../RegistrationPage/RegisterLink";
import { socket } from "./../../helpers/socket";

export default function AdminLogin() {
    const { setLoggedIn } = userStore();
    const { setQueues } = queuesStore();
    const { data, isFetching, fetchData } = FetchData();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState("error");

    const pages = [{ nav: "Register", link: `/register` }];

    const handleShowPasswordClick = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleSnackbarClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setSnackbarOpen(false);
    };

    const showAlertSnackbar = (message, severity) => {
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setSnackbarOpen(true);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const trimmedEmail = email.trim();

        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ email: trimmedEmail, password: password }),
        };

        try {
            const response = await fetchData(`${import.meta.env.VITE_SERVER_URL}/users/login`, options);
        } catch (error) {
            showAlertSnackbar("Login failed. Please check your credentials and try again.", "error");
        }
    };

    const handleForgotPassword = async () => {
        const email = prompt("Input your email:");
        const lastName = prompt("Input your last name (case sensitive):");
        if (email && lastName) {
            socket.emit("forgotPassword", { email: email.trim(), lastName: lastName.trim() }, (data) => {
                if (data.sent) {
                    alert("New password has been sent to your email address");
                }
            });
        }
    };

    useEffect(() => {
        const { user, agency, queues } = data || {};
        if (user && agency && queues) {
            setSessionStorage("user", user);
            setSessionStorage("agency", agency);
            setQueues(queues);
            setLoggedIn(true);
            setSessionStorage("login", true);
        }
    }, [data]);
    return (
        <>
            <Container maxWidth="sm">
                <LoadingScreen isFetching={isFetching} />
                <form onSubmit={handleLogin}>
                    <div style={{ margin: "16px 0" }}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            type="email"
                            fullWidth
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div style={{ margin: "16px 0" }}>
                        <TextField
                            label="Password"
                            variant="outlined"
                            type={showPassword ? "text" : "password"}
                            fullWidth
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end" sx={{ "&:hover": { cursor: "pointer" } }}>
                                        {showPassword ? (
                                            <VisibilityOff onClick={handleShowPasswordClick} />
                                        ) : (
                                            <Visibility onClick={handleShowPasswordClick} />
                                        )}
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                        <RegisterNavLink pages={pages} />

                        <Primary value={"Log in"} type={"submit"} sx={{ width: "120px" }} />
                    </Stack>
                </form>
                <Stack direction="column" justifyContent="flex-end" alignItems="flex-end" spacing={2} mt={2}>
                    <a href="#" onClick={handleForgotPassword}>
                        Forgot Password?
                    </a>
                </Stack>
                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={3000}
                    onClose={handleSnackbarClose}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "center",
                    }}
                >
                    <Alert elevation={6} variant="filled" onClose={handleSnackbarClose} severity={snackbarSeverity}>
                        {snackbarMessage}
                    </Alert>
                </Snackbar>
            </Container>
        </>
    );
}
