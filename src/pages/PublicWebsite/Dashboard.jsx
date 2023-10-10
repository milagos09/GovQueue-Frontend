import Carousel from "./../../components/Carousel";
import Box from "@mui/material/Box";
import QueueTable from "../../components/QueueTable";
import searchStore from "../../stores/searchStore";
import { useEffect } from "react";
import FitToScreen from "../../components/FitToScreen";

export default function Dashboard() {
    const { search, setShowSearch } = searchStore();
    useEffect(() => {
        setShowSearch(true);
        return () => setShowSearch(false);
    }, []);
    return (
        <>
            {/* <Carousel /> */}
            <FitToScreen>
                <Box sx={{ px: "4%", py: 3 }}>
                    <QueueTable search={search} />
                </Box>
            </FitToScreen>
        </>
    );
}
