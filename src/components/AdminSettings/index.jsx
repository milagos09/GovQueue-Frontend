import AdminAccountSettings from "./AdminAccountSettings";
import AdminProfileSettings from "./AdminProfileSettings";
import { Box, Grid } from "@mui/material";

export default function AdminSettings() {
  return (
    <>
      <Box
        minHeight="80vh"
        display="flex"
        sx={{ justifyContent: "center", alignItems: "center" }}>
        <Grid
          container
          columns={{ xs: 2, sm: 4, md: 8, lg: 4 }}
          direction="row"
          justifyContent="space-evenly"
          alignItems="flex-start">
          <AdminProfileSettings />
          <AdminAccountSettings />
        </Grid>
      </Box>
    </>
  );
}
