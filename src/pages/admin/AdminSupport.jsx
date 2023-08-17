import React from "react";
import AdminNavbar from "../../components/AdminNavbar";
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
import apiData from "../public/api.json";

export default function AdminSupport() {
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
      <AdminNavbar />
      <Box>
        <Grid container spacing={{ xs: 1, md: 3 }}>
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
                      sx={{
                        alignItems: "left",
                        fontSize: 18,
                        py: 0,
                        px: 0,
                      }}
                      gutterBottom>
                      Guides
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
                          {apiData.guides.map((guide, index) => (
                            <ListItem key={index} disablePadding sx={{ px: 1 }}>
                              <a href={`#guide${index}`}>{guide.name}</a>
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
                <Typography sx={{ fontSize: 30, py: 0, px: 0 }} gutterBottom>
                  GovQueue API Documentation
                </Typography>
                <Divider />
                {apiData.guides.map((guide, index) => (
                  <>
                    <Typography
                      id={`guide${index}`}
                      variant="h5"
                      sx={{ py: 2 }}>
                      {guide.name}
                    </Typography>
                    <Typography variant="body1" sx={{ py: 1 }}>
                      {guide.description}
                    </Typography>
                    <Typography variant="body2" sx={{ py: 1 }}>
                      Route: `{guide.route}`
                    </Typography>
                    <Typography variant="body2" sx={{ py: 1 }}>
                      Method: {guide.method}
                    </Typography>
                    <Typography variant="body2" sx={{ py: 1 }}>
                      Parameters:
                    </Typography>
                    <ul>
                      {guide.parameters.map((parameter, paramIndex) => (
                        <li key={paramIndex}>
                          {parameter.name} - {parameter.description}
                        </li>
                      ))}
                    </ul>
                    <Typography variant="body2" sx={{ py: 1 }}></Typography>
                    <pre>{JSON.stringify(guide.request.example, null, 2)}</pre>
                    <Typography variant="body2" sx={{ py: 1 }}></Typography>
                    <pre>{JSON.stringify(guide.response.example, null, 2)}</pre>
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
