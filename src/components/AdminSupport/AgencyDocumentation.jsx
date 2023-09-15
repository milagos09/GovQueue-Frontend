import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Divider, Typography, Select, MenuItem } from "@mui/material";
import agencyData from "./example.json"; // Import your JSON data here
import { useState } from "react";

export default function AgencyDocumentation() {
  // Initialize a state to track selected language for each agency
  const [selectedLanguages, setSelectedLanguages] = useState(
    agencyData.map(() => "curl")
  );

  // Handler to update the selected language for a specific agency
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
            {agency.name}
          </Typography>
          <Typography gutterBottom>{agency.description}</Typography>
          <SyntaxHighlighter style={dark} wrapLongLines={true}>
            {agency.raw}
          </SyntaxHighlighter>
          <Typography variant="h5" gutterBottom>
            Example:
          </Typography>
          {/* Select dropdown for language */}
          <Typography variant="h6" gutterBottom>
            Request:
          </Typography>
          <Select
            value={selectedLanguages[index]} // Use the selected language for this agency
            onChange={(e) => handleLanguageChange(index, e.target.value)}
          >
            {agency.content.map((content, contentIndex) => (
              <MenuItem key={contentIndex} value={content.language}>
                {content.language}
              </MenuItem>
            ))}
          </Select>
          {/* Syntax Highlighter */}
          {agency.content.map((content, contentIndex) => {
            if (content.language === selectedLanguages[index]) {
              return (
                <div key={contentIndex}>
                  <SyntaxHighlighter style={dark} wrapLongLines={true}>
                    {content.req}
                  </SyntaxHighlighter>
                  {/* Add Example API Response section */}
                  <Typography variant="h6" gutterBottom>
                    Response:
                  </Typography>
                  <SyntaxHighlighter style={dark} wrapLongLines={true}>
                    {agency.res}
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
