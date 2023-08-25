import { useState } from "react";
import Table from "@mui/material/Table";
import logs from "../../../fake/logs.json";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import TableBody from "@mui/material/TableBody";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { TableHead, Paper, Typography } from "@mui/material";
import { Pagination } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { glassEffect } from "../../themes/MyTheme";

import { styled } from "@mui/material/styles";

export default function AdminQueueTable() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const actions = [
    { icon: <AddIcon />, name: "Add" },
    { icon: <RemoveIcon />, name: "Remove" },
    { icon: <ModeEditIcon />, name: "Edit" },
  ];
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },

    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <>
      <Paper
        sx={{
          width: "100%",
          overflow: "hidden",
          mb: 4,
          ...glassEffect,
          position: "relative",
        }}>
        <Table
          sx={{ width: "100%" }}
          size="small"
          aria-label="customized table">
          <TableHead>
            <StyledTableCell align="center">Queue</StyledTableCell>
            <StyledTableCell align="center">Number</StyledTableCell>
            <StyledTableCell align="center">Updated</StyledTableCell>
            <StyledTableCell align="left">Action</StyledTableCell>
          </TableHead>

          <TableBody sx={{ columnGap: 100 }}>
            {logs.map((logs) => (
              <StyledTableRow key={logs.id}>
                <StyledTableCell align="center">
                  <Typography variant="subtitle2">{logs.queueId}</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography variant="subtitle2">{logs.queue}</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography variant="subtitle2">{logs.timestamp}</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
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
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            my: 1,
          }}>
          <Pagination
            count={10}
            defaultPage={1}
            variant="outlined"
            // onChange={handlePageChange}
          />
        </Box>
      </Paper>
    </>
  );
}
