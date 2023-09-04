import AdminAccountSettings from "./AdminAccountSettings";
import AdminProfileSettings from "./AdminProfileSettings";
import { Box, Grid } from "@mui/material";
import admins from "./../../../fake/admins.json";

export default function AdminSettings() {
    const admin = admins[0];
    return (
        <>
            <Box minHeight="80vh" display="flex" sx={{ justifyContent: "center", alignItems: "center" }}>
                <Grid container justifyContent="space-evenly" sx={{ px: 5 }} columnSpacing={3}>
                    <Grid item sm={12} md={6}>
                        <AdminProfileSettings admin={admin} />
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <AdminAccountSettings admin={admin} />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
