import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark, docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Divider, Typography } from "@mui/material";
import agencyExample from "./JSON/getAgencyNodeJS.json";

export default function AgecyDocumentation() {
  const agencyIdexample = JSON.stringify(agencyExample, null, 2);
  return (
    <>
      <div>
        <Typography variant="h4" gutterBottom>
          Agencies
        </Typography>

        <Typography variant="h6" gutterBottom>
          How to make an API call
        </Typography>

        <SyntaxHighlighter style={dark}>
          {"http://govqueue-api.onrender.com/agencies/{agencyId}"}
        </SyntaxHighlighter>

        <Typography variant="body1" gutterBottom style={{ marginTop: "20px" }}>
          Examples of API call
        </Typography>

        <SyntaxHighlighter language="curl" style={dark}>
          {`cURL
  curl --location 'http://govqueue-api.onrender.com/agencies/13'`}
        </SyntaxHighlighter>
        <Divider style={{ marginTop: "20px" }}></Divider>
        <SyntaxHighlighter language="curl" style={dark}>
          {`nodeJS
  const http = require('follow-redirects').http;
  const fs = require('fs');
  
  let options = {
    'method': 'GET',
    'hostname': 'govqueue-api.onrender.com',
    'path': '/agencies/',
    'headers': {
    },
    'maxRedirects': 20
  };
  
  const req = http.request(options, (res) => {
    let chunks = [];
  
    res.on("data", (chunk) => {
      chunks.push(chunk);
    });
  
    res.on("end", (chunk) => {
      let body = Buffer.concat(chunks);
      console.log(body.toString());
    });
  
    res.on("error", (error) => {
      console.error(error);
    });
  });
  
  req.end();`}
        </SyntaxHighlighter>
        <Typography variant="body1" gutterBottom style={{ marginTop: "20px" }}>
          Examples of API response
        </Typography>
        <SyntaxHighlighter language="JSON" style={dark}>
          {agencyIdexample}
        </SyntaxHighlighter>
        <Divider />
      </div>
    </>
  );
}
