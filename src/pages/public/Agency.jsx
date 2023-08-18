import admins from "./../../../fake/admins.json";
import queues from "./../../../fake/queues.json";
import Profile from "./../../components/AgencyComponents/Profile";
import Queues from "../../components/AgencyComponents/Queues";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Navbar from "./../../components/Navbar";
import Announcement from "../../components/AgencyComponents/Announcement";
import { useParams } from "react-router-dom";
import FacebookMessengerChat from "./../../components/FacebookMessengerChat";
import ErrorPage from "./../ErrorPage";

export default function Agency() {
    const id = Number(useParams().id);
    const admin = admins.find((admin) => admin.id === id) || {};

    return (
        <>
            <Navbar />
            {admin.id != undefined ? (
                <Container>
                    <Announcement show={admin.showAnnouncement} announcement={admin.announcement} />
                    <Grid container>
                        <Grid item xs={12} sm={6} md={5}>
                            <Profile admin={admin} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={7}>
                            <Queues queue={queues.filter((q) => id === q.adminId)} />
                        </Grid>
                    </Grid>
                </Container>
            ) : (
                <ErrorPage />
            )}
            {admin.showMessenger && <FacebookMessengerChat pageId={admin.messengerId} />}
        </>
    );
}
