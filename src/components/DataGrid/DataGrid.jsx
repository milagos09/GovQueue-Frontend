import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Button,
  Card,
  CardMedia,
  Typography,
  Stack,
  Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { dark, glassEffect } from "../../themes/MyTheme";

export default function DataGrid() {
  const handleClick = () => {
    console.log("Icon clicked!");
  };
  function createData(queue, number, updated, add, remove, reset, edit) {
    return { queue, number, updated, add, remove, reset, edit };
  }

  const rows = [
    createData(
      "Window 1",
      33,
      "2023-06-22 11:00",
      <AddIcon onClick={handleClick} style={{ cursor: "pointer" }} />,
      <RemoveIcon onClick={handleClick} style={{ cursor: "pointer" }} />,
      <Button
        variant="contained"
        sx={{
          ...dark,
          "&:hover": { fontWeight: "bold", background: "black" },
        }}>
        Reset
      </Button>,
      <Button
        variant="contained"
        sx={{
          ...dark,
          "&:hover": { fontWeight: "bold", background: "black" },
        }}>
        Edit
      </Button>
    ),
  ];

  return (
    <>
      <Grid
        container={true}
        spacing={2}
        justifyContent="center"
        alignItems="center"
        direction="row"
        sx={{ ...glassEffect }}>
        <Grid item xs={12} sm={8} sx={{ ...glassEffect }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Card sx={{ width: 100, height: 100 }}>
                      <CardMedia></CardMedia>
                    </Card>
                  </TableCell>
                  <TableCell align="left">
                    <Typography
                      variant="h4"
                      sx={{
                        textAlign: "justify",
                        alignItems: "center",
                        width: "100%",
                        p: 0,
                        m: 0,
                      }}>
                      Bureau of Internal Revenue Region VI{" "}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      variant="contained"
                      sx={{
                        ...dark,
                        "&:hover": {
                          fontWeight: "bold",
                          background: "black",
                        },
                      }}>
                      Add
                    </Button>
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      variant="contained"
                      sx={{
                        ...dark,
                        "&:hover": {
                          fontWeight: "bold",
                          background: "black",
                        },
                      }}>
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} sm={8} sx={{ ...glassEffect }}>
          <TableContainer component={Paper}>
            <Table sx={{ width: "100%" }}>
              <TableRow>
                <TableCell align="center">
                  <Typography variant="h5">Queue</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h5">Number</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h5">Updated</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h5">Action</Typography>
                </TableCell>
              </TableRow>

              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.queue}>
                    <TableCell align="center">
                      <Typography variant="subtitle1">{row.queue}</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="subtitle1">{row.number}</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="subtitle1">{row.updated}</Typography>
                    </TableCell>
                    <Stack
                      direction="row"
                      useFlexGap
                      flexWrap="nowrap"
                      justifyContent="center"
                      alignItems="center"
                      sx={{ width: "auto" }}>
                      <TableCell align="center">
                        {React.cloneElement(row.add, {
                          onClick: handleClick,
                        })}
                      </TableCell>
                      <TableCell align="center">
                        {React.cloneElement(row.remove, {
                          onClick: handleClick,
                        })}
                      </TableCell>
                      <TableCell align="center">{row.reset}</TableCell>
                      <TableCell align="center">{row.edit}</TableCell>
                    </Stack>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}
