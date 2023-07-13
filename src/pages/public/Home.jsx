import Carousel from "./../../components/Carousel";
import FeaturedQueues from "./../../components/FeaturedQueues";
import SearchColumn from "../../components/SearchColumn";
import Grid from "@mui/material/Grid";

export default function Home() {
    return (
        <>
            <Carousel />
            <Grid container spacing={0} sx={{ paddingX: "1.5%" }}>
                <Grid
                    item
                    justifyContent="center"
                    alignItems="center"
                    md={3}
                    xs={12}
                    sx={{ height: "100%", overflowY: "auto" }}
                >
                    <SearchColumn />
                </Grid>
                <Grid
                    item
                    justifyContent="center"
                    alignItems="center"
                    md={9}
                    xs={12}
                    sx={{ height: "100%" }}
                    className="featured-queues"
                >
                    <FeaturedQueues />
                    <FeaturedQueues />
                    <FeaturedQueues />
                </Grid>
            </Grid>
        </>
    );
}
