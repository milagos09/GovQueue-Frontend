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
                        defaultValue={agency.name}
                        multiline
                        InputProps={{
                            ...inputStyles,
                        }}
                    />
                    <TextField
                        size="small"
                        label="Description"
                        defaultValue={agency.description}
                        multiline
                        InputProps={{
                            ...inputStyles,
                        }}
                    />
                    <TextField
                        size="small"
                        label="Address"
                        defaultValue={agency.address}
                        multiline
                        InputProps={{
                            ...inputStyles,
                        }}
                    />
                    <TextField
                        size="small"
                        label="Region"
                        defaultValue={agency.region}
                        multiline
                        InputProps={{
                            ...inputStyles,
                        }}
                    />
                    <TextField
                        size="small"
                        label="Type"
                        defaultValue={agency.type}
                        multiline
                        InputProps={{
                            ...inputStyles,
                        }}
                    />
                    <TextField
                        size="small"
                        label="Contact"
                        defaultValue={agency.contact}
                        multiline
                        InputProps={{
                            ...inputStyles,
                        }}
                    />
                    <TextField
                        size="small"
                        label="Email"
                        defaultValue={agency.support_email}
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
