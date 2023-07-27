import NavBar from "../../components/Navbar";
import FacebookMessengerChat from "../../components/FacebookMessengerChat";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function Support() {
  const Item1 = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  }));
  const Item2 = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <NavBar />
      <Box sx={{ width: "100%" }}>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 24, sm: 24, md: 24 }}
        >
          <Grid xs={3} sx={{ border: "none" }}>
            <Item1>
              <Box
                xs={3}
                sx={{
                  display: "flex",
                  alignItems: "left",
                  //   justifyContent: "center",
                }}
              >
                <Grid item xs={12} md={12} lg={12} sx={{ px: 0, py: 0 }}>
                  <Card
                    variant="outlined"
                    sx={{ minWidth: 275, height: "100%", border: "none" }}
                  >
                    <CardContent sx={{ px: 0 }}>
                      <Typography
                        sx={{ alignItems: "left", fontSize: 18, py: 0, px: 1 }}
                        gutterBottom
                      >
                        Contents
                      </Typography>
                      <Box
                        sx={{
                          width: "100%",
                          maxWidth: 360,
                          bgcolor: "background.paper",
                        }}
                      >
                        <nav aria-label="main mailbox folders">
                          <List>
                            <ListItem disablePadding sx={{ px: 1 }}>
                              What is GovQueue?
                            </ListItem>
                            <ListItem disablePadding sx={{ px: 1 }}>
                              How to use the App?
                            </ListItem>
                          </List>
                        </nav>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Box>
            </Item1>
          </Grid>
          <Grid xs={7}>
            <Item2>
              <Box
                sx={{
                  display: "flex",
                  alignContent: "left",
                  //   justifyContent: "center",
                }}
              >
                <Grid item xs={12} md={12} lg={12} sx={{ px: 1, py: 0 }}>
                  <Card
                    variant="outlined"
                    sx={{ minWidth: 275, height: "100%", border: "none" }}
                  >
                    <CardContent sx={{ px: 0 }}>
                      <Typography
                        sx={{ fontSize: 30, py: 0, px: 0 }}
                        gutterBottom
                      >
                        GovQueue FAQ
                      </Typography>
                      <Typography
                        sx={{ fontSize: 22, py: 0, px: 0 }}
                        gutterBottom
                      >
                        What is GovQueue?
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Box>
            </Item2>
          </Grid>
        </Grid>
      </Box>

      <FacebookMessengerChat />
    </>
  );
}
