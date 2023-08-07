import Box from "@mui/material/Box";
import {
  Select,
  TextField,
  Typography,
  Card,
  Grid,
  MenuItem,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import Button from "@mui/material/Button";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { dark } from "../../themes/MyTheme";

// import AgencyType from "../../fake/agencyType.json";

export default function AdminSettings() {
  return (
    <Box p={2} sx={{ width: "100%" }}>
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 1, md: 1 }}
        justifyContent="space-around"
        direction="row"
        alignItems="flex-start">
        <Grid item xs={3} sm={2} md={2}>
          <Typography
            variant="subtitle1"
            marginY={1}
            sx={{ alignItems: "left" }}>
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
            marginY={4}
            sx={{ alignItems: "left" }}>
            Email Address{" "}
          </Typography>
          <Typography
            variant="subtitle1"
            marginY={0}
            sx={{ alignItems: "left" }}>
            Change Password{" "}
            <Typography
              variant="subtitle1"
              marginY={3}
              sx={{ alignItems: "left" }}>
              Re-enter to Confirm{" "}
            </Typography>
            <Typography
              variant="subtitle1"
              marginY={2}
              sx={{ alignItems: "left" }}>
              Address{" "}
            </Typography>
            <Typography
              variant="subtitle1"
              marginY={4}
              sx={{ alignItems: "left" }}>
              Region{" "}
            </Typography>
            <Typography
              variant="subtitle1"
              marginY={5}
              sx={{ alignItems: "left" }}>
              Chat Support{" "}
            </Typography>
            <Typography
              variant="subtitle1"
              marginY={10}
              sx={{ alignItems: "left" }}>
              Agency Logo{" "}
            </Typography>
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          p={0}
          xs={9}
          sm={5}
          md={5}
          lg={3}>
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
            }}></TextField>
          <TextField
            variant="outlined"
            type="string"
            disabled="true"
            size="medium"
            margin="none"
            defaultValue="Agency Description"
            sx={{
              size: "medium",
              m: 1,
            }}></TextField>
          <ModeEditIcon />
          <FormControl size="small" sx={{ m: 2, minWidth: 220 }}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value="Agency Type">
              <MenuItem>Local Government Unit</MenuItem>
            </Select>
          </FormControl>
          <TextField
            variant="outlined"
            type="string"
            size="small"
            margin="none"
            defaultValue="Email Address"
            sx={{
              size: "small",
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
            variant="outlined"
            type="string"
            size="small"
            margin="none"
            defaultValue="Complete Address"
            sx={{
              size: "small",
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
              defaultValue="pageID"
              sx={{
                size: "small",
                m: "2",
              }}></TextField>
          </FormControl>
          <Card sx={{ maxWidth: "200px" }}>
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQtoYs8uhF2_uICc1SeAs0d2MgqCe301F9-g&usqp=CAU"
              }
            />
          </Card>
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
        </Grid>
      </Grid>
    </Box>
  );
}
