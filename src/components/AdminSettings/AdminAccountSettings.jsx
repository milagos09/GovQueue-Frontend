import { Stack } from "@mui/material";
import Fieldset from "../Fieldset/index";
import EditableTextField from "./EditableTextField";
import SwitchTextField from "./SwitchTextField";

export default function AdminAccountSettings({ admin }) {
  return (
    <>
      <Fieldset
        title={"Settings"}
        titleStyles={{ fontSize: "1.5rem" }}
        sx={{ padding: "20px", minWidth: "350px" }}>
        <Stack rowGap={3} sx={{ my: "20px" }}>
          <EditableTextField label={""} value={admin.email} />
          <SwitchTextField
            label={"Messenger Plugin:"}
            value={admin.messengerId ? admin.messengerId : "Disabled"}
            enabled={!!admin.messengerId}
          />
          <SwitchTextField
            label={"Announcement:"}
            value={admin.announcement ? admin.announcement : "Disabled"}
            enabled={!!admin.announcement}
          />
        </Stack>
      </Fieldset>
    </>
  );
}
