import { IconButton } from "@mui/material";
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
        sx={{ padding: "20px", minWidth: "350px" }}>
        <Stack alignItems="center">
          <Tooltip
            title="Recommended image size is 120x120 pixels"
            placement="top">
            <IconButton aria-label="image tip">
              <img
                src={admin.logo}
                style={{ borderRadius: "50%", width: "150px" }}
              />
            </IconButton>
          </Tooltip>
          <Primary value={"Upload Logo"} sx={{ m: "20px", width: "160px" }} />
        </Stack>
        <Stack rowGap={3} sx={{ my: "20px" }}>
          <EditableTextField label={"Agency"} value={admin.agency} />
          <EditableTextField label={"Description"} value={admin.description} />
          <EditableTextField label={"Address"} value={admin.address} />
          <SelectTextField
            label={"Region"}
            value={regionIndex}
            menu={regions}
          />
          <SelectTextField label={"Type"} value={typeIndex} menu={types} />
          <EditableTextField label={"Contact"} value={admin.contact} />
          <EditableTextField
            label={"Support Email"}
            value={admin.supportEmail}
          />
        </Stack>
      </Fieldset>
    </>
  );
}
