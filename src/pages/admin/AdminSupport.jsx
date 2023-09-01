import AdminNavbar from "../../components/AdminNavbar";
import { Divider, ListItem, List, Typography, Grid } from "@mui/material";
import apiData from "../public/api.json";
import SyntaxHighlight from "../../components/SyntaxHighlighter";
import Feildset from "../../components/Fieldset";

export default function AdminSupport() {
  return (
    <>
      <AdminNavbar />
      <Grid container>
        <Grid item xs={12} md={8} lg={4}>
          <Feildset
            title={"Guides"}
            sx={{ textAlign: "left" }}
            titleStyles={{ fontSize: "24px", fontWeight: "bold" }}>
            <List>
              {apiData.guides.map((guide, index) => (
                <ListItem key={index} disablePadding sx={{ px: 1 }}>
                  <a href={`#guide${index}`}>{guide.name}</a>
                </ListItem>
              ))}
            </List>
          </Feildset>
        </Grid>

        <Grid item xs={12} md={12} lg={8}>
          <Feildset
            title={"GovQueue API Documentation"}
            sx={{ textAlign: "left" }}
            titleStyles={{ fontSize: "24px", fontWeight: "bold" }}>
            {apiData.guides.map((guide, index) => (
              <>
                <Typography
                  variant="h5"
                  id={`guide${index}`}
                  sx={{ py: 0, px: 0 }}
                  gutterBottom>
                  {guide.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ py: 0, px: 0 }}
                  gutterBottom>
                  {guide.description}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ py: 0, px: 0 }}
                  gutterBottom>
                  Route: `{guide.route}`
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ py: 0, px: 0 }}
                  gutterBottom>
                  Method: {""}
                  {guide.method}
                </Typography>
                <Typography variant="subtitle1" sx={{ py: 1 }}>
                  Parameters:
                </Typography>
                <ul>
                  {guide.parameters.map((parameter, paramIndex) => (
                    <li key={paramIndex}>
                      {parameter.name} - {parameter.description}
                    </li>
                  ))}
                </ul>

                <SyntaxHighlight example={apiData.guides[0].request.example} />
                <SyntaxHighlight example={apiData.guides[1].response.example} />

                <Divider />
              </>
            ))}
          </Feildset>
        </Grid>
      </Grid>
    </>
  );
}
