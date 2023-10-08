import { useState, useEffect } from "react";
import { Stack, TextField, Grid } from "@mui/material";
import Fieldset from "../Fieldset/index";
import { Primary } from "../Buttons";
import regionsArray from "../../../fake/location.json";
import typesArray from "../../../fake/agencyType.json";
import LoadingScreen from "../LoadingScreen";
import FetchData from "../../hooks/FetchData";
import RegisterUploadLogo from "./RegisterUploadLogo";
import {
  getSessionStorage,
  setSessionStorage,
} from "../../helpers/sessionStorage";
import userStore from "../../stores/userStore";

export default function VisitorsProfileRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    region: "",
    website: "",
    contact: "",
    supportEmail: "",
    logo: "",
    description: "",
    type: "",
    announcement: "",
    messengerId: "",
  });
  const { setAgency } = userStore();
  const { fetchData, data, isFetching } = FetchData();
  // const user = getSessionStorage("user");
  const agency = getSessionStorage("agency");
  // const regionIndex = regionsArray.findIndex((r) => r === agency?.region);
  // const typeIndex = typesArray.findIndex((t) => t === agency?.type);

  const handleSaveProfile = async (property, value) => {
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData, { [property]: value }),
      credentials: "include",
    };
    console.log(formData);
    await fetchData(
      fetchData`${import.meta.env.VITE_SERVER_URL}/register/add/${
        agency.result[0]
      }`,
      options
    );
  };

  const handleChange = (property, value) => {
    setFormData({ ...formData, [property]: value });
  };

  useEffect(() => {
    if (data) {
      setAgency(data, { loggedIn: false });
      const newUser = { ...agency, agencyDetails: data };
      setSessionStorage("agency", newUser);
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
        <RegisterUploadLogo
          logo={agency?.logo}
          // agencyId={user?.agency_id}
          handlesave={handleSaveProfile}
        />

        <Stack rowGap={3} sx={{ my: "20px" }}>
          <TextField
            label={"Agency"}
            property={"name"}
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <TextField
            label={"Description"}
            property={"name"}
            // value={agency.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <TextField
            label={"Address"}
            property={"address"}
            // value={agency.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <TextField
            label={"Region"}
            property={"region"}
            // value={regionIndex}
            menu={regionsArray}
            // handleSave={handleSaveProfile}
          />
          <TextField
            label={"Type"}
            property={"type"}
            // value={typeIndex}
            menu={typesArray}
            handleSave={handleSaveProfile}
          />
          <TextField
            label={"Contact"}
            property={"contact"}
            // value={agency.name}
            // handleSave={handleSaveProfile}
          />
          <TextField
            label={"Support Email"}
            property={"supportEmail"}
            // value={agency.name}
            // handleSave={handleSaveProfile}
          />
          <TextField
            label={"Agency Website"}
            property={"website"}
            // value={agency.name}
            handleSave={handleSaveProfile}
          />
          <TextField
            label={"Announcement"}
            property={"announcement"}
            // value={agency.name}
            // handleSave={handleSaveProfile}
          />
          <TextField
            label={"Messenger ID"}
            property={"messengerId"}
            // value={agency.name}
            // handleSave={handleSaveProfile}
          />
        </Stack>
        <Grid
          container
          justifyContent="space-evenly"
          direction={{ xs: "column", md: "row" }}
          sx={{ py: { xs: 2 } }}
          columnSpacing={2}>
          <Primary value={"Register"} onClick={setFormData} />
        </Grid>
      </Fieldset>
    </>
  );
}
