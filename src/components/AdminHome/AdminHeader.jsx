import { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { dark, glassEffect } from "../../themes/MyTheme";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import logs from "../../../fake/logs.json";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import TableBody from "@mui/material/TableBody";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Container from "@mui/material/Container";

export default function AdminHeader() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const actions = [
    { icon: <AddIcon />, name: "Add" },
    { icon: <RemoveIcon />, name: "Remove" },
    { icon: <ModeEditIcon />, name: "Edit" },
  ];
  return (
    <>
      <Container maxWidth="lg">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="row"
          sx={{ padding: 1 }}>
          <fieldset
            style={{
              justifyContent: "center",
              borderRadius: "10px",
              border: "1px inset rgba(0, 0, 0, .2)",
              padding: "25px 50px",

              ...glassEffect,
            }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent="center"
              alignItems="center"
              spacing={1}>
              <Card raised sx={{ width: 150, height: 150 }}>
                <CardMedia></CardMedia>
              </Card>

              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  alignItems: "center",
                  width: "100%",
                }}>
                Bureau of Internal Revenue Region VI
              </Typography>

              <Button
                variant="contained"
                // onClick={onClick}
                sx={{
                  ...dark,
                  "&:hover": { fontWeight: "bold", background: "black" },
                  borderRadius: "4px",
                }}>
                Add
              </Button>

              <Button
                variant="contained"
                // onClick={onClick}
                sx={{
                  ...dark,
                  "&:hover": { fontWeight: "bold", background: "black" },
                  borderRadius: "4px",
                }}>
                Remove
              </Button>
            </Stack>
          </fieldset>

          <fieldset
            style={{
              justifyContent: "center",
              borderRadius: "10px",
              border: "1px inset rgba(0, 0, 0, .2)",
              padding: "25px 50px",
              margin: "20px 10px",

              ...glassEffect,
            }}>
            <TableRow>
              <TableCell align="center">
                <Typography variant="h6">Queue</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6">Number</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6">Updated</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6">Action</Typography>
              </TableCell>
            </TableRow>

            <TableBody>
              {logs.map((logs) => (
                <TableRow key={logs.id}>
                  <TableCell align="center">
                    <Typography variant="subtitle1">{logs.queueId}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="subtitle1">{logs.queue}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="subtitle1">
                      {logs.timestamp}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Box sx={{ transform: "translateZ(0px)" }}>
                      <Backdrop open={open} sx={{ background: "none" }} />
                      <SpeedDial
                        direction="up"
                        ariaLabel="SpeedDial tooltip"
                        icon={<SpeedDialIcon onClick={handleOpen} sx={{}} />}
                        open={open}
                        FabProps={{
                          size: "small",
                          color: "info",
                        }}
                        sx={{ position: "relative" }}>
                        {actions.map((action) => (
                          <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            sx={{
                              position: !open ? "absolute" : "",
                              transition: open ? ".5s" : "none",
                              borderRadius: "50%",
                              "&:hover": {
                                color: "black",
                                background: "azure",
                              },
                            }}
                          />
                        ))}
                      </SpeedDial>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </fieldset>
        </Grid>
      </Container>
    </>
  );
}
