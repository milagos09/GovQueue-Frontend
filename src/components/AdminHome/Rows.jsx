import { useState } from "react";
import Grid from "@mui/material/Grid";

import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import logs from "../../../fake/logs.json";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import glassEffect from "../../themes/MyTheme";

export default function DataTable() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const actions = [
    { icon: <AddIcon />, name: "Add" },
    { icon: <RemoveIcon />, name: "Remove" },
    { icon: <ModeEditIcon />, name: "Edit" },
  ];
  return (
    <>
      <Grid
        item
        direction="column"
        columns={{ xs: 2, sm: 4, md: 4 }}
        sx={{
          justifyContent: "flex-start",
          alignItems: "center",
        }}>
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
              <Typography variant="h5">Queue</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h5">Number</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h5">Updated</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="h5">Action</Typography>
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
                  <Typography variant="subtitle1">{logs.timestamp}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Box sx={{ transform: "translateZ(0px)" }}>
                    <Backdrop open={open} sx={{ background: "none" }} />
                    <SpeedDial
                      direction="down"
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
                            // borderRadius: "50%",
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
    </>
  );
}
