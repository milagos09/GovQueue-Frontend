import { IconButton } from "@mui/material";
import Stack from "@mui/material/Stack";
import Fieldset from "../Fieldset/index";
import Tooltip from "@mui/material/Tooltip";
import { Primary } from "./../Buttons";
import SelectTextField from "./SelectTextField";
import EditableTextField from "./EditableTextField";
import regionsArray from "./../../../fake/location.json";
import typesArray from "./../../../fake/agencyType.json";
import { useRef } from "react";
import LoadingScreen from "../LoadingScreen";
import FetchData from "../../hooks/FetchData";
import { useEffect } from "react";
import { getSessionStorage, setSessionStorage } from "./../../helpers/sessionStorage";

export default function AdminProfileSettings() {
    const { fetchData, data, isFetching } = FetchData();
    const user = getSessionStorage("user");
    const agency = user.agencyDetails;
    const fileInputRef = useRef(null);
    const regionIndex = regionsArray.findIndex((r) => r == agency.region);
    const typeIndex = typesArray.findIndex((t) => t == agency.type);

    const handleSaveProfile = async (property, value) => {
        const options = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ [property]: value }),
            credentials: "include",
        };
        await fetchData(`${import.meta.env.VITE_SERVER_URL}/agencies/edit/${user.agency_id}`, options);
    };

    // Open the select file input
    const handleFileSelect = () => {
        fileInputRef.current.click();
    };

    useEffect(() => {
        if (data) {
            const newUser = { ...user, agencyDetails: data };
            setSessionStorage("user", newUser);
        }
    }, [data]);

    // Handle the selected file here, e.g., upload it or process it
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            console.log("Selected File:", selectedFile.name);
        }
    };

    return (
        <>
            <LoadingScreen isFetching={isFetching} />
            <Fieldset
                title={"Profile"}
                titleStyles={{ fontSize: "1.5rem" }}
                sx={{ padding: "20px", minWidth: "350px" }}
            >
                <Stack alignItems="center">
                    <Tooltip title="Recommended image size is 120x120 pixels" placement="top">
                        <IconButton aria-label="image tip">
                            <img src={agency.logo} style={{ borderRadius: "50%", width: "150px" }} />
                        </IconButton>
                    </Tooltip>
                    <input type="file" ref={fileInputRef} style={{ display: "none" }} onChange={handleFileChange} />
                    <Primary onClick={handleFileSelect} value={"Upload Logo"} sx={{ m: "20px", width: "160px" }} />
                </Stack>
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
