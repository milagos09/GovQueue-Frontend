import NavBar from "../../components/Navbar";
import FacebookMessengerChat from "../../components/FacebookMessengerChat/index";
import { styled } from "@mui/material/styles";
import {
  Divider,
  ListItem,
  List,
  Typography,
  CardContent,
  Card,
  Box,
  Paper,
  Grid,
} from "@mui/material";
import faqData from "./faq.json";

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
  }));

  return (
    <>
      <NavBar />
      <Box>
        <Grid container columnSpacing={{ xs: 2 }}>
          <Grid sm={12} md={4}>
            <Box sx={{ position: "sticky", top: 0 }}>
              <Item1
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}>
                <Card
                  variant="outlined"
                  sx={{ minWidth: 275, height: "100%", border: "none" }}>
                  <CardContent sx={{ p: 2 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        alignItems: "left",
                        py: 0,
                        px: 0,
                      }}
                      gutterBottom>
                      Contents
                    </Typography>
                    <Box
                      xs="10"
                      sx={{
                        display: "flex",
                        width: "100%",
                        bgcolor: "background.paper",
                      }}>
                      <nav aria-label="main mailbox folders">
                        <List>
                          {faqData.map((faq) => (
                            <ListItem
                              key={faq.id}
                              disablePadding
                              sx={{ px: 1 }}>
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
              </Item1>
            </Box>
          </Grid>
          <Grid sm={12} md={8} sx={{ px: 1 }}>
            <Item2>
              <Box
                sx={{
                  px: 4,
                }}>
                <Typography variant="h4" sx={{ py: 0, px: 0 }} gutterBottom>
                  GovQueue Frequently Asked Questions
                </Typography>
                <Divider />
                {faqData.map((faq) => (
                  <>
                    <Typography
                      variant="h5"
                      id={`question${faq.id}`}
                      sx={{ py: 0, px: 0 }}
                      gutterBottom>
                      {faq.faqQuestion}
                    </Typography>
                    <Typography variant="h6" sx={{ py: 0, px: 0 }} gutterBottom>
                      {faq.faqAnswer}
                    </Typography>
                    <Divider />
                  </>
                ))}
              </Box>
            </Item2>
          </Grid>
        </Grid>
      </Box>
      <FacebookMessengerChat pageId="108965818922829" />
    </>
  );
}
