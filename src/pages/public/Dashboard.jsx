import Carousel from "./../../components/Carousel";
import QueueTabs from "./../../components/QueueTabs";
import SearchColumn from "./../../components/SearchColumn";
import Grid from "@mui/material/Grid";
import NavBar from "./../../components/Navbar";
import Filter from "./../../components/Filter";

export default function Dashboard() {
    return (
        <>
            <NavBar />
            <Carousel />
            <Filter />
            <Grid container sx={{ paddingX: "1.5%" }}>
                <Grid item justifyContent="center" alignItems="center" md={3} xs={12} sx={{ overflowY: "auto" }}>
                    <SearchColumn />
                </Grid>
                <Grid
                    item
                    justifyContent="center"
                    alignItems="center"
                    md={9}
                    xs={12}
                    sx={{ height: "100%", paddingTop: "20px" }}
                    className="featured-queues"
                >
                    <QueueTabs />
                </Grid>
            </Grid>
        </>
    );
}
