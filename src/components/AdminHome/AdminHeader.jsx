import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Primary } from "./../Buttons";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

export default function AdminHeader({ agency, logo }) {
    return (
        <>
            <Container maxWidth="lg">
                <Grid container justifyContent="space-around" alignItems="center" direction="row" sx={{ my: "25px" }}>
                    {/* <Stack
                        direction={{ xs: "column", sm: "row" }}
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={1}
                        sx={{ py: 2 }}
                    > */}
                    <Grid item xs={12} sm={4} md={3} sx={{ textAlign: "center" }}>
                        <img src={logo} style={{ width: "120px" }} />
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
                            {agency}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Primary value={"Add"} sx={{ fontSize: ".75rem" }} />
                            <Primary value={"Remove"} sx={{ fontSize: ".75rem" }} />
                        </Box>
                    </Grid>
                    {/* </Stack> */}
                </Grid>
            </Container>
        </>
    );
}
