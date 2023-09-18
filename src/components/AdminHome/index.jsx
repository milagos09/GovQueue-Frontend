import AdminHeader from "./AdminHeader";
import AdminQueueTable from "./AdminQueueTable";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { getSessionStorage } from "./../../helpers/sessionStorage";
import { CheckScreenSize } from "./../../hooks/CheckScreenSize";

export default function AdminHome() {
    const { height } = CheckScreenSize();
    const user = getSessionStorage("user");
    const agencyDetails = user.agencyDetails;
    return (
        <>
            <Container maxWidth="lg" sx={{ minHeight: `${height - 167}px` }}>
                <Grid container justifyContent="center" alignItems="center" direction="row" sx={{ padding: 1 }}>
                    <AdminHeader agency={agencyDetails} />
                    <AdminQueueTable agencyId={agencyDetails.agency_id} />
                </Grid>
            </Container>
        </>
    );
}
