import Carousel from "./../../components/Carousel";
import QueueTabs from "./../../components/QueueTabs";
import SearchColumn from "./../../components/SearchColumn";
import Grid from "@mui/material/Grid";
import NavBar from "./../../components/Navbar";
import Filter from "./../../components/Filter";
import { useState } from "react";
import admins from "./../../../fake/admins.json";

export default function Dashboard() {
    const [tab, setTab] = useState(0);
    const [filteredAdmins, setFilter] = useState(admins);

    return (
        <>
            <NavBar />
            <Carousel />
            <Filter filteredAdmins={filteredAdmins} setFilter={setFilter} setTab={setTab} />
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
                    <QueueTabs tab={tab} setTab={setTab} filteredAdmins={filteredAdmins} />
                </Grid>
            </Grid>
        </>
    );
}
