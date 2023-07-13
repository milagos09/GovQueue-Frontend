import Grid from "@mui/material/Grid";
import SearchInput from "./SearchInput";
import AgencyDetail from "../FeaturedQueues/AgencyDetail";
import { useState, useEffect } from "react";

export default function SearchColumn() {
    const fqHeight = CheckFeaturedQueuesHeight();
    return (
        <Grid container sx={{ marginY: "20px", border: "1px solid black", position: "relative" }}>
            <Grid
                item
                sm={12}
                sx={{ height: "90px", paddingY: "30px", display: "flex" }}
                justifyContent="center"
                alignItems="center"
            >
                <SearchInput />
            </Grid>
            <Grid
                item
                sm={12}
                sx={{
                    border: "0px solid black",
                    paddingY: "20px",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "40px",
                    overflowY: "auto",
                    height: fqHeight - 90 - 41 + "px",
                }}
                // justifyContent="center"
                alignItems="center"
            >
                <AgencyDetail />
                <AgencyDetail />
                <AgencyDetail />
                <AgencyDetail />
                <AgencyDetail />
            </Grid>
        </Grid>
    );
}

function CheckFeaturedQueuesHeight() {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const updateHeight = () => {
            const element = document.querySelector(".featured-queues");
            if (element) {
                const elementHeight = element.offsetHeight;
                setHeight(elementHeight);
            }
        };

        // Initial height check
        updateHeight();

        // Update height on window resize
        window.addEventListener("resize", updateHeight);

        // Clean up the event listener
        return () => {
            window.removeEventListener("resize", updateHeight);
        };
    }, []);

    return height;
}
