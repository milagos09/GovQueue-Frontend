import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Divider, Typography, Select, MenuItem } from "@mui/material";
import agencyData from "./example.json";
import { useState } from "react";

export default function AgencyDocumentation() {
  const [selectedLanguages, setSelectedLanguages] = useState(
    agencyData.map(() => "curl")
  );

  const handleLanguageChange = (index, language) => {
    const newSelectedLanguages = [...selectedLanguages];
    newSelectedLanguages[index] = language;
    setSelectedLanguages(newSelectedLanguages);
  };

  return (
    <>
      {agencyData.map((agency, index) => (
        <div key={index}>
          <Typography variant="h4" gutterBottom>
            {agency.title}
          </Typography>

          <Typography variant="h5" gutterBottom>
            <span style={{ color: "green" }}>{agency.method}</span>{" "}
            {agency.titleDetails.name}
          </Typography>
          <Typography gutterBottom>
            {agency.titleDetails.description}
          </Typography>
          <SyntaxHighlighter style={a11yDark} wrapLongLines={true}>
            {agency.titleDetails.raw}
          </SyntaxHighlighter>
          <Typography variant="h5" gutterBottom>
            Example:
          </Typography>

          <Typography variant="h6" gutterBottom>
            Request:
          </Typography>
          <Select
            value={selectedLanguages[index]}
            onChange={(e) => handleLanguageChange(index, e.target.value)}
          >
            {agency.titleDetails.content.map((content, contentIndex) => (
              <MenuItem key={contentIndex} value={content.language}>
                {content.language}
              </MenuItem>
            ))}
          </Select>
          {agency.titleDetails.content.map((content, contentIndex) => {
            if (content.language === selectedLanguages[index]) {
              return (
                <div key={contentIndex}>
                  <SyntaxHighlighter
                    style={a11yDark}
                    wrapLongLines={true}
                    language={selectedLanguages[index]}
                  >
                    {content.req}
                  </SyntaxHighlighter>

                  <Typography variant="h6" gutterBottom>
                    Response:
                  </Typography>

                  <SyntaxHighlighter
                    style={a11yDark}
                    wrapLongLines={true}
                    language="json"
                  >
                    {agency.titleDetails.res}
                  </SyntaxHighlighter>
                  <Divider />
                </div>
              );
            }
            return null;
          })}
        </div>
      ))}
    </>
  );
}
