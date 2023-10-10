import { Box, Grid, Typography, Link, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GovQueueLogo from "./../../assets/orange-gq.png";
import { CheckScreenSize } from "../../hooks/CheckScreenSize";
import { dark } from "./../../themes/MyTheme";

export default function Footer() {
  const { width } = CheckScreenSize();
  const recipientEmail = "govqueue@gmail.com";
  const handleIconClick = () => {
    window.location.href = `mailto:${recipientEmail}`;
  };

  return (
    <Box sx={{ ...dark, paddingY: "10px", boxShadow: 3 }}>
      <Grid container alignItems="center">
        <Grid item xs={4} sm={2} md={3} align="center" order={0}>
          <img
            src={GovQueueLogo}
            alt="App logo"
            width="80"
            height="80"
            style={{
              marginRight: "10px",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          align="center"
          order={width < 600 ? 2 : 1}
        >
          <Typography
            variant="subtitle1"
            color="textaction"
            align="center"
            sx={{
              textAlign: "center",
            }}
          >
            Copyright © {new Date().getFullYear()}, GovQueue. All rights
            reserved.
          </Typography>
        </Grid>
        <Grid
          item
          xs={7}
          sm={4}
          md={3}
          align="center"
          order={width < 600 ? 1 : 2}
        >
          <Stack
            flexDirection="row"
            justifyContent="space-evenly"
            flexWrap="wrap"
            sx={{ color: "azure" }}
          >
            <Link
              href="#"
              onClick={handleIconClick}
              sx={{
                "&:hover *": {
                  color: "#FB9300",
                },
              }}
            >
              <GoogleIcon fontSize="large" style={{ color: "azure" }} />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100094291845554"
              target="_blank"
              sx={{
                "&:hover *": {
                  color: "#FB9300",
                },
              }}
            >
              <FacebookIcon fontSize="large" style={{ color: "azure" }} />
            </Link>
            <Link
              href="https://github.com/milagos09/GovQueue-Frontend"
              target="_blank"
              sx={{
                "&:hover *": {
                  color: "#FB9300",
                },
              }}
            >
              <GitHubIcon fontSize="large" style={{ color: "azure" }} />
            </Link>
            <Link
              href="https://www.youtube.com/@GovQueue"
              target="_blank"
              sx={{
                "&:hover *": {
                  color: "#FB9300",
                },
              }}
            >
              <YouTubeIcon
                fontSize="large"
                style={{
                  color: "azure",
                }}
              />
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
