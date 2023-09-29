import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Divider, Typography, Select, MenuItem } from "@mui/material";
import agencyData from "./Admin.json";
import { useState } from "react";

export default function AgencyDocumentation() {
    const initialSelectedLanguages = agencyData.map((agency) => agency.titleDetails.map(() => "curl"));

    const [selectedLanguages, setSelectedLanguages] = useState(initialSelectedLanguages);

    const [responseContent, setResponseContent] = useState(agencyData.map(() => agencyData[0].titleDetails[0].res));

    const handleLanguageChange = (agencyIndex, detailIndex, language) => {
        const newSelectedLanguages = [...selectedLanguages];
        newSelectedLanguages[agencyIndex] = [...newSelectedLanguages[agencyIndex]];
        newSelectedLanguages[agencyIndex][detailIndex] = language;
        setSelectedLanguages(newSelectedLanguages);

        const newResponseContent = [...responseContent];
        newResponseContent[agencyIndex] =
            agencyData[agencyIndex].titleDetails[detailIndex].content.find((content) => content.language === language)
                ?.res || "";
        setResponseContent(newResponseContent);
    };

    return (
        <>
            {agencyData.map((agency, agencyIndex) => (
                <div key={agencyIndex} id={`agency-${agencyIndex}`}>
                    <Typography variant="h5" gutterBottom>
                        {agency.title}
                    </Typography>

                    {agency.titleDetails.map((detail, detailIndex) => (
                        <div key={detailIndex} id={`agency-${agencyIndex}-detail-${detailIndex}`}>
                            <Typography variant="h6" gutterBottom>
                                <span
                                    style={{
                                        color: detail.method === "GET" ? "green" : "orange",
                                    }}
                                >
                                    {detail.method}
                                </span>
                                {" " + detail.name}
                            </Typography>
                            <Typography gutterBottom>{detail.description}</Typography>
                            <SyntaxHighlighter style={a11yDark} wrapLongLines={true}>
                                {detail.raw}
                            </SyntaxHighlighter>

                            <Typography gutterBottom>Request:</Typography>
                            <Select
                                size="small"
                                value={selectedLanguages[agencyIndex][detailIndex]}
                                onChange={(e) => handleLanguageChange(agencyIndex, detailIndex, e.target.value)}
                            >
                                {detail.content.map((content, contentIndex) => (
                                    <MenuItem key={contentIndex} value={content.language}>
                                        {content.language}
                                    </MenuItem>
                                ))}
                            </Select>
                            {detail.content.map((content, contentIndex) => {
                                if (content.language === selectedLanguages[agencyIndex][detailIndex]) {
                                    return (
                                        <div key={contentIndex}>
                                            <SyntaxHighlighter
                                                style={a11yDark}
                                                wrapLongLines={true}
                                                language={
                                                    content.language === "NodeJs" ? "javascript" : content.language
                                                }
                                            >
                                                {content.req}
                                            </SyntaxHighlighter>

                                            <Typography gutterBottom>Response:</Typography>

                                            <SyntaxHighlighter style={a11yDark} wrapLongLines={true} language="json">
                                                {detail.res}
                                            </SyntaxHighlighter>
                                            <Divider style={{ marginBottom: "30px", marginTop: "30px" }} />
                                        </div>
                                    );
                                }
                                return null;
                            })}
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
}
