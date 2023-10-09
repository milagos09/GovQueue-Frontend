import { Box, Grid } from "@mui/material";
import ProfileRegistration from "./ProfileRegistration";

export default function RegistrationPage() {
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
          <Grid item xs={12} sm={6} lg={5} xl={4}>
            <ProfileRegistration />
            {/* <AdminProfileSettings /> */}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
