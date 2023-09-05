import AdminAccountSettings from "./AdminAccountSettings";
import AdminProfileSettings from "./AdminProfileSettings";
import { Box, Grid } from "@mui/material";
import admins from "./../../../fake/admins.json";

export default function AdminSettings() {
  const admin = admins[0];

  return (
    <>
      <Box
        display="flex"
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Grid
          container
          justifyContent="space-evenly"
          direction={{ xs: "column", md: "row" }}
          sx={{ px: { xs: 2 } }}
          columnSpacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={5} xl={4}>
            <AdminProfileSettings admin={admin} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={5} xl={4}>
            <AdminAccountSettings admin={admin} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
