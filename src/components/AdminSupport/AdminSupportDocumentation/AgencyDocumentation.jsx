import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Divider, Typography } from "@mui/material";

export default function AgecyDocumentation() {
  const Agency = "http://govqueue-api.onrender.com/agencies/";
  const curlAgency =
    "curl --location 'http://govqueue-api.onrender.com/agencies/{agencyId}'";
  return (
    <>
      <div>
        <Typography variant="h4" gutterBottom>
          Agencies
        </Typography>

        <Typography variant="h6" gutterBottom>
          GET getAgencies
        </Typography>
        <SyntaxHighlighter language="curl" style={dark}>
          {Agency}
        </SyntaxHighlighter>

        <Typography variant="body1" gutterBottom>
          Get agency by agency id.
        </Typography>

        <SyntaxHighlighter language="curl" style={dark}>
          {curlAgency}
        </SyntaxHighlighter>

        <Divider />
      </div>
    </>
  );
}
