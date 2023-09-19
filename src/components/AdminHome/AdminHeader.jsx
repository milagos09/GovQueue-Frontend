import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Primary } from "./../Buttons";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { socket } from "./../../helpers/socket";

export default function AdminHeader({ agency }) {
    const addQueue = () => {
        const name = prompt("Add queue:");
        socket.emit("addQueue", { agencyId: agency.agency_id, name: name.trim() });
    };

    const removeQueue = () => {
        const queueId = prompt("Remove queue ID:");
        if (!isNaN(Number(queueId))) {
            socket.emit("removeQueue", queueId);
        }
    };
    return (
        <>
            <Container maxWidth="lg">
                <Grid container justifyContent="space-around" alignItems="center" direction="row" sx={{ my: "25px" }}>
                    <Grid item xs={12} sm={4} md={3} sx={{ textAlign: "center" }}>
                        <img src={agency.logo} style={{ width: "120px" }} />
                    </Grid>
                    <Grid item xs={12} sm={4} md={5} py={3}>
                        <Typography
                            variant="h4"
                            sx={{
                                textAlign: "center",
                                alignItems: "center",
                                width: "100%",
                                fontSize: "1.8rem",
                            }}
                        >
                            {agency.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Primary value={"Add"} sx={{ fontSize: ".75rem" }} onClick={addQueue} />
                            <Primary value={"Remove"} sx={{ fontSize: ".75rem" }} onClick={removeQueue} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
