import NavBar from "../../components/Navbar";
import FacebookMessengerChat from "../../components/FacebookMessengerChat/index";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Divider } from "@mui/material";

export default function Support() {
  const Item1 = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.primary,
  }));
  const Item2 = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.primary,
    px: 0,
  }));

  return (
    <>
      <NavBar />
      <Box>
        <Grid
          p={0}
          m={0}
          container
          rowSpacing={2}
          columnSpacing={{ xs: 2, sm: 2, md: 2 }}
        >
          <Grid xs={11} sm={4}>
            <Box sx={{ position: "sticky", top: 0 }}>
              <Item1
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "left",
                  }}
                >
                  <Grid item xs={12} md={12} lg={12} sx={{ px: 0, py: 0 }}>
                    <Card
                      variant="outlined"
                      sx={{ minWidth: 275, height: "100%", border: "none" }}
                    >
                      <CardContent sx={{ p: 2 }}>
                        <Typography
                          sx={{
                            alignItems: "left",
                            fontSize: 18,
                            py: 0,
                            px: 0,
                          }}
                          gutterBottom
                        >
                          Contents
                        </Typography>
                        <Box
                          xs="10"
                          sx={{
                            display: "flex",
                            width: "100%",
                            bgcolor: "background.paper",
                          }}
                        >
                          <nav aria-label="main mailbox folders">
                            <List>
                              <ListItem disablePadding sx={{ px: 1 }}>
                                <a href="#question1">What is GovQueue?</a>
                              </ListItem>
                              <ListItem disablePadding sx={{ px: 1 }}>
                                <a href="#question2">
                                  How can a Filipino Citizen benefit from this
                                  App?
                                </a>
                              </ListItem>
                              <ListItem disablePadding sx={{ px: 1 }}>
                                <a href="#question3">
                                  How can a Government Agency benefit from this
                                  App?
                                </a>
                              </ListItem>
                              <ListItem disablePadding sx={{ px: 1 }}>
                                <a href="#question4">
                                  Can I use this App for free?
                                </a>
                              </ListItem>
                            </List>
                          </nav>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                </Box>
              </Item1>
            </Box>
          </Grid>
          <Grid xs={7} sx={{ px: 0 }}>
            <Item2
              sx={{
                width: "100%",
                display: "flex",
              }}
            >
              <Box
                width={"100%"}
                sx={{
                  flexGrow: 1,
                  alignContent: "left",
                  p: 0,
                  m: 0,
                }}
              >
                <Grid item xs={12} sm={8} lg={8} sx={{ px: 0, py: 0 }}>
                  <Typography sx={{ fontSize: 30, py: 0, px: 0 }} gutterBottom>
                    GovQueue Frequently Asked Questions
                  </Typography>
                  <Divider />
                  <Typography
                    id="question1"
                    sx={{ fontSize: 24, py: 0, px: 0 }}
                    gutterBottom
                  >
                    What is GovQueue?
                  </Typography>
                  <Typography sx={{ fontSize: 18, py: 0, px: 0 }} gutterBottom>
                    It is a web application that is a robust and user-friendly
                    queuing system designed to improve customer flow management
                    and service delivery for government agencies. It includes a
                    centralized dashboard for real-time visibility, separate
                    admin portals for agencies to manage their queues, a
                    public-facing interface for citizens to view queue statuses
                    and wait times, and appointment scheduling. The system also
                    offers reporting and analytics capabilities to enable
                    evidence-based decision-making and integration with existing
                    government systems for seamless data exchange.
                  </Typography>
                  <Divider />
                  <Typography
                    id="question2"
                    sx={{ fontSize: 24, py: 0, px: 0 }}
                    gutterBottom
                  >
                    How can a Filipino Citizen benefit from this App?
                  </Typography>
                  <Typography sx={{ fontSize: 18, py: 0, px: 0 }} gutterBottom>
                    The queuing system application offers various benefits to
                    end users interacting with government agencies. These
                    advantages include reduced waiting times through real-time
                    queue statuses and estimated wait times, improved visit
                    planning with accurate queue information and appointment
                    scheduling, mobile accessibility for on-the-go access, and
                    SMS notifications for staying informed. The application
                    promotes transparency and a user-friendly interface, leading
                    to an enhanced customer experience and confidence in
                    efficient service delivery. The overall result is
                    significant time savings for end users when completing tasks
                    at government agencies.
                  </Typography>
                  <Divider />
                  <Typography
                    id="question3"
                    sx={{ fontSize: 24, py: 0, px: 0 }}
                    gutterBottom
                  >
                    How can a Government Agency benefit from this App?
                  </Typography>
                  <Typography sx={{ fontSize: 18, py: 0, px: 0 }} gutterBottom>
                    The queuing system application offers several benefits to
                    government agencies. It enables efficient resource
                    allocation by providing real-time visibility of queue
                    statuses, leading to optimal utilization of staff and
                    service counters. The application improves service delivery
                    by reducing waiting times and streamlining the queuing
                    process, enhancing citizen satisfaction and perception of
                    agency efficiency. Through reporting and analytics
                    capabilities, agencies can make data-driven decisions,
                    adjusting operations and services as needed. Features like
                    appointment scheduling and SMS notifications enhance citizen
                    engagement, trust, and convenience. The application promotes
                    transparency, streamlines administration, potentially
                    leading to cost savings, and integrates with existing
                    systems for increased efficiency. It is also scalable,
                    adaptable, and facilitates compliance monitoring for
                    improved service standards.
                  </Typography>
                  <Divider />
                  <Typography
                    id="question4"
                    sx={{ fontSize: 24, py: 0, px: 0 }}
                    gutterBottom
                  >
                    Can I use this app for free?
                  </Typography>
                  <Typography sx={{ fontSize: 18, py: 0, px: 0 }} gutterBottom>
                    YES! This application is available for free, but donations
                    are encouraged to support its growth and improvement.
                    Donations would be used to enhance server capacity, improve
                    app performance, hire more developers for new features, and
                    increase marketing efforts to reach a broader audience. Any
                    donation, regardless of the amount, would make a meaningful
                    difference and is greatly appreciated as a valuable form of
                    support.
                  </Typography>
                  <FacebookMessengerChat pageId="108965818922829" />
                </Grid>
              </Box>
            </Item2>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
