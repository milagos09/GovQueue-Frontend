import NavBar from "../../components/Navbar";
import FacebookMessengerChat from "../../components/FacebookMessengerChat/index";
import Feildset from "../../components/Fieldset";
import { Divider, ListItem, List, Typography, Grid } from "@mui/material";
import faqData from "./faq.json";

export default function Support() {
    return (
        <>
            <NavBar />
            <Grid container>
                <Grid item xs={12} md={8} lg={4}>
                    <Feildset
                        title={"Content"}
                        sx={{ textAlign: "left" }}
                        titleStyles={{ fontSize: "24px", fontWeight: "bold" }}
                    >
                        <List>
                            {faqData.map((faq) => (
                                <ListItem key={faq.id} disablePadding sx={{ px: 1 }}>
                                    <a href={`#question${faq.id}`}>{faq.faqQuestion}</a>
                                </ListItem>
                            ))}
                        </List>
                    </Feildset>
                </Grid>

                <Grid item xs={12} md={12} lg={8}>
                    <Feildset
                        title={"GovQueue Frequently Asked Questions"}
                        sx={{ textAlign: "left" }}
                        titleStyles={{ fontSize: "24px", fontWeight: "bold" }}
                    >
                        {faqData.map((faq) => (
                            <>
                                <Typography variant="h5" id={`question${faq.id}`} sx={{ py: 0, px: 0 }} gutterBottom>
                                    {faq.faqQuestion}
                                </Typography>
                                <Typography variant="subtitle1" sx={{ py: 0, px: 0 }} gutterBottom>
                                    {faq.faqAnswer}
                                </Typography>
                                <Divider />
                            </>
                        ))}
                    </Feildset>
                </Grid>
            </Grid>
            <FacebookMessengerChat pageId="108965818922829" />
        </>
    );
}
