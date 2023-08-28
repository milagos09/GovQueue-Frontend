import AdminHeader from "./AdminHeader";
import AdminQueueTable from "./AdminQueueTable";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

export default function AdminHome() {
  return (
    <>
      <Container maxWidth="lg">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="row"
          sx={{ padding: 1 }}>
          <AdminHeader />
          <AdminQueueTable />
        </Grid>
      </Container>
    </>
  );
}
