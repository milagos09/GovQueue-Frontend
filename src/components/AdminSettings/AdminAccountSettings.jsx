import { Stack, FormGroup, FormControlLabel } from "@mui/material";
import Fieldset from "../Fieldset/index";
import EditableTextField from "./EditableTextField";
import SwitchTextField from "./SwitchTextField";

export default function AdminAccountSettings({ admin }) {
    return (
        <>
            <Fieldset
                title={"Settings"}
                titleStyles={{ fontSize: "1.5rem" }}
                sx={{ padding: "20px", minWidth: "350px" }}
            >
                <Stack rowGap={3} sx={{ my: "20px" }}>
                    <EditableTextField label={"Email"} value={admin.email} />
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
            {/* <Feildset title={"Settings"} titleStyles={{ fontSize: "24px", fontWeight: "bold" }}>
                <Stack
                    spacing={{ xs: 1, sm: 2 }}
                    direction="row"
                    useFlexGap
                    flexWrap="wrap"
                    justifyContent="flex-start"
                    alignItems="center"
                    sx={{ marginTop: 1 }}
                >
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
                        }}
                    ></TextField>
                </Stack>
                <Stack
                    spacing={{ xs: 1, sm: 2 }}
                    direction="row"
                    useFlexGap
                    flexWrap="wrap"
                    justifyContent="flex-start"
                    alignItems="center"
                    sx={{ marginTop: 2 }}
                >
                    <h4 style={{ marginRight: 10 }}>Messenger Plugin</h4>
                    <FormGroup>
                        <FormControlLabel control={<Switch defaultChecked />} label="Enabled" />
                    </FormGroup>
                </Stack>
                <Stack
                    spacing={{ xs: 1, sm: 2 }}
                    direction="row"
                    useFlexGap
                    flexWrap="wrap"
                    justifyContent={{ xs: "flex-start", sm: "flex-end" }}
                    alignItems="center"
                >
                    <TextField
                        variant="outlined"
                        type="string"
                        disabled="true"
                        size="small"
                        margin="none"
                        defaultValue="Application ID"
                        sx={{
                            size: "small",
                        }}
                    ></TextField>
                </Stack>
                <Stack
                    spacing={{ xs: 1, sm: 2 }}
                    direction="row"
                    useFlexGap
                    flexWrap="wrap"
                    justifyContent="flex-start"
                    alignItems="center"
                    sx={{ marginTop: 2 }}
                >
                    <h4 style={{ marginRight: 30 }}>Announcement</h4>
                    <FormGroup>
                        <FormControlLabel control={<Switch defaultChecked />} label="Enabled" />
                    </FormGroup>
                </Stack>
                <Stack
                    spacing={{ xs: 1, sm: 2 }}
                    direction="row"
                    useFlexGap
                    flexWrap="wrap"
                    justifyContent={{ xs: "flex-start", sm: "flex-end" }}
                    alignItems="center"
                >
                    <TextField
                        variant="outlined"
                        type="string"
                        disabled="true"
                        size="small"
                        margin="none"
                        defaultValue="Announcement"
                        sx={{
                            size: "small",
                        }}
                    ></TextField>
                </Stack>
                <Stack
                    spacing={{ xs: 1, sm: 2 }}
                    direction="row"
                    useFlexGap
                    flexWrap="wrap"
                    justifyContent="flex-start"
                    alignItems="center"
                    sx={{ marginTop: 2 }}
                >
                    <h4 style={{ marginRight: 60 }}>Password</h4>
                    <Button
                        variant="contained"
                        sx={{
                            ...dark,
                            "&:hover": { fontWeight: "bold", background: "black" },
                            borderRadius: "4px",
                            p: 1,
                            m: 1,
                        }}
                    >
                        Change
                    </Button>
                </Stack>
            </Feildset> */}
        </>
    );
}
