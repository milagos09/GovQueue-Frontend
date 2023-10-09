import { useState, useEffect } from "react";
import { Divider, List, Grid, ListItem, Box } from "@mui/material";
import Feildset from "../../components/Fieldset";
import AgecyDocumentation from "../../components/AdminSupport/AgencyDocumentation";
import agencyData from "../../components/AdminSupport/Admin.json";
import FitToScreen from "../../components/FitToScreen";

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
            <a href={`#agency-${agencyIndex}`} onClick={() => scrollToSection(`agency-${agencyIndex}`)}>
                <h2>{agency.title}</h2>
            </a>

            {agency.titleDetails.map((detail, detailIndex) => (
                <div key={detailIndex} style={{ marginTop: "6px" }}>
                    <a
                        href={`#agency-${agencyIndex}-detail-${detailIndex}`}
                        onClick={() => scrollToSection(`agency-${agencyIndex}-detail-${detailIndex}`)}
                    >
                        <ListItem>{detail.name}</ListItem>

                        <p></p>
                    </a>
                </div>
            ))}
        </div>
    ));

    return (
        <FitToScreen reduce={162}>
            <Box sx={{ display: "flex" }}>
                <Feildset
                    title={"Guides"}
                    sx={{ textAlign: "left", position: "fixed", width: "230px", zIndex: "0" }}
                    titleStyles={{ fontSize: "24px", fontWeight: "bold" }}
                >
                    <List>{tableOfContents}</List>
                </Feildset>

                <Feildset
                    title={"GovQueue API Documentation"}
                    sx={{ textAlign: "left", marginLeft: "300px" }}
                    titleStyles={{ fontSize: "24px", fontWeight: "bold" }}
                >
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
                    <Divider />
                    <AgecyDocumentation />
                </Feildset>
            </Box>
        </FitToScreen>
    );
}
