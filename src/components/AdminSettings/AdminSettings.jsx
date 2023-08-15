import Box from "@mui/material/Box";
import { TextField, Grid } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import { dark } from "../../themes/MyTheme";
import Stack from "@mui/material/Stack";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import Feildset from "../Fieldset/index";
import AdminProfileSettings from "../AdminProfileSettings/AdminProfileSettings";

export default function AdminSettings() {
  return (
    <Box minHeight="80vh" display="flex">
      <Grid
        container
        columns={{ xs: 2, sm: 4, md: 8, lg: 4 }}
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-start">
        <AdminProfileSettings />
        <Grid
          item
          direction="column"
          columns={{ xs: 2, sm: 4, md: 4 }}
          sx={{
            justifyContent: "flex-start",
            alignItems: "center",
          }}>
          <Feildset
            title={"Settings"}
            titleStyles={{ fontSize: "24px", fontWeight: "bold" }}>
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
          </Feildset>
        </Grid>
      </Grid>
    </Box>
  );
}
