import Grid from "@mui/material/Grid";
import WindowsLayout from "./WindowsLayout";
import AgencyDetail from "./AgencyDetail";

// Inside your component
export default function FeaturedQueues() {
    return (
        <Grid container spacing={5} sx={{ marginY: "20px" }}>
            <Grid item xs={3} sx={{ display: "flex", minHeight: "100%" }} justifyContent="end" alignItems="center">
                <AgencyDetail />
            </Grid>
            <Grid item xs={9} sx={{ display: "flex", minHeight: "100%" }} justifyContent="start" alignItems="center">
                <WindowsLayout />
            </Grid>
        </Grid>
    );
}
