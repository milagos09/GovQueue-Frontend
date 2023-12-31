import { useState, useEffect } from "react";
import { Box, Switch, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Primary } from "./../Buttons";
import { socket } from "../../helpers/socket";
import userStore from "../../stores/userStore";

export default function ChangePassword({ user }) {
    const { setLoggedIn } = userStore();
    const [isEnabled, setEnabled] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const handleShowToggle = (toggleFunction) => {
        if (isEnabled) {
            toggleFunction((prev) => !prev);
        }
    };

    const toggleShowPassword = () => {
        handleShowToggle(setShowPassword);
    };

    const toggleShowNewPassword = () => {
        handleShowToggle(setShowNewPassword);
    };

    const handleEnableChange = () => {
        setEnabled(!isEnabled);
    };

    const changePassword = () => {
        if (confirm("Changing password will automatically logout this account:")) {
            const body = { userId: user.user_id, email: user.email, oldPassword: password, newPassword: newPassword };
            socket.emit("changePassword", body);
        }
    };

    useEffect(() => {
        socket.on("changePassword", async (data) => {
            if (data.statusCode === 200) {
                const options = {
                    method: "POST",
                    credentials: "include",
                };
                await fetch(`${import.meta.env.VITE_SERVER_URL}/users/logout`, options);
                sessionStorage.clear();
                document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
                setLoggedIn(false);
            } else {
                alert("invalid credentials");
            }
        });
        return () => socket.off("changePassword");
    });

    return (
        <>
            <Box sx={{ ml: "10px" }}>
                Change password:
                <Switch checked={isEnabled} onChange={handleEnableChange} />
            </Box>

            {renderPasswordField("Password", password, setPassword, showPassword, toggleShowPassword, isEnabled)}
            {renderPasswordField(
                "New Password",
                newPassword,
                setNewPassword,
                showNewPassword,
                toggleShowNewPassword,
                isEnabled
            )}

            <Primary value="Change Password" disable={!isEnabled} onClick={changePassword} />
        </>
    );
}

function renderPasswordField(label, value, setValue, show, toggleShow, isEnabled) {
    return (
        <TextField
            label={label}
            size="small"
            type={show && isEnabled ? "text" : "password"}
            fullWidth
            required
            onChange={(e) => setValue(e.target.value)}
            value={value}
            InputProps={{
                disabled: !isEnabled,
                style: {
                    color: "grey",
                    fontSize: ".85rem",
                },
                endAdornment: (
                    <InputAdornment position="end" sx={{ "&:hover": { cursor: "pointer" } }}>
                        {show && isEnabled ? (
                            <VisibilityOff onClick={toggleShow} />
                        ) : (
                            <Visibility onClick={toggleShow} />
                        )}
                    </InputAdornment>
                ),
            }}
        />
    );
}
