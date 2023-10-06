import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import Fieldset from "../Fieldset/index";
import SelectTextField from "./SelectTextField";
import EditableTextField from "./EditableTextField";
import regionsArray from "../../../fake/location.json";
import typesArray from "../../../fake/agencyType.json";
import LoadingScreen from "../LoadingScreen";
import FetchData from "../../hooks/FetchData";
import { getSessionStorage, setSessionStorage } from "../../helpers/sessionStorage";
import UploadLogo from "./UploadLogo";
import userStore from "../../stores/userStore";

export default function AdminProfileSettings() {
    const { user, agency, setAgency } = userStore();
    const { fetchData, data, isFetching } = FetchData();
    // const user = getSessionStorage("user");
    // const agency = user.agencyDetails;
    const regionIndex = regionsArray.findIndex((r) => r === agency.region);
    const typeIndex = typesArray.findIndex((t) => t === agency.type);

    const handleSaveProfile = async (property, value) => {
        const options = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ [property]: value }),
            credentials: "include",
        };
        await fetchData(`${import.meta.env.VITE_SERVER_URL}/agencies/edit/${user.agency_id}`, options);
    };

    useEffect(() => {
        if (data) {
            setAgency(data);
            const newUser = { ...user, agencyDetails: data };
            setSessionStorage("user", newUser);
        }
    }, [data]);

    return (
        <>
            <LoadingScreen isFetching={isFetching} />
            <Fieldset
                title={"Profile"}
                titleStyles={{ fontSize: "1.5rem" }}
                sx={{ padding: "20px", minWidth: "350px" }}
            >
                <UploadLogo logo={agency.logo} agencyId={user.agency_id} handleSaveProfile={handleSaveProfile} />
                <Stack rowGap={3} sx={{ my: "20px" }}>
                    <EditableTextField
                        label={"Agency"}
                        property={"name"}
                        value={agency.name}
                        handleSave={handleSaveProfile}
                    />
                    <EditableTextField
                        label={"Description"}
                        property={"description"}
                        value={agency.description}
                        handleSave={handleSaveProfile}
                    />
                    <EditableTextField
                        label={"Address"}
                        property={"address"}
                        value={agency.address}
                        handleSave={handleSaveProfile}
                    />
                    <SelectTextField
                        label={"Region"}
                        property={"region"}
                        value={regionIndex}
                        menu={regionsArray}
                        handleSave={handleSaveProfile}
                    />
                    <SelectTextField
                        label={"Type"}
                        property={"type"}
                        value={typeIndex}
                        menu={typesArray}
                        handleSave={handleSaveProfile}
                    />
                    <EditableTextField
                        label={"Contact"}
                        property={"contact"}
                        value={agency.contact}
                        handleSave={handleSaveProfile}
                    />
                    <EditableTextField
                        label={"Support Email"}
                        property={"support_email"}
                        value={agency.support_email}
                        handleSave={handleSaveProfile}
                    />
                </Stack>
            </Fieldset>
        </>
    );
}
