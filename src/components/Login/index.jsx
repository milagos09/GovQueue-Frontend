import { useState, useEffect } from "react";
import { TextField, Container, InputAdornment, Grid } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Primary } from "./../Buttons";
import FetchData from "./../../hooks/FetchData";
import LoadingScreen from "./../LoadingScreen";
import userStore from "../../stores/userStore";
import queuesStore from "../../stores/queuesStore";
import { setSessionStorage } from "../../helpers/sessionStorage";

export default function AdminLogin() {
    const { setLoggedIn } = userStore();
    const { setQueues } = queuesStore();
    const { data, isFetching, fetchData } = FetchData();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPasswordClick = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
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
        await fetchData(`${import.meta.env.VITE_SERVER_URL}/users/login`, options);
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
                    <Grid container spacing={2} justifyContent="space-between" textAlign="center" rowGap={2}>
                        <Grid item xs={12} sm={6}>
                            <Primary value={"Log in"} type={"submit"} sx={{ width: "120px" }} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <a href="#">Forgot Password?</a>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </>
    );
}
