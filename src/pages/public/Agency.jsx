import admins from "./../../../fake/admins.json";
import queues from "./../../../fake/queues.json";
import Profile from "./../../components/AgencyComponents/Profile";
import Queues from "../../components/AgencyComponents/Queues";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Navbar from "./../../components/Navbar";

export default function Agency() {
    const admin = admins[0]; //sample
    return (
        <>
            <Navbar />
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={6} md={5}>
                        <Profile admin={admin} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={7}>
                        <Queues queue={queues.filter((q) => admin.id === q.adminId)} />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
