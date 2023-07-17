import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import Grid from "@mui/material/Unstable_Grid2";
import agencies from "./../../../fake/agency.json";
import location from "./../../../fake/location.json";
import Button from "@mui/material/Button";
import AgencyType from "./../../../fake/agencyType.json";

const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option) => option,
});

const handleSubmit = () => {
  // Handle submit logic here
  console.log("Form submitted");
};

const handleReset = () => {
  // Handle reset logic here
  console.log("Form reset");
};

export default function Filter() {
  return (
    <Grid
      paddingTop={3}
      container
      spacing={2}
      flexDirection={{ xs: "column", sm: "row" }}
      columns={12}
    >
      <Grid item xs={10} xsOffset={1} mdOffset={1} sm={10} md={2}>
        <Autocomplete
          id="filter-demo-agency"
          options={agencies}
          sx={{ width: "100%" }}
          renderInput={(params) => (
            <TextField {...params} label="Select Agency" variant="outlined" />
          )}
        />
      </Grid>
      <Grid item xs={10} xsOffset={1} sm={10} md={2}>
        <Autocomplete
          id="filter-demo-agency"
          options={AgencyType}
          sx={{ width: "100%" }}
          renderInput={(params) => (
            <TextField {...params} label="Agency Type" variant="outlined" />
          )}
        />
      </Grid>
      <Grid item xs={10} xsOffset={1} sm={10} md={2}>
        <Autocomplete
          id="filter-demo"
          options={location}
          sx={{ width: "100%" }}
          renderInput={(params) => (
            <TextField {...params} label="Select Region" variant="outlined" />
          )}
        />
      </Grid>
      <Grid
        container
        flexDirection={{ xs: "row", sm: "row" }}
        justifyContent={{ xs: "center", sm: "center" }}
        alignItems="center"
        xs={12}
        sm={6}
        md={3}
        sx={{ gap: 2 }}
      >
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>

        <Button variant="contained" color="grey" onClick={handleReset}>
          Reset
        </Button>
      </Grid>
    </Grid>
  );
}
