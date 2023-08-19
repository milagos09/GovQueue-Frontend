import Fieldset from "./../Fieldset";
import { Box, TextField, Stack } from "@mui/material";

export default function Profile({ admin }) {
    const inputStyles = {
        readOnly: true,
        fullWidth: true,
        style: { fontSize: ".85rem" },
    };
    return (
        <>
            <Fieldset title={"Profile"} titleStyles={{ fontSize: "1.5rem" }} sx={{ padding: "20px" }}>
                <Box sx={{ textAlign: "center" }}>
                    <img src={admin.logo} style={{ borderRadius: "50%", width: "150px" }} />
                </Box>
                <Stack rowGap={3} sx={{ my: "20px" }}>
                    <TextField
                        sx={{ fontSize: "2rem" }}
                        size="small"
                        label="Agency"
                        defaultValue={admin.agency}
                        multiline
                        InputProps={{
                            ...inputStyles,
                        }}
                    />
                    <TextField
                        size="small"
                        label="Description"
                        defaultValue={admin.description}
                        multiline
                        InputProps={{
                            ...inputStyles,
                        }}
                    />
                    <TextField
                        size="small"
                        label="Address"
                        defaultValue={admin.address}
                        multiline
                        InputProps={{
                            ...inputStyles,
                        }}
                    />
                    <TextField
                        size="small"
                        label="Region"
                        defaultValue={admin.region}
                        multiline
                        InputProps={{
                            ...inputStyles,
                        }}
                    />
                    <TextField
                        size="small"
                        label="Type"
                        defaultValue={admin.type}
                        multiline
                        InputProps={{
                            ...inputStyles,
                        }}
                    />
                    <TextField
                        size="small"
                        label="Contact"
                        defaultValue={admin.contact}
                        multiline
                        InputProps={{
                            ...inputStyles,
                        }}
                    />
                    <TextField
                        size="small"
                        label="Email"
                        defaultValue={admin.supportEmail}
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
