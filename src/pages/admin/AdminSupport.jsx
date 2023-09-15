import AdminNavbar from "../../components/AdminNavbar";
import { Divider, List, Grid } from "@mui/material";
import Feildset from "../../components/Fieldset";
import AgecyDocumentation from "../../components/AdminSupport/AgencyDocumentation";

export default function AdminSupport() {
  return (
    <>
      <AdminNavbar />
      <Grid container>
        <Grid item xs={12} md={8} lg={4}>
          <Feildset
            title={"Guides"}
            sx={{ textAlign: "left" }}
            titleStyles={{ fontSize: "24px", fontWeight: "bold" }}
          >
            <List></List>
          </Feildset>
        </Grid>

        <Grid item xs={12} md={12} lg={8}>
          <Feildset
            title={"GovQueue API Documentation"}
            sx={{ textAlign: "left" }}
            titleStyles={{ fontSize: "24px", fontWeight: "bold" }}
          >
            <Divider />
            <AgecyDocumentation></AgecyDocumentation>
          </Feildset>
        </Grid>
      </Grid>
    </>
  );
}
