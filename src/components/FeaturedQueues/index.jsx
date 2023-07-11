import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import WindowsLayout from "./WindowsLayout";
import AgencyDetail from "./AgencyDetail";
import MoreIcon from "@mui/icons-material/More";

export default function FeaturedQueues() {
    return (
        <Grid
            container
            sx={{
                marginY: "20px",
                padding: "20px",
                border: "1px solid black",
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
                <AgencyDetail />
            </Grid>
            <Grid
                item
                md={9}
                xs={12}
                sx={{ display: "flex", minHeight: "100%" }}
                justifyContent="center"
                alignItems="center"
            >
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
