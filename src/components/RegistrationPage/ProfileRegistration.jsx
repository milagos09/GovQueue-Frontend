import { useState, useEffect } from "react";
import { Stack, TextField, Grid, MenuItem, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Fieldset from "../Fieldset/index";
import { Primary } from "../Buttons";
import LoadingScreen from "../LoadingScreen";
import FetchData from "../../hooks/FetchData";
import RegisterUploadLogo from "./RegisterUploadLogo";

const regions = [
    "NCR",
    "Region I",
    "Region II",
    "Region III",
    "Region IV",
    "Region V",
    "Region VI",
    "Region VII",
    "Region VIII",
    "Region IX",
    "Region X",
    "Region XI",
    "Region XII",
    "BARMM",
    "CAR",
    "Central Office",
    "CARAGA",
];

const types = [
    "Local Government Units",
    "National Government Agencies",
    "Constitutional Commissions",
    "State Universities and Colleges",
    "Government-Owned and Controlled Corporations",
    "Regulatory Agencies",
    "Law Enforcement Agencies",
    "Special Purpose Agencies",
];

const region = regions.map((region) => ({ value: region, label: region }));
const type = types.map((type) => ({ value: type, label: type }));
export default function ProfileRegistration(redirect) {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        address: "",
        region: "",
        type: "",
        contact: "",
        supportEmail: "",
        website: "",
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        logo: "",
    });
    const { fetchData, data, isFetching, status, error } = FetchData();

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (property, value) => {
        setFormData({
            ...formData,
            [property]: value,
        });
    };

    const toggleShow = () => {
        setShowPassword(!showPassword);
    };

    const handleRegister = async () => {
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
            credentials: "include",
        };
        await fetchData(`${import.meta.env.VITE_SERVER_URL}/register/add`, options);
    };
    useEffect(() => {
        if (status === 201) {
            alert("Registration successful, pending for approval.");
            if (redirect) {
                // Redirect when the condition is met
                window.location.replace("/");
            }
        } else if (status === 400) {
            alert(error);
        }
    }, [data, error]);

    return (
        <>
            <LoadingScreen isFetching={isFetching} />
            <Fieldset
                className="ProfileRegistration"
                title={"Profile"}
                titleStyles={{ fontSize: "1.5rem" }}
                sx={{ padding: "20px", width: "60%", minWidth: "350px" }}
            >
                <RegisterUploadLogo logo={formData.logo} onChange={(logoUrl) => handleChange("logo", logoUrl)} />

                <Stack rowGap={2} sx={{ my: "20px" }}>
                    <TextField
                        size="small"
                        label={"Agency"}
                        name="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        helperText="Required"
                    />
                    <TextField
                        size="small"
                        label={"Description"}
                        name="description"
                        value={formData.description}
                        onChange={(e) => handleChange("description", e.target.value)}
                    />
                    <TextField
                        size="small"
                        label={"Address"}
                        name="address"
                        value={formData.address}
                        onChange={(e) => handleChange("address", e.target.value)}
                        helperText="Required"
                    />
                    <TextField
                        size="small"
                        id="outlined-select-currency"
                        select
                        label={"Region"}
                        name="region"
                        value={formData.region}
                        helperText="Required"
                        onChange={(e) => handleChange("region", e.target.value)}
                    >
                        {region.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        size="small"
                        id="outlined-select-currency"
                        select
                        label={"Type"}
                        name="type"
                        value={formData.type}
                        helperText="Required"
                        onChange={(e) => handleChange("type", e.target.value)}
                    >
                        {type.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        size="small"
                        label={"Contact"}
                        name="contact"
                        value={formData.contact}
                        helperText="Required"
                        onChange={(e) => handleChange("contact", e.target.value)}
                    />
                    <TextField
                        size="small"
                        label={"Support Email"}
                        name="supportEmail"
                        value={formData.supportEmail}
                        onChange={(e) => handleChange("supportEmail", e.target.value)}
                    />
                    <TextField
                        size="small"
                        label={"Agency Website"}
                        name="website"
                        value={formData.website}
                        onChange={(e) => handleChange("website", e.target.value)}
                    />
                    <TextField
                        type="email"
                        size="small"
                        label={"Email"}
                        name="email"
                        value={formData.email}
                        helperText="Required"
                        onChange={(e) => handleChange("email", e.target.value)}
                    />
                    <TextField
                        size="small"
                        label={"First Name"}
                        name="firstName"
                        value={formData.firstName}
                        helperText="Required"
                        onChange={(e) => handleChange("firstName", e.target.value)}
                    />
                    <TextField
                        size="small"
                        label={"Last Name"}
                        name="lastName"
                        value={formData.lastName}
                        helperText="Required"
                        onChange={(e) => handleChange("lastName", e.target.value)}
                    />
                    <TextField
                        size="small"
                        type={showPassword ? "text" : "password"}
                        label={"Password"}
                        helperText="Minimum of 6 characters"
                        name="password"
                        value={formData.password}
                        onChange={(e) => handleChange("password", e.target.value)}
                        InputProps={{
                            style: {
                                color: "grey",
                                fontSize: ".85rem",
                            },
                            endAdornment: (
                                <InputAdornment position="end" sx={{ "&:hover": { cursor: "pointer" } }}>
                                    {showPassword ? (
                                        <VisibilityOff onClick={toggleShow} />
                                    ) : (
                                        <Visibility onClick={toggleShow} />
                                    )}
                                </InputAdornment>
                            ),
                        }}
                    />

                    <Grid
                        container
                        justifyContent="space-evenly"
                        direction={{ xs: "column", md: "row" }}
                        sx={{ py: { xs: 2 } }}
                        columnSpacing={2}
                    >
                        <Primary value={"Register"} onClick={() => handleRegister("name")} />
                    </Grid>
                </Stack>
            </Fieldset>
        </>
    );
}
