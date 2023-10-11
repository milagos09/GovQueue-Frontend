import { useState, useEffect } from "react";
import { Divider, List, ListItem, Box, Grid } from "@mui/material";
import Fieldset from "../../components/Fieldset";
import AgencyDocumentation from "../../components/AdminSupport/AgencyDocumentation";
import agencyData from "../../components/AdminSupport/Admin.json";
import FitToScreen from "../../components/FitToScreen";
import { CheckScreenSize } from "../../hooks/CheckScreenSize";

export default function AdminSupport() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const { height } = CheckScreenSize();
  const maxHeight = height - 220;
  const minHeight = 550;

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

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const tableOfContents = agencyData.map((agency, agencyIndex) => (
    <div key={agencyIndex + agency.title}>
      <a
        href={`#agency-${agencyIndex}`}
        onClick={() => scrollToSection(`agency-${agencyIndex}`)}>
        <h3>{agency.title}</h3>
      </a>

      {agency.titleDetails.map((detail, detailIndex) => (
        <div key={detailIndex} style={{ marginTop: "6px" }}>
          <a
            href={`#agency-${agencyIndex}-detail-${detailIndex}`}
            onClick={() =>
              scrollToSection(`agency-${agencyIndex}-detail-${detailIndex}`)
            }>
            <ListItem>{detail.name}</ListItem>

            <p></p>
          </a>
        </div>
      ))}
    </div>
  ));

  return (
    <>
      {/* <FitToScreen> */}
      {/* <Box sx={{ display: "flex", overflow: "auto" }}>
        <Box> */}
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={3}>
          <Fieldset
            title={"Guides"}
            sx={{ textAlign: "left" }}
            titleStyles={{ fontSize: "24px", fontWeight: "bold" }}>
            <List>{tableOfContents}</List>
          </Fieldset>
        </Grid>
        {/* </Box> */}
        {/* <Box> */}
        <Grid item xs={12} sm={12} md={12} lg={9}>
          <Fieldset
            title={"GovQueue API Documentation"}
            sx={{ textAlign: "left" }}
            titleStyles={{ fontSize: "24px", fontWeight: "bold" }}>
            {showScrollButton && (
              <button
                onClick={scrollToTop}
                style={{
                  position: "fixed",
                  bottom: "120px",
                  right: "20px",
                  backgroundColor: "#1b2023",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  padding: "10px 20px",
                  cursor: "pointer",
                }}>
                Scroll Back to Top
              </button>
            )}

            <AgencyDocumentation />
            <Divider />
          </Fieldset>
          {/* </Box> */}
          {/* </Box> */}
          {/* </FitToScreen> */}
        </Grid>
      </Grid>
    </>
  );
}
