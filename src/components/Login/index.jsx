import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  InputAdornment,
  Checkbox,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleShowPasswordClick = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  return (
    <Container maxWidth="sm">
      <form>
        <div style={{ margin: "16px 0" }}>
          <TextField
            label="Username"
            variant="outlined"
            type="username"
            fullWidth
            required
          />
        </div>

        <div style={{ margin: "16px 0" }}>
          <TextField
            label="Password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            fullWidth
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
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
            <Checkbox
              checked={rememberMe}
              onChange={handleRememberMeChange}
              color="primary"
            />
            <span>Remember me</span>
          </div>
          <div>
            <a href="/forgot-password">Forgot Password?</a>
          </div>
        </div>

        <div style={{ margin: "16px 0" }}>
          <Button variant="contained" color="primary" type="submit">
            Log in
          </Button>
        </div>
      </form>
    </Container>
  );
}
