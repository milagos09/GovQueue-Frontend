import { Select, MenuItem, Grid, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Stack from "@mui/material/Stack";
import Feildset from "../Fieldset/index";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { dark } from "../../themes/MyTheme";

export default function AdminProfileSettings() {
  return (
    <>
      <Grid
        item
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Feildset
          title={"Profile"}
          titleStyles={{ fontSize: "24px", fontWeight: "bold" }}>
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
              alt={"Agency Logo"}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQtoYs8uhF2_uICc1SeAs0d2MgqCe301F9-g&usqp=CAU"
              }
            />
            <Tooltip
              title="Recommended Image Size and File Type"
              placement="right-start">
              <HelpOutlineIcon />
            </Tooltip>
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
        </Feildset>
      </Grid>
    </>
  );
}
