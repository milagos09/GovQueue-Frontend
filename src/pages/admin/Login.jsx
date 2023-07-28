import Box from "@mui/material/Box";
import AdminLogin from "../../components/Login/index";
import NavBar from "../../components/Navbar";
import Grid from "@mui/material/Unstable_Grid2";
import BannerLogo from "../../assets/govQ-logo.png";
import { CheckScreenSize } from "./../../hooks/CheckScreenSize";
import AdminNavBar from "../../components/AdminNavbar";

export default function Login() {
  const { width, height } = CheckScreenSize();
  return (
    <>
      <AdminNavBar />
      <Box>
        <Grid
          alignItems="center"
          container
          height="100%"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent={{ xs: "center", sm: "center" }}
          padding="20px"
          sx={{ minHeight: width > 600 ? `${height - 172}px` : "0" }}
        >
          <Grid
            item
            sm={7}
            xs={12}
            order={{ xs: 2, sm: 1 }}
            justifyContent={{ xs: "center", sm: "center" }}
          >
            <AdminLogin />
          </Grid>
          <Grid
            item
            sm={5}
            xs={12}
            order={{ xs: 1, sm: 2 }}
            textAlign="center"
            paddingBottom={3}
          >
            <img
              src={BannerLogo}
              alt="BannerLogo"
              style={{
                width: "100%",
                aspectRatio: "1/1",
                maxHeight: width < 600 ? "250px" : "450px",
                maxWidth: width < 600 ? "250px" : "450px",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
