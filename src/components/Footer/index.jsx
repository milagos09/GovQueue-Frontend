import { Box, Grid, Typography, Link, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import GithubIcon from "@mui/icons-material/Github";
import YoutubeIcon from "@mui/icons-material/Youtube";
import GovQueueLogo from "./../../assets/govQ-logo.png";
import { CheckScreenSize } from "../../hooks/CheckScreenSize";

export default function Footer() {
    const { width } = CheckScreenSize();

    return (
        <Box sx={{ background: "#1976D2", paddingY: "10px", boxShadow: 3 }}>
            <Grid container alignItems="center">
                <Grid item xs={4} sm={2} md={3} align="center" order={0}>
                    <img
                        src={GovQueueLogo}
                        alt="App logo"
                        width="80"
                        height="80"
                        style={{
                            marginRight: "10px",
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={6} align="center" order={width < 600 ? 2 : 1}>
                    <Typography
                        variant="subtitle1"
                        color="textaction"
                        align="center"
                        sx={{
                            textAlign: "center",
                        }}
                    >
                        Copyright © {new Date().getFullYear()}, GovQueue. All rights reserved.
                    </Typography>
                </Grid>
                <Grid item xs={7} sm={4} md={3} align="center" order={width < 600 ? 1 : 2}>
                    <Stack flexDirection="row" justifyContent="space-evenly" flexWrap="wrap">
                        <Link href="https://www.google.com/" target="_blank">
                            <GoogleIcon fontSize="large" color={"action"} />
                        </Link>
                        <Link href="https://www.facebook.com/" target="_blank">
                            <FacebookIcon fontSize="large" color={"action"} />
                        </Link>
                        <Link href="https://github.com/" target="_blank">
                            <GithubIcon fontSize="large" color={"action"} />
                        </Link>
                        <Link href="https://www.youtube.com/" target="_blank">
                            <YoutubeIcon fontSize="large" color={"action"} />
                        </Link>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}
