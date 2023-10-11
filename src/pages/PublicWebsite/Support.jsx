import FacebookMessengerChat from "../../components/FacebookMessengerChat/index";
import Fieldset from "../../components/Fieldset";
import { Divider, ListItem, List, Typography, Grid } from "@mui/material";
import faqData from "./data/faq.json";

export default function Support() {
    return (
        <>
            <Grid container>
                <Grid item xs={12} md={8} lg={4}>
                    <Fieldset
                        title={"Content"}
                        sx={{ textAlign: "left" }}
                        titleStyles={{ fontSize: "24px", fontWeight: "bold" }}
                    >
                        <List>
                            {faqData.map((faq) => (
                                <ListItem key={"faq-guide" + faq.id} disablePadding sx={{ px: 1, my: 2 }}>
                                    <a href={`#question${faq.id}`}>{faq.faqQuestion}</a>
                                </ListItem>
                            ))}
                        </List>
                    </Fieldset>
                </Grid>

                <Grid item xs={12} md={12} lg={8}>
                    <Fieldset
                        title={"GovQueue Frequently Asked Questions"}
                        sx={{ textAlign: "left" }}
                        titleStyles={{ fontSize: "24px", fontWeight: "bold" }}
                    >
                        {faqData.map((faq, i) => (
                            <div key={"faq" + i}>
                                {!!i && <Divider sx={{ my: 3 }} />}
                                <Typography variant="h5" id={`question${faq.id}`} sx={{ py: 0, px: 0 }} gutterBottom>
                                    {faq.faqQuestion}
                                </Typography>
                                <Typography variant="subtitle1" sx={{ py: 0, px: 0 }} gutterBottom>
                                    {faq.faqAnswer}
                                </Typography>
                            </div>
                        ))}
                    </Fieldset>
                </Grid>
            </Grid>
            <FacebookMessengerChat pageId="108965818922829" />
        </>
    );
}
