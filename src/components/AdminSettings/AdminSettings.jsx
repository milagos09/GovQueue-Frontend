import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Select, TextField, Card, MenuItem } from "@mui/material";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import Button from "@mui/material/Button";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { dark } from "../../themes/MyTheme";
import Stack from "@mui/material/Stack";

export default function AdminSettings() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#ffffff", height: "100%" }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
            spacing={1}
            sx={{ padding: 1 }}>
            <h4>Agency Name</h4>
            <TextField
              variant="outlined"
              type="string"
              disabled="true"
              size="small"
              margin="none"
              defaultValue="Agency Name"
              sx={{
                size: "small",
                m: 1,
                width: 200,
                maxWidth: "100%",
              }}></TextField>
            <h4>Change Password</h4>
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              size="small"
              sx={{
                m: 1,
                width: 200,
                maxWidth: "100%",
              }}
            />
            <h4>Confirm Password</h4>
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              size="small"
              sx={{
                m: 1,
                width: 200,
                maxWidth: "100%",
              }}
            />
          </Stack>
          <Stack
            direction={{ xs: "12", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
            spacing={3}
            sx={{ padding: 1 }}>
            <h4>Agency Description</h4>
            <ModeEditIcon />
            <TextField
              variant="outlined"
              type="string"
              disabled="true"
              margin="none"
              defaultValue="Description"
              sx={{
                size: "string",
                m: 1,
                width: 200,
                maxWidth: "100%",
              }}></TextField>
            <h4>Email Address</h4>

            <TextField
              variant="outlined"
              type="string"
              disabled="true"
              size="small"
              margin="none"
              defaultValue="Email Address"
              sx={{
                size: "small",
                m: 2,
                p: 1,
              }}></TextField>
            <h4>Complete Address</h4>
            <TextField
              variant="outlined"
              type="string"
              disabled="true"
              size="small"
              margin="none"
              defaultValue="Address"
              sx={{
                size: "small",
                m: 1,
              }}></TextField>
          </Stack>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            sx={{ padding: 1 }}>
            <h4>Agency Type</h4>
            <FormControl size="small" sx={{ m: 2, minWidth: 200 }}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value="Agency Type">
                <MenuItem>Local Government Unit</MenuItem>
              </Select>
            </FormControl>
            <h4>Region</h4>
            <FormControl sx={{ m: 2, minWidth: 200 }}>
              <Select
                size="small"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value="Region">
                <MenuItem>REGION VI</MenuItem>
              </Select>
            </FormControl>
            <h4>Chat Support</h4>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              color="default"
              defaultValue="disabled">
              <FormControlLabel
                value="enabled"
                disabled="true"
                control={<Radio />}
                label="Enabled"
              />
              <FormControlLabel
                value="disabled"
                checked="true"
                control={<Radio />}
                label="Disabled"
              />
            </RadioGroup>
            <TextField
              variant="outlined"
              type="string"
              size="small"
              margin="none"
              disabled="true"
              defaultValue="pageID"
              sx={{
                size: "small",
                m: "2",
              }}></TextField>
          </Stack>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="flex-start"
            alignItems="center"
            spacing={1}
            sx={{ padding: 1 }}>
            <h4>Agency Logo</h4>
            <Button
              variant="contained"
              sx={{
                ...dark,
                "&:hover": { fontWeight: "bold", background: "black" },
                borderRadius: "4px",
                p: 1,
                m: 1,
              }}>
              Upload Image
            </Button>
            <Card sx={{ maxWidth: "200px" }}>
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQtoYs8uhF2_uICc1SeAs0d2MgqCe301F9-g&usqp=CAU"
                }
              />
            </Card>
          </Stack>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="flex-start"
            alignItems="center"
            spacing={5}
            sx={{ padding: 1 }}>
            <Button
              variant="contained"
              sx={{
                ...dark,
                "&:hover": { fontWeight: "bold", background: "black" },
                borderRadius: "4px",
                p: 1,
                m: 1,
              }}>
              Save Settings
            </Button>
            <Button
              variant="contained"
              sx={{
                ...dark,
                "&:hover": { fontWeight: "bold", background: "black" },
                borderRadius: "4px",
                p: 1,
                m: 1,
              }}>
              Reset
            </Button>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
}
