import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option) => option.title,
});

export default function Filter() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ marginRight: "10px" }}>
        <Autocomplete
          id="filter-demo"
          options={agencies}
          getOptionLabel={(option) => option.title}
          filterOptions={filterOptions}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Agency" />}
        />
      </div>
      <div style={{ marginRight: "10px" }}>
        <Autocomplete
          id="filter-demo"
          options={agencies}
          getOptionLabel={(option) => option.office}
          filterOptions={filterOptions}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Office" />}
        />
      </div>
      <div>
        <Autocomplete
          id="filter-demo"
          options={agencies}
          getOptionLabel={(option) => option.location}
          filterOptions={filterOptions}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Location" />}
        />
      </div>
    </div>
  );
}

const agencies = [
  {
    title: "Bureau of Internal Revenue",
    office: "Revenue District Office VI",
    location: "Iloilo City",
  },
  {
    title: "Philippine Statistics Authority",
    office: "Region VI",
    location: "Iloilo City",
  },
];
