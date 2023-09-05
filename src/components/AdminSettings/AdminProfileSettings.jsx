import { MenuItem, TextField, IconButton } from "@mui/material";
import Stack from "@mui/material/Stack";
import Fieldset from "../Fieldset/index";
import Tooltip from "@mui/material/Tooltip";
import { Primary } from "./../Buttons";
import SelectTextField from "./SelectTextField";
import EditableTextField from "./EditableTextField";
import regions from "./../../../fake/location.json";
import types from "./../../../fake/agencyType.json";

export default function AdminProfileSettings({ admin }) {
    const regionIndex = regions.findIndex((r) => r == admin.region);
    const typeIndex = types.findIndex((t) => t == admin.type);

    return (
        <>
            <Fieldset
                title={"Profile"}
                titleStyles={{ fontSize: "1.5rem" }}
                sx={{ padding: "20px", minWidth: "350px" }}
            >
                <Stack alignItems="center">
                    <Tooltip title="Recommended image size is 120x120 pixels" placement="top">
                        <IconButton aria-label="image tip">
                            <img src={admin.logo} style={{ borderRadius: "50%", width: "150px" }} />
                        </IconButton>
                    </Tooltip>
                    <Primary value={"Upload Logo"} sx={{ m: "20px", width: "160px" }} />
                </Stack>
                <Stack rowGap={3} sx={{ my: "20px" }}>
                    <EditableTextField label={"Agency"} value={admin.agency} />
                    <EditableTextField label={"Description"} value={admin.description} />
                    <EditableTextField label={"Address"} value={admin.address} />
                    <SelectTextField label={"Region"} value={regionIndex} menu={regions} />
                    <SelectTextField label={"Type"} value={typeIndex} menu={types} />
                    <EditableTextField label={"Contact"} value={admin.contact} />
                    <EditableTextField label={"Support Email"} value={admin.supportEmail} />
                </Stack>
            </Fieldset>
            {/* <Feildset title={"Profile"} titleStyles={{ fontSize: "24px", fontWeight: "bold" }}>
                <h4 style={{ textAlign: "left" }}>Agency Logo</h4>
                <Stack direction="row" useFlexGap flexWrap="wrap" justifyContent="flex-start" alignItems="flex-start">
                    <Primary value={"Upload"} />
                    <img
                        alt={"Agency Logo"}
                        src={
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQtoYs8uhF2_uICc1SeAs0d2MgqCe301F9-g&usqp=CAU"
                        }
                        style={{ borderRadius: "50%", width: "120px" }}
                    />
                    <Tooltip title="Recommended image size is at 120x120 pixels" placement="right-start">
                        <HelpOutlineIcon id="info" popover="manual" anchor="btn" />
                    </Tooltip>
                </Stack>
                <Stack
                    spacing={{ xs: 2, sm: 2 }}
                    direction={{ xs: "column", sm: "row" }}
                    useFlexGap
                    flexWrap="wrap"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ marginTop: 5 }}
                >
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
                        }}
                    ></TextField>
                </Stack>
                <Stack
                    spacing={{ xs: 1, sm: 2 }}
                    direction={{ xs: "column", sm: "row" }}
                    useFlexGap
                    flexWrap="wrap"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ marginTop: 2 }}
                >
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
                        }}
                    ></TextField>
                </Stack>
                <Stack
                    spacing={{ xs: 1, sm: 2 }}
                    direction={{ xs: "column", sm: "row" }}
                    useFlexGap
                    flexWrap="wrap"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ marginTop: 2 }}
                >
                    <h4 style={{ marginRight: 45 }}>Type</h4>
                    <FormControl size="small" sx={{ m: 1, minWidth: 220 }}>
                        <Select labelId="demo-simple-select-label" id="demo-simple-select" value="Agency Type">
                            <MenuItem>Local Government Unit</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>
                <Stack
                    spacing={{ xs: 1, sm: 2 }}
                    direction={{ xs: "column", sm: "row" }}
                    useFlexGap
                    flexWrap="wrap"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ marginTop: 1 }}
                >
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
                        }}
                    ></TextField>
                </Stack>
                <Stack
                    spacing={{ xs: 1, sm: 2 }}
                    direction={{ xs: "column", sm: "row" }}
                    useFlexGap
                    flexWrap="wrap"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ marginTop: 2 }}
                >
                    <h4 style={{ marginRight: 30 }}>Region</h4>
                    <FormControl sx={{ m: 1, minWidth: 220 }}>
                        <Select size="small" labelId="demo-simple-select-label" id="demo-simple-select" value="Region">
                            <MenuItem>REGION VI</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>
            </Feildset> */}
        </>
    );
}
