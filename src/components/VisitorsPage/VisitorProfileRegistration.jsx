import { useEffect } from "react";
import { Stack, TextField, Tooltip, IconButton } from "@mui/material";
import Fieldset from "../Fieldset/index";
// import SelectTextField from "../AdminSettings/SelectTextField";
// import EditableTextField from "../AdminSettings/EditableTextField";
import { Primary } from "../Buttons";
import regionsArray from "../../../fake/location.json";
import typesArray from "../../../fake/agencyType.json";
import LoadingScreen from "../LoadingScreen";
import FetchData from "../../hooks/FetchData";
import {
  getSessionStorage,
  setSessionStorage,
} from "../../helpers/sessionStorage";
import RegisterUploadLogo from "./RegisterUploadLogo";

export default function VisitorsProfileRegistration() {
  const { fetchData, data, isFetching } = FetchData();
  const user = getSessionStorage("user");
  const agency = user.agencyDetails;
  const regionIndex = regionsArray.findIndex((r) => r === agency.region);
  const typeIndex = typesArray.findIndex((t) => t === agency.type);

  const handleSaveProfile = async (body) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      credentials: "include",
    };
    await fetchData(`${import.meta.env.VITE_SERVER_URL}/register/`, options);
  };

  useEffect(() => {
    if (data) {
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
        sx={{ padding: "20px", minWidth: "350px" }}>
        {/* <UploadLogo
          logo={agency.logo}
          agencyId={user.agency_id}
          handleSaveProfile={handleSaveProfile}
        /> */}
        <Stack alignItems="center">
          <Tooltip
            title="Recommended image size is 120x120 pixels and a file size of not more than 50MB."
            placement="top">
            <IconButton aria-label="image tip">
              <img
                // src={currentLogo}
                style={{ borderRadius: "50%", width: "120px" }}
                alt="Agency Logo"
              />
            </IconButton>
          </Tooltip>
          <input
            type="file"
            // ref={fileInputRef}
            style={{ display: "none" }}
            // onChange={handleFileChange}
          />
          <Primary
            // onClick={handleFileSelect}
            value={"Upload Logo"}
            sx={{ m: "20px", width: "160px" }}
          />
        </Stack>
        <Stack rowGap={3} sx={{ my: "20px" }}>
          <TextField
            label={"Agency"}
            property={"name"}
            // value={agency.name}
            // handleSave={handleSaveProfile}
          />
          <TextField
            label={"Description"}
            property={"name"}
            // value={agency.name}
            // handleSave={handleSaveProfile}
          />
          <TextField
            label={"Address"}
            property={"name"}
            // value={agency.name}
            // handleSave={handleSaveProfile}
          />
          <TextField
            label={"Region"}
            property={"name"}
            value={regionIndex}
            menu={regionsArray}
            // handleSave={handleSaveProfile}
          />
          <TextField
            label={"Type"}
            property={"type"}
            value={typeIndex}
            menu={typesArray}
            // handleSave={handleSaveProfile}
          />
          <TextField
            label={"Contact"}
            property={"name"}
            // value={agency.name}
            // handleSave={handleSaveProfile}
          />
          <TextField
            label={"Support Email"}
            property={"name"}
            // value={agency.name}
            // handleSave={handleSaveProfile}
          />
          <TextField
            label={"Agency Website"}
            property={"name"}
            // value={agency.name}
            // handleSave={handleSaveProfile}
          />
          {/* <EditableTextField
            label={"Description"}
            property={"description"}
            // value={agency.description}
            // handleSave={handleSaveProfile}
          />
          <EditableTextField
            label={"Address"}
            property={"address"}
            // value={agency.address}
            // handleSave={handleSaveProfile}
          />
          <SelectTextField
            label={"Region"}
            property={"region"}
            // value={regionIndex}
            // menu={regionsArray}
            // handleSave={handleSaveProfile}
          />
          <SelectTextField
            label={"Type"}
            property={"type"}
            // value={typeIndex}
            // menu={typesArray}
            // handleSave={handleSaveProfile}
          />
          <EditableTextField
            label={"Contact"}
            property={"contact"}
            // value={agency.contact}
            // handleSave={handleSaveProfile}
          />
          <EditableTextField
            label={"Support Email"}
            property={"support_email"}
            // value={agency.support_email}
            // handleSave={handleSaveProfile}
          /> */}
        </Stack>
      </Fieldset>
    </>
  );
}
