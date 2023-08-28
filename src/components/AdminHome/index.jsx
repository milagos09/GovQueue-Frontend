import AdminHeader from "./AdminHeader";
import AdminQueueTable from "./AdminQueueTable";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import admins from "./../../../fake/admins.json";

export default function AdminHome() {
    const admin = admins.find((admin) => admin.id == 1);

    return (
        <>
            <Container maxWidth="lg">
                <Grid container justifyContent="center" alignItems="center" direction="row" sx={{ padding: 1 }}>
                    <AdminHeader agency={admin.agency} logo={admin.logo} />
                    <AdminQueueTable id={admin.id} />
                </Grid>
            </Container>
        </>
    );
}
