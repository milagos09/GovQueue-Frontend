import NavBar from "../../components/Navbar";
import Typography from "@mui/material/Typography";
import GcashQrCode from "../../assets/gcash-qr-code.jpg";
import Feildset from "../../components/Fieldset";
import { Container, Grid } from "@mui/material";
import { glassEffect } from "../../themes/MyTheme";

export default function About() {
  return (
    <>
      <NavBar />
      <Container>
        <fieldset
          style={{
            borderRadius: "10px",
            border: "1px inset rgba(0, 0, 0, .2)",
            padding: "25px 50px",
            margin: "20px 10px",
            textAlign: "center",
          }}>
          <legend>
            <h2 style={{ alignItems: "center", padding: "8px" }}>About Us</h2>
          </legend>
          <Typography variant="subtitle1" sx={{ py: 2, px: 2 }} gutterBottom>
            We are a team of passionate developers who are committed to making
            life easier for the people in our country. We believe that everyone
            should have access to government services, regardless of their
            background or financial circumstances. Our web app, GovQueue, is a
            public dashboard that monitors the queuing of government agencies.
            This means that you can see how long the wait is for any government
            service before you even go there. This can help you save time and
            avoid unnecessary frustration. We are constantly working to improve
            our app and add new features. We believe that GovQueue has the
            potential to make a real difference in the lives of people in our
            country.
          </Typography>

          <Typography variant="h5" sx={{ py: 2, px: 2 }} gutterBottom>
            How You Can Help
          </Typography>

          <Typography variant="subtitle1" sx={{ py: 2, px: 2 }} gutterBottom>
            We are a small team and we rely on donations to keep our app
            running. Your donation will help us to cover the costs of hosting,
            maintenance, and development. You can also help us by spreading the
            word about our app. The more people who know about it, the more
            people we can help. Thank you for your support. Your donation will
            help us to make GovQueue a success and make life a little bit easier
            for everyone in our country.
          </Typography>

          <Typography variant="h5" sx={{ py: 2, px: 2 }} gutterBottom>
            Here are some specific examples of how your donation could help:
          </Typography>
          <Typography variant="subtitle1" sx={{ py: 2, px: 2 }} gutterBottom>
            Your donation could help us to pay for more servers, which would
            allow us to handle more traffic and improve the performance of our
            app. Your donation could help us to hire more developers, which
            would allow us to add new features and improve the existing ones.
            Your donation could help us to market our app more effectively,
            which would help us to reach more people. No matter how much you
            donate, your contribution will make a difference. Thank you for your
            support!
          </Typography>
          <img
            src={GcashQrCode}
            alt="GcashQrCode"
            style={{
              width: "150px",
              height: "150px",
            }}
          />
        </fieldset>
      </Container>

      <fieldset
        style={{
          borderRadius: "10px",
          border: "1px inset rgba(0, 0, 0, .2)",
          padding: "25px 50px",
          margin: "20px 10px",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          ...glassEffect,
        }}>
        <legend>
          <h2 style={{ alignItems: "center", padding: "8px" }}>
            App by the Numbers
          </h2>
        </legend>
        <Grid
          sx={{ justifyContent: "space-evenly" }}
          container
          spacing={{ md: 3 }}
          columns={{ xs: 2, sm: 8, md: 9 }}>
          <Grid item xs={3}>
            <Feildset title={"Number of Site Visits"}>
              <h1>[100K+]</h1>
            </Feildset>
          </Grid>
          <Grid item xs={3}>
            <Feildset
              title={"Number of Agencies Participating"}
              alignItems="center">
              <h1>[100]</h1>
            </Feildset>
          </Grid>
          <Grid item xs={3}>
            <Feildset
              title={"Another Site Statistic"}
              sx={{ alignItems: "center" }}>
              <h1>[1M+]</h1>
            </Feildset>
          </Grid>
        </Grid>
      </fieldset>
    </>
  );
}
