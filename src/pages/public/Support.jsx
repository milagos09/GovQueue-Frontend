import NavBar from "../../components/Navbar";
import FacebookMessengerChat from "../../components/FacebookMessengerChat/index";

import { Divider, ListItem, List, Typography, Grid } from "@mui/material";
import faqData from "./faq.json";
import { glassEffect } from "../../themes/MyTheme";

export default function Support() {
  return (
    <>
      <NavBar />
      <Grid container>
        <Grid item xs={12} md={8} sm={8} lg={4}>
          <fieldset
            style={{
              borderRadius: "10px",
              border: "1px inset rgba(0, 0, 0, .2)",
              padding: "25px 50px",
              margin: "20px 10px",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "left",
              ...glassEffect,
            }}>
            <legend>
              <h2 style={{ alignItems: "center", padding: "8px" }}>Contents</h2>
            </legend>
            <List>
              {faqData.map((faq) => (
                <ListItem key={faq.id} disablePadding sx={{ px: 1 }}>
                  <a href={`#question${faq.id}`}>{faq.faqQuestion}</a>
                </ListItem>
              ))}
            </List>
          </fieldset>
        </Grid>

        <Grid item xs={12} md={12} sm={12} lg={8}>
          <fieldset
            style={{
              borderRadius: "10px",
              border: "1px inset rgba(0, 0, 0, .2)",
              padding: "25px 50px",
              margin: "20px 10px",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "left",
              ...glassEffect,
            }}>
            <legend>
              <h2 style={{ alignItems: "center", padding: "8px" }}>
                GovQueue Frequently Asked Questions
              </h2>
            </legend>
            {faqData.map((faq) => (
              <>
                <Typography
                  variant="h5"
                  id={`question${faq.id}`}
                  sx={{ py: 0, px: 0 }}
                  gutterBottom>
                  {faq.faqQuestion}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ py: 0, px: 0 }}
                  gutterBottom>
                  {faq.faqAnswer}
                </Typography>
                <Divider />
              </>
            ))}
          </fieldset>
        </Grid>
      </Grid>
      <FacebookMessengerChat pageId="108965818922829" />
    </>
  );
}
