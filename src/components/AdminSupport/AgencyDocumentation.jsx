import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Divider, Typography } from "@mui/material";
import agencyData from "./example.json"; // Import your JSON data here

export default function AgencyDocumentation() {
  return (
    <>
      {agencyData.map((agency, index) => (
        <div key={index}>
          <Typography variant="h4" gutterBottom>
            {agency.title}
          </Typography>

          <Typography variant="h6" gutterBottom>
            {agency.description}
          </Typography>

          {agency.content.map((content, contentIndex) => (
            <div key={contentIndex}>
              <Typography
                variant="body1"
                gutterBottom
                style={{ marginTop: "20px" }}
              >
                Examples of {content.language} API call
              </Typography>

              <SyntaxHighlighter style={dark}>{content.req}</SyntaxHighlighter>
            </div>
          ))}

          <Divider style={{ marginTop: "20px" }}></Divider>

          <Typography
            variant="body1"
            gutterBottom
            style={{ marginTop: "20px" }}
          >
            Examples of API response
          </Typography>

          <SyntaxHighlighter language="JSON" style={dark}>
            {agency.res}
          </SyntaxHighlighter>

          <Divider />
        </div>
      ))}
    </>
  );
}
