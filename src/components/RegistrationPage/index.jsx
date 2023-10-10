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
        {/* <Grid item xs={12} sm={6} lg={5} xl={8}> */}
        <ProfileRegistration />
        {/* <AdminProfileSettings /> */}
        {/* </Grid> */}
      </Box>
    </>
  );
}
