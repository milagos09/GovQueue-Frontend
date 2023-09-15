import { useState, useEffect } from "react";
import { TextField, Container, InputAdornment, Checkbox } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Primary } from "./../Buttons";
import FetchData from "./../../hooks/FetchData";
import LoadingScreen from "./../LoadingScreen";

export default function AdminLogin() {
    const { data, isFetching, error, fetchData } = FetchData();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleShowPasswordClick = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleRememberMeChange = (event) => {
        setRememberMe(event.target.checked);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const trimmedEmail = email.trim();

        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: trimmedEmail, password: password }),
        };
        await fetchData("https://govqueue-api.onrender.com/users/login", options);
    };

    useEffect(() => {
        if (data) {
            sessionStorage.setItem("user", JSON.stringify(data));
            location.reload();
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

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            margin: "16px 0",
                            flexWrap: "wrap",
                        }}
                    >
                        <div>
                            <Checkbox checked={rememberMe} onChange={handleRememberMeChange} />
                            <span>Remember me</span>
                        </div>
                        <div>
                            <a href="/forgot-password">Forgot Password?</a>
                        </div>
                    </div>

                    <div style={{ margin: "16px 0" }}>
                        <Primary value={"Log in"} type={"submit"} />
                    </div>
                </form>
            </Container>
        </>
    );
}
