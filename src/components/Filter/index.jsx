import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import admins from "./../../../fake/admins.json";
import { Primary, Secondary } from "./../Buttons";

function sortAndGetUniqueValues(array) {
    array.sort();
    return Array.from(new Set(array));
}

export default function Filter({ filteredAdmins, setFilter, setTab }) {
    const [region, setRegion] = useState(null);
    const [type, setType] = useState(null);
    const [agency, setAgency] = useState(null);

    const filterOptions = createFilterOptions({
        matchFrom: "start",
        stringify: (option) => option,
    });
    const handleSubmit = () => {
        const newFilter = admins.filter(
            (admin) => admin.region.includes(region) || admin.type.includes(type) || admin.agency.includes(agency)
        );
        setFilter(newFilter);
        setTab(1);
    };
    const handleReset = () => {
        setRegion(null);
        setType(null);
        setAgency(null);
        setFilter(admins);
    };

    const agencies = filteredAdmins.map((admin) => admin.agency).sort();
    const regions = sortAndGetUniqueValues(filteredAdmins.map((admin) => admin.region));
    const types = sortAndGetUniqueValues(filteredAdmins.map((admin) => admin.type));

    return (
        <Grid paddingY={3} container rowSpacing={3} flexDirection={{ xs: "column", sm: "row" }} columns={12}>
            <Grid item xs={10} xsOffset={1} mdOffset={1} sm={10} md={2}>
                <Autocomplete
                    filterOptions={filterOptions}
                    id="filter-region"
                    options={regions}
                    sx={{ width: "100%" }}
                    renderInput={(params) => <TextField {...params} label="Select Region" variant="outlined" />}
                    value={region}
                    onChange={(e, newValue) => {
                        setRegion(newValue);
                    }}
                />
            </Grid>
            <Grid item xs={10} xsOffset={1} sm={10} md={2}>
                <Autocomplete
                    filterOptions={filterOptions}
                    id="filter-type"
                    options={types}
                    sx={{ width: "100%" }}
                    renderInput={(params) => <TextField {...params} label="Agency Type" variant="outlined" />}
                    value={type}
                    onChange={(e, newValue) => {
                        setType(newValue);
                    }}
                />
            </Grid>
            <Grid item xs={10} xsOffset={1} sm={10} md={2}>
                <Autocomplete
                    filterOptions={filterOptions}
                    id="filter-agency"
                    options={agencies}
                    sx={{ width: "100%" }}
                    renderInput={(params) => <TextField {...params} label="Select Agency" variant="outlined" />}
                    value={agency}
                    onChange={(e, newValue) => {
                        setAgency(newValue);
                    }}
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
                <Primary onClick={handleSubmit} value={"Submit"} />
                <Secondary value={"Reset"} onClick={handleReset} />
            </Grid>
        </Grid>
    );
}
