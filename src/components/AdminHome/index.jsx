import AdminHeader from "./AdminHeader";
import AdminQueueTable from "./AdminQueueTable";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { getSessionStorage } from "./../../helpers/sessionStorage";
import { CheckScreenSize } from "./../../hooks/CheckScreenSize";
import userStore from "../../stores/userStore";

export default function AdminHome() {
    const { height } = CheckScreenSize();
    // const user = getSessionStorage("user");
    const { user, agency } = userStore();
    // const agencyDetails = user?.agencyDetails;
    return (
        <>
            {user && (
                <Container maxWidth="lg" sx={{ minHeight: `${height - 167}px` }}>
                    <Grid container justifyContent="center" alignItems="center" direction="row" sx={{ padding: 1 }}>
                        <AdminHeader agency={agency} />
                        <AdminQueueTable agencyId={agency.agency_id} />
                    </Grid>
                </Container>
            )}
        </>
    );
}
