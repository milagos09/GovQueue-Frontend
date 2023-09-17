import Carousel from "./../../components/Carousel";
import NavBar from "./../../components/Navbar";
import Box from "@mui/material/Box";
import QueueTable from "../../components/QueueTable";
import { useState } from "react";
import agencyStore from "../../stores/agencyStore";
import LoadingScreen from "./../../components/LoadingScreen";

export default function Dashboard() {
    const { agencies } = agencyStore();
    const [search, setSearch] = useState("");
    return (
        <>
            <LoadingScreen isFetching={agencies.length === 0} />
            <NavBar search={search} setSearch={setSearch} />
            <Carousel />
            <Box sx={{ px: "4%" }}>
                <QueueTable search={search} />
            </Box>
        </>
    );
}
