import { useState, useEffect } from "react";
import { TextField, Container, InputAdornment, Checkbox } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Primary } from "./../Buttons";
import { useNavigate } from "react-router-dom";
import admins from "./../../../fake/admins.json";

export default function AdminLogin() {
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

    const navigate = useNavigate();
    const handleLogin = () => {
        const adminUser = admins.find((admin) => admin.email == email && admin.password == password);
        if (adminUser) {
            sessionStorage.setItem("admin", JSON.stringify(adminUser));
            navigate("/admin");
        }
    };

    useEffect(() => {
        if (sessionStorage.getItem("admin")) navigate("/admin");
    });

    return (
        <Container maxWidth="sm">
            <form>
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
                    }}
                >
                    <div>
                        <Checkbox checked={rememberMe} onChange={handleRememberMeChange} color="primary" />
                        <span>Remember me</span>
                    </div>
                    <div>
                        <a href="/forgot-password">Forgot Password?</a>
                    </div>
                </div>

                <div style={{ margin: "16px 0" }}>
                    <Primary value={"Log in"} onClick={handleLogin} />
                </div>
            </form>
        </Container>
    );
}
