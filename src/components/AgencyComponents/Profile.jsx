import Fieldset from "./../Fieldset";
import { Box, TextField, Stack } from "@mui/material";

export default function Profile({ agency }) {
    const inputStyles = {
        readOnly: true,
        fullWidth: true,
        style: { fontSize: ".85rem" },
    };
    return (
        <>
            <Fieldset title={"Profile"} titleStyles={{ fontSize: "1.5rem" }} sx={{ padding: "20px" }}>
                <Box sx={{ textAlign: "center" }}>
                    <img src={agency.logo} style={{ borderRadius: "50%", width: "150px" }} />
                </Box>
                <Stack rowGap={3} sx={{ my: "20px" }}>
                    <TextField
                        sx={{ fontSize: "2rem" }}
                        size="small"
                        label="Agency"
                        value={agency.name}
                        multiline
                        InputProps={{
                            ...inputStyles,
                        }}
                    />
                    <TextField
                        size="small"
                        label="Description"
                        value={agency.description}
                        multiline
                        InputProps={{
                            ...inputStyles,
                        }}
                    />
                    <TextField
                        size="small"
                        label="Address"
                        value={agency.address}
                        multiline
                        InputProps={{
                            ...inputStyles,
                        }}
                    />
                    <TextField
                        size="small"
                        label="Region"
                        value={agency.region}
                        multiline
                        InputProps={{
                            ...inputStyles,
                        }}
                    />
                    <TextField
                        size="small"
                        label="Type"
                        value={agency.type}
                        multiline
                        InputProps={{
                            ...inputStyles,
                        }}
                    />
                    <TextField
                        size="small"
                        label="Contact"
                        value={agency.contact}
                        multiline
                        InputProps={{
                            ...inputStyles,
                        }}
                    />
                    <TextField
                        size="small"
                        label="Email"
                        value={agency.support_email}
                        multiline
                        InputProps={{
                            ...inputStyles,
                        }}
                    />
                </Stack>
            </Fieldset>
        </>
    );
}
