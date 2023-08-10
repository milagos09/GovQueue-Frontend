import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import WindowsLayout from "./WindowsLayout";
import AgencyDetail from "../SearchColumn/AgencyDetail";
import ShowLogs from "./ShowLogs";
import queues from "./../../../fake/queues.json";

export default function QueueLayout({ agency, logo, id }) {
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
                <AgencyDetail agency={agency} logo={logo} />
            </Grid>
            <Grid item md={9} xs={12} sx={{ display: "flex" }} justifyContent="center" alignItems="center">
                <WindowsLayout queue={queues.filter((q) => q.adminId === id)} />
            </Grid>
            <Box sx={{ position: "absolute", top: "20px", right: "20px", fontSize: "2rem" }}>
                <ShowLogs id={id} agency={agency} />
            </Box>
        </Grid>
    );
}
