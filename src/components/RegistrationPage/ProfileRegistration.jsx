import { useState, useEffect } from "react";
import { Stack, TextField, Grid } from "@mui/material";
import Fieldset from "../Fieldset/index";
import { Primary } from "../Buttons";
import LoadingScreen from "../LoadingScreen";
import FetchData from "../../hooks/FetchData";
import RegisterUploadLogo from "./RegisterUploadLogo";
import {
  getSessionStorage,
  setSessionStorage,
} from "../../helpers/sessionStorage";

export default function ProfileRegistration() {
  const [name, setName] = useState("");
  const { fetchData, data, isFetching } = FetchData();
  const agency = getSessionStorage("agency");
  // const [address, setAddress] = useState("");

  const handleRegister = async (property, value) => {
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ [property]: value }),
      credentials: "include",
    };
    await fetchData(`${import.meta.env.VITE_SERVER_URL}/register/add`, options);
  };
  useEffect(() => {
    return (data) => {
      const newAgency = { ...agency, agencyDetails: data };
      setSessionStorage("agency", newAgency);
    };
  }, [data]);
  return (
    <>
      <LoadingScreen isFetching={isFetching} />
      <Fieldset
        className="ProfileRegistration"
        title={"Profile"}
        titleStyles={{ fontSize: "1.5rem" }}
        sx={{ padding: "20px", minWidth: "350px" }}>
        {/* <UploadLogo
          logo={agency.logo}
          agencyId={user.agency_id}
          handleSaveProfile={handleSaveProfile}
        /> */}
        {/* <RegisterUploadLogo
          logo={agency?.logo}
          onChange={(logoUrl) =>
            handleChange({ target: { name: "logo", value: logoUrl } })
          }
        /> */}

        <Stack rowGap={3} sx={{ my: "20px" }}>
          <TextField
            label={"Agency"}
            property={"name"}
            type="text"
            value={agency?.name}
            //onChange={(e) => setName(e.target.value)}
            handleSave={handleRegister}
          />
          {/* <TextField
            label={"Description"}
            property={"name"}
            value={formData.description}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <TextField
            label={"Address"}
            property={"address"}
            value={formData.address}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <TextField
            label={"Region"}
            property={"region"}
            value={formData.region}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <TextField
            label={"Type"}
            property={"type"}
            value={formData.type}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <TextField
            label={"Contact"}
            property={"contact"}
            value={formData.contact}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <TextField
            label={"Support Email"}
            property={"supportEmail"}
            value={formData.supportEmail}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <TextField
            label={"Agency Website"}
            property={"website"}
            value={formData.website}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <TextField
            label={"Email"}
            property={"email"}
            value={formData.email}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <TextField
            label={"First Name"}
            property={"firstName"}
            value={formData.firstName}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <TextField
            label={"Last Name"}
            property={"lastName"}
            value={formData.lastName}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <TextField
            label={"Password"}
            property={"password"}
            value={formData.password}
            onChange={(e) => handleChange("name", e.target.value)}
          /> */}
        </Stack>
        <Grid
          container
          justifyContent="space-evenly"
          direction={{ xs: "column", md: "row" }}
          sx={{ py: { xs: 2 } }}
          columnSpacing={2}>
          <Primary value={"Register"} onClick={handleRegister} />
        </Grid>
      </Fieldset>
    </>
  );
}
