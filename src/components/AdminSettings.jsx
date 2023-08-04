import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {
  Select,
  TextField,
  Typography,
  Card,
  Grid,
  InputLabel,
  MenuItem,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";

// import AgencyType from "../../fake/agencyType.json";

export default function AdminSettings() {
  return (
    <Box p={2} sx={{ width: "100%" }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1 }}
        justifyContent="center"
        direction="row">
        <Grid item xs={5} sm={2} md={2}>
          <Typography
            variant="subtitle1"
            marginY={1}
            sx={{ alignItems: "center" }}>
            Agency Name{" "}
          </Typography>
          <Typography variant="subtitle1" marginY={6} align="left">
            Description{" "}
          </Typography>
          <Typography variant="subtitle1" marginTop={6} align="left">
            Agency Type{" "}
          </Typography>
          <Typography
            variant="subtitle1"
            marginY={6}
            sx={{ alignItems: "center" }}>
            Email Address{" "}
          </Typography>
          <Typography
            variant="subtitle1"
            marginY={0}
            sx={{ alignItems: "center" }}>
            Change Password{" "}
            <Typography
              variant="subtitle1"
              marginY={2}
              sx={{ alignItems: "center" }}>
              Re-enter to Confirm{" "}
            </Typography>
            <Typography
              variant="subtitle1"
              marginY={2}
              sx={{ alignItems: "center" }}>
              Address{" "}
            </Typography>
            <Typography
              variant="subtitle1"
              marginY={5}
              sx={{ alignItems: "center" }}>
              Region{" "}
            </Typography>
            <Typography
              variant="subtitle1"
              marginY={5}
              sx={{ alignItems: "center" }}>
              Chat Support{" "}
            </Typography>
            <Typography
              variant="subtitle1"
              marginY={5}
              sx={{ alignItems: "center" }}>
              Agency Logo{" "}
            </Typography>
          </Typography>
        </Grid>
        <Grid column item p={2} xs={6} sm={6} md={8} lg={2}>
          <TextField
            variant="filled"
            type="string"
            disabled="true"
            size="small"
            margin="none"
            defaultValue="Agency Name"
            sx={{
              size: "small",
              border: "1px solid black",
              m: 1,
            }}></TextField>
          <TextField
            variant="filled"
            type="string"
            disabled="true"
            size="medium"
            margin="none"
            defaultValue="Agency Description"
            sx={{
              size: "medium",
              border: "1px solid black",
              m: 1,
            }}></TextField>
          <FormControl size="small" sx={{ m: 2, minWidth: 220 }}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value="Agency Type">
              <MenuItem>Local Government Unit</MenuItem>
            </Select>
          </FormControl>
          <TextField
            variant="filled"
            type="string"
            size="small"
            margin="none"
            defaultValue="Email Address"
            sx={{
              size: "small",
              border: "1px solid black",
              m: "2",
            }}></TextField>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            size="small"
            sx={{
              m: 1,
              width: 235,
              maxWidth: "100%",
            }}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            size="small"
            sx={{
              m: 1,
              width: 235,
              maxWidth: "100%",
            }}></TextField>
          <TextField
            variant="filled"
            type="string"
            size="small"
            margin="none"
            defaultValue="Complete Address"
            sx={{
              size: "small",
              border: "1px solid black",
              m: "2",
            }}></TextField>
          <FormControl sx={{ m: 2, minWidth: 220 }}>
            <Select
              size="small"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value="Region">
              <MenuItem>REGION VI</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 2, minWidth: 220 }}>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group">
              <FormControlLabel
                value="end"
                control={<Radio />}
                label="Enabled"
              />
              <FormControlLabel
                value="end"
                control={<Radio />}
                label="Disabled"
              />
            </RadioGroup>
          </FormControl>
          <Card sx={{ maxWidth: 100 }}>
            <CardMedia
              sx={{ height: 150 }}
              // image="/static/images/cards/contemplative-reptile.jpg"
              // title="green iguana"
            />
          </Card>
          <Button variant="contained" sx={{ p: 1, m: 1 }}>
            Upload Image
          </Button>
          <Button variant="contained" sx={{ p: 1, m: 1 }}>
            Save Settings
          </Button>
          <Button variant="contained" sx={{ p: 1, m: 1 }}>
            Reset
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
