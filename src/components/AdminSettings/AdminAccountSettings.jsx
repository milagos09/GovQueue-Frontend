import { Stack } from "@mui/material";
import Fieldset from "../Fieldset/index";
import EditableTextField from "./EditableTextField";
import SwitchTextField from "./SwitchTextField";
import { getSessionStorage, setSessionStorage } from "../../helpers/sessionStorage";
import LoadingScreen from "./../LoadingScreen";
import FetchData from "./../../hooks/FetchData";
import { useEffect, useState } from "react";
import { Primary } from "./../Buttons";
import { socket } from "./../../helpers/socket";
import ChangePassword from "./ChangePassword";

export default function AdminAccountSettings() {
    const [enableChangePassword, setEnableChangePassword] = useState(false);
    const { fetchData, data, isFetching } = FetchData();
    const user = getSessionStorage("user");
    const agency = user.agencyDetails;

    const handleSaveProfile = async (property, value) => {
        const options = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ [property]: value }),
        };
        await fetchData(`https://govqueue-api.onrender.com/agencies/edit/${user.agency_id}`, options);
    };

    const handleSaveUser = async (property, value) => {
        const options = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ [property]: value }),
        };
        await fetchData(`https://govqueue-api.onrender.com/users/edit/${user.user_id}`, options);
    };

    useEffect(() => {
        if (data) {
            if (data.user_id) {
                setSessionStorage("user", data);
            } else {
                const newUser = { ...user, agencyDetails: data };
                setSessionStorage("user", newUser);
            }
        }
    }, [data]);

    return (
        <>
            <LoadingScreen isFetching={isFetching} />
            <Fieldset
                title={"Settings"}
                titleStyles={{ fontSize: "1.5rem" }}
                sx={{ padding: "20px", minWidth: "350px" }}
            >
                <Stack rowGap={3} sx={{ my: "20px" }}>
                    <EditableTextField label={"Email"} property={"email"} value={user.email} enabled={false} />
                    <EditableTextField
                        label={"First Name"}
                        property={"first_name"}
                        value={user.first_name}
                        handleSave={handleSaveUser}
                    />
                    <EditableTextField
                        label={"Last Name"}
                        property={"last_name"}
                        value={user.last_name}
                        handleSave={handleSaveUser}
                    />
                    <SwitchTextField
                        label={"Messenger Plugin:"}
                        property={"messenger_id"}
                        value={agency.messenger_id ? agency.messenger_id : ""}
                        handleSave={handleSaveProfile}
                        enabled={!!agency.messenger_id}
                    />
                    <SwitchTextField
                        label={"Announcement:"}
                        property={"announcement"}
                        value={agency.announcement ? agency.announcement : ""}
                        handleSave={handleSaveProfile}
                        enabled={!!agency.announcement}
                    />
                    <ChangePassword user={user} />
                </Stack>
            </Fieldset>
        </>
    );
}
