import AdminNavbar from "../../components/AdminNavbar";
import { Divider, List, Grid } from "@mui/material";
import Feildset from "../../components/Fieldset";
import AgecyDocumentation from "../../components/AdminSupport/AgencyDocumentation";
import agencyData from "../../components/AdminSupport/Admin.json";

export default function AdminSupport() {
  function scrollToSection(id) {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  const tableOfContents = agencyData.map((agency, agencyIndex) => (
    <div key={agencyIndex}>
      <a
        href={`#agency-${agencyIndex}`}
        onClick={() => scrollToSection(`agency-${agencyIndex}`)}
      >
        <h2>{agency.title}</h2>
      </a>

      {agency.titleDetails.map((detail, detailIndex) => (
        <div key={detailIndex}>
          <a
            href={`#agency-${agencyIndex}`}
            onClick={() => scrollToSection(`agency-${agencyIndex}`)}
          >
            <p>{detail.name}</p>
          </a>
        </div>
      ))}
    </div>
  ));

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
            <List>{tableOfContents}</List>
          </Feildset>
        </Grid>

        <Grid item xs={12} md={12} lg={8}>
          <Feildset
            title={"GovQueue API Documentation"}
            sx={{ textAlign: "left" }}
            titleStyles={{ fontSize: "24px", fontWeight: "bold" }}
          >
            <Divider />
            <AgecyDocumentation />
          </Feildset>
        </Grid>
      </Grid>
    </>
  );
}
