import NavBar from "../../components/Navbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import GcashQrCode from "../../assets/gcash-qr-code.jpg";
import FacebookMessengerChat from "../../components/FacebookMessengerChat/index";

export default function About() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    }));
    return (
        <>
            <NavBar />
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Grid item xs={12} md={12} lg={12} sx={{ px: 1, py: 2 }}>
                    <Card variant="outlined" sx={{ minWidth: 275, height: "100%", border: "none" }}>
                        <CardContent sx={{ px: 0 }}>
                            <Typography sx={{ fontSize: 20, py: 0, px: 5 }} gutterBottom>
                                About Us
                            </Typography>
                            <Typography sx={{ fontSize: 14, py: 0, px: 5 }} gutterBottom>
                                We are a team of passionate developers who are committed to making life easier for the
                                people in our country. We believe that everyone should have access to government
                                services, regardless of their background or financial circumstances. Our web app,
                                GovQueue, is a public dashboard that monitors the queuing of government agencies. This
                                means that you can see how long the wait is for any government service before you even
                                go there. This can help you save time and avoid unnecessary frustration. We are
                                constantly working to improve our app and add new features. We believe that GovQueue has
                                the potential to make a real difference in the lives of people in our country.
                            </Typography>
                            <Typography sx={{ fontSize: 20, py: 0, px: 5 }} gutterBottom>
                                How You Can Help
                            </Typography>
                            <Typography sx={{ fontSize: 14, py: 0, px: 5 }} gutterBottom>
                                We are a small team and we rely on donations to keep our app running. Your donation will
                                help us to cover the costs of hosting, maintenance, and development. You can also help
                                us by spreading the word about our app. The more people who know about it, the more
                                people we can help.
                            </Typography>
                            <Typography sx={{ fontSize: 20, py: 0, px: 5 }} gutterBottom>
                                Thank You!
                            </Typography>
                            <Typography sx={{ fontSize: 14, py: 0, px: 5 }} gutterBottom>
                                Thank you for your support. Your donation will help us to make GovQueue a success and
                                make life a little bit easier for everyone in our country.
                            </Typography>
                            <Typography sx={{ fontSize: 20, py: 0, px: 5 }} gutterBottom>
                                Here are some specific examples of how your donation could help:
                            </Typography>
                            <Typography sx={{ fontSize: 14, py: 0, px: 5 }} gutterBottom>
                                Your donation could help us to pay for more servers, which would allow us to handle more
                                traffic and improve the performance of our app. Your donation could help us to hire more
                                developers, which would allow us to add new features and improve the existing ones. Your
                                donation could help us to market our app more effectively, which would help us to reach
                                more people. No matter how much you donate, your contribution will make a difference.
                                Thank you for your support!
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Box>

            <Typography
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                gutterBottom
            >
                <img
                    src={GcashQrCode}
                    alt="GcashQrCode"
                    style={{
                        width: "200px",
                        height: "200px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                />
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Grid item xs={12} md={12} lg={12} sx={{ px: 1, py: 0 }}>
                    <Card variant="outlined" sx={{ minWidth: 275, height: "100%", border: "none" }}>
                        <CardContent sx={{ px: 0 }}>
                            <Typography sx={{ fontSize: 32, py: 0, px: 5 }} gutterBottom>
                                App by the Numbers
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Box>

            <Box sx={{ flexGrow: 1, py: 2, px: 3 }}>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid xs={3}>
                        <Item>
                            Number of Site Visits<Typography>[100k+]</Typography>
                        </Item>
                    </Grid>
                    <Grid xs={4}>
                        <Item>
                            Number of Agencies Participating<Typography>[100]</Typography>
                        </Item>
                    </Grid>
                    <Grid xs={3}>
                        <Item>
                            Another Site Statistic<Typography>[1M+]</Typography>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
