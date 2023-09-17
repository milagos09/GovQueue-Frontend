import { useState } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import { Divider, List, Grid } from "@mui/material";
import Feildset from "../../components/Fieldset";
import AgecyDocumentation from "../../components/AdminSupport/AgencyDocumentation";
import agencyData from "../../components/AdminSupport/Admin.json";

export default function AdminSupport() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  });

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

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#1b2023",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Scroll Back to Top
        </button>
      )}
    </>
  );
}
