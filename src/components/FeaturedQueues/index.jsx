import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import WindowsLayout from "./WindowsLayout";
import AgencyDetail from "./../SearchColumn/AgencyDetail";
import MoreIcon from "@mui/icons-material/More";

export default function FeaturedQueues() {
    return (
        <Grid
            container
            sx={{
                marginY: "20px",
                padding: "20px",
                border: "none",
                boxShadow: "0px 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 2px 4px rgba(0, 0, 0, 0.2)",
                position: "relative",
            }}
        >
            <Grid
                item
                md={3}
                xs={12}
                sx={{ display: "flex", minHeight: "100%", paddingX: "20px" }}
                justifyContent="center"
                alignItems="center"
            >
                <AgencyDetail
                    agency={"National Commission for Culture and the Arts"}
                    logo={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQtoYs8uhF2_uICc1SeAs0d2MgqCe301F9-g&usqp=CAU"
                    }
                />
            </Grid>
            <Grid item md={9} xs={12} sx={{ display: "flex" }} justifyContent="center" alignItems="center">
                <WindowsLayout />
            </Grid>
            <Button variant="contained" sx={{ position: "absolute", top: "20px", right: "20px", fontSize: "2rem" }}>
                <MoreIcon
                    onClick={() => {
                        alert();
                    }}
                />
            </Button>
        </Grid>
    );
}
