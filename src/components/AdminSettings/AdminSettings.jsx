import Box from "@mui/material/Box";
import { Select, TextField, MenuItem, Grid } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { dark, glassEffect } from "../../themes/MyTheme";
import Stack from "@mui/material/Stack";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";

export default function AdminSettings() {
  return (
    <>
      <Box minHeight="80vh" display="flex">
        <Grid
          container
          columns={{ xs: 2, sm: 4, md: 8, lg: 4 }}
          direction="row"
          justifyContent="space-evenly"
          alignItems="flex-start">
          <Grid
            item
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}>
            <fieldset
              style={{
                borderRadius: "5px",
                border: "1px inset rgba(0, 0, 0, .2)",
                paddingLeft: "20px",
                paddingRight: "20px",
                margin: "20px 20px",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "left",
                ...glassEffect,
              }}>
              <legend>
                <h2 style={{ padding: "8px" }}>Profile</h2>
              </legend>
              <h4 style={{ textAlign: "left" }}>Agency Logo</h4>
              <Stack
                spacing={{ xs: 1, sm: 2 }}
                direction="row"
                useFlexGap
                flexWrap="wrap"
                justifyContent="flex-start"
                alignItems="flex-start">
                <Button
                  variant="contained"
                  sx={{
                    ...dark,
                    "&:hover": { fontWeight: "bold", background: "black" },
                    borderRadius: "4px",
                    marginTop: 1,
                  }}>
                  Upload
                </Button>
                <img
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQtoYs8uhF2_uICc1SeAs0d2MgqCe301F9-g&usqp=CAU"
                  }
                />
                <HelpOutlineIcon />
              </Stack>
              <Stack
                spacing={{ xs: 1, sm: 2 }}
                direction="row"
                useFlexGap
                flexWrap="wrap"
                justifyContent="flex-start"
                alignItems="center"
                sx={{ marginTop: 5 }}>
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
                  }}></TextField>
              </Stack>
              <Stack
                spacing={{ xs: 1, sm: 2 }}
                direction="row"
                useFlexGap
                flexWrap="wrap"
                justifyContent="flex-start"
                alignItems="center"
                sx={{ marginTop: 3 }}>
                <h4 style={{ marginRight: 15 }}>Description</h4>
                <TextField
                  variant="outlined"
                  type="string"
                  disabled="true"
                  size="small"
                  margin="none"
                  defaultValue="Agency Description"
                  sx={{
                    size: "small",
                  }}></TextField>
              </Stack>
              <Stack
                spacing={{ xs: 1, sm: 2 }}
                direction="row"
                useFlexGap
                flexWrap="wrap"
                justifyContent="flex-start"
                alignItems="center"
                sx={{ marginTop: 1 }}>
                <h4 style={{ marginRight: 45 }}>Type</h4>
                <FormControl size="small" sx={{ m: 2, minWidth: 220 }}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value="Agency Type">
                    <MenuItem>Local Government Unit</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              <Stack
                spacing={{ xs: 1, sm: 2 }}
                direction="row"
                useFlexGap
                flexWrap="wrap"
                justifyContent="flex-start"
                alignItems="center"
                sx={{ marginTop: 1 }}>
                <h4 style={{ marginRight: 40 }}>Address</h4>
                <TextField
                  variant="outlined"
                  type="string"
                  disabled="true"
                  size="small"
                  margin="none"
                  defaultValue="Input Complete Address"
                  sx={{
                    size: "small",
                  }}></TextField>
              </Stack>
              <Stack
                spacing={{ xs: 1, sm: 2 }}
                direction="row"
                useFlexGap
                flexWrap="wrap"
                justifyContent="flex-start"
                alignItems="center"
                sx={{ marginTop: 1 }}>
                <h4 style={{ marginRight: 30 }}>Region</h4>
                <FormControl sx={{ m: 2, minWidth: 220 }}>
                  <Select
                    size="small"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value="Region">
                    <MenuItem>REGION VI</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </fieldset>
          </Grid>

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
                borderRadius: "5px",
                border: "1px inset rgba(0, 0, 0, .2)",
                paddingLeft: "10px",
                paddingRight: "10px",
                margin: "20px 20px",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "left",
                ...glassEffect,
              }}>
              <legend>
                <h2 style={{ padding: "8px" }}>Settings</h2>
              </legend>
              <Stack
                spacing={{ xs: 1, sm: 2 }}
                direction="row"
                useFlexGap
                flexWrap="wrap"
                justifyContent="flex-start"
                alignItems="center"
                sx={{ marginTop: 1 }}>
                <h4 style={{ marginRight: 90 }}>Email</h4>
                <TextField
                  variant="outlined"
                  type="string"
                  disabled="true"
                  size="small"
                  margin="none"
                  defaultValue="Input Email Address"
                  sx={{
                    size: "small",
                  }}></TextField>
              </Stack>
              <Stack
                spacing={{ xs: 1, sm: 2 }}
                direction="row"
                useFlexGap
                flexWrap="wrap"
                justifyContent="flex-start"
                alignItems="center"
                sx={{ marginTop: 2 }}>
                <h4 style={{ marginRight: 10 }}>Messenger Plugin</h4>
                <FormGroup>
                  <FormControlLabel
                    control={<Switch defaultChecked />}
                    label="Enabled"
                  />
                </FormGroup>
              </Stack>
              <Stack
                spacing={{ xs: 1, sm: 2 }}
                direction="row"
                useFlexGap
                flexWrap="wrap"
                justifyContent="flex-end"
                alignItems="center">
                <TextField
                  variant="outlined"
                  type="string"
                  disabled="true"
                  size="small"
                  margin="none"
                  defaultValue="Application ID"
                  sx={{
                    size: "small",
                  }}></TextField>
              </Stack>
              <Stack
                spacing={{ xs: 1, sm: 2 }}
                direction="row"
                useFlexGap
                flexWrap="wrap"
                justifyContent="flex-start"
                alignItems="center"
                sx={{ marginTop: 2 }}>
                <h4 style={{ marginRight: 30 }}>Announcement</h4>
                <FormGroup>
                  <FormControlLabel
                    control={<Switch defaultChecked />}
                    label="Enabled"
                  />
                </FormGroup>
              </Stack>
              <Stack
                spacing={{ xs: 1, sm: 2 }}
                direction="row"
                useFlexGap
                flexWrap="wrap"
                justifyContent="flex-end"
                alignItems="center">
                <TextField
                  variant="outlined"
                  type="string"
                  disabled="true"
                  size="small"
                  margin="none"
                  defaultValue="Announcement"
                  sx={{
                    size: "small",
                  }}></TextField>
              </Stack>
              <Stack
                spacing={{ xs: 1, sm: 2 }}
                direction="row"
                useFlexGap
                flexWrap="wrap"
                justifyContent="flex-start"
                alignItems="center"
                sx={{ marginTop: 2 }}>
                <h4 style={{ marginRight: 60 }}>Password</h4>
                <Button
                  variant="contained"
                  sx={{
                    ...dark,
                    "&:hover": { fontWeight: "bold", background: "black" },
                    borderRadius: "4px",
                    p: 1,
                    m: 1,
                  }}>
                  Change
                </Button>
              </Stack>
            </fieldset>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
