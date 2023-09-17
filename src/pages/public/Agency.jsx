import Profile from "./../../components/AgencyComponents/Profile";
import Queues from "../../components/AgencyComponents/Queues";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Navbar from "./../../components/Navbar";
import Announcement from "../../components/AgencyComponents/Announcement";
import { useParams } from "react-router-dom";
import FacebookMessengerChat from "./../../components/FacebookMessengerChat";
import queuesStore from "../../stores/queuesStore";
import agencyStore from "../../stores/agencyStore";
import LoadingScreen from "../../components/LoadingScreen";
import { CheckScreenSize } from "./../../hooks/CheckScreenSize";

export default function Agency() {
    const { height } = CheckScreenSize();
    const { queues } = queuesStore();
    const { agencies } = agencyStore();
    const id = Number(useParams().id);
    const agency = agencies.find((agency) => agency.agency_id === id) || {};
    console.log(agency);
    return (
        <>
            <Navbar />
            <Container sx={{ minHeight: `${height - 167}px` }}>
                {agency.agency_id !== undefined ? (
                    <>
                        <Announcement show={!!agency.announcement} announcement={agency.announcement} />
                        <Grid container columnSpacing={4}>
                            <Grid item xs={12} sm={6} md={5}>
                                <Profile agency={agency} />
                            </Grid>
                            <Grid item xs={12} sm={6} md={7}>
                                <Queues queues={queues.filter((item) => agency.agency_id === item.agency_id)} />
                            </Grid>
                        </Grid>
                    </>
                ) : (
                    <LoadingScreen isFetching={true} />
                )}
                {!!agency.messenger_id && <FacebookMessengerChat pageId={agency.messenger_id} />}
            </Container>
        </>
    );
}
