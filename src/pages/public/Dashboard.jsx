import Carousel from "./../../components/Carousel";
import NavBar from "./../../components/Navbar";
import Box from "@mui/material/Box";
import Searchbar from "./../../components/Searchbar";
import QueueTable from "../../components/QueueTable";

export default function Dashboard() {
    return (
        <>
            <NavBar />
            <Carousel />
            <Searchbar />
            <Box sx={{ px: "40px" }}>
                <QueueTable />
            </Box>
        </>
    );
}
