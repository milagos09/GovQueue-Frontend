import React from "react";
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
import faqData from "../../../faq.json";

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
                              {faqData.map((faq) => (
                                <ListItem
                                  key={faq.id}
                                  disablePadding
                                  sx={{ px: 1 }}
                                >
                                  <a href={`#question${faq.id}`}>
                                    {faq.faqQuestion}
                                  </a>
                                </ListItem>
                              ))}
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
                  {faqData.map((faq) => (
                    <React.Fragment key={faq.id}>
                      <Typography
                        id={`question${faq.id}`} // Assuming you want to use the 'id' field in the question id
                        sx={{ fontSize: 24, py: 0, px: 0 }}
                        gutterBottom
                      >
                        {faq.faqQuestion}
                      </Typography>
                      <Typography
                        sx={{ fontSize: 18, py: 0, px: 0 }}
                        gutterBottom
                      >
                        {faq.faqAnswer}
                      </Typography>
                      <Divider />
                    </React.Fragment>
                  ))}
                </Grid>
              </Box>
            </Item2>
          </Grid>
        </Grid>
      </Box>
      <FacebookMessengerChat pageId="108965818922829" />
    </>
  );
}
