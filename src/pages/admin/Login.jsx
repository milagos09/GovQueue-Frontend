import Box from "@mui/material/Box";
import AdminLogin from "../../components/Login/index";
import NavBar from "../../components/Navbar";
import Grid from "@mui/material/Unstable_Grid2";

export default function Login() {
  return (
    <>
      <NavBar />
      <Box overflow="hidden">
        <Grid
          paddingY={"19.7vh"}
          rowSpacing={5}
          alignItems="center"
          container
          height="100%"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent={{ xs: "center", sm: "center" }}
        >
          <Grid
            item
            sm={8}
            xs={12}
            order={{ xs: 2, sm: 1 }}
            justifyContent={{ xs: "center", sm: "center" }}
          >
            <AdminLogin />
          </Grid>
          <Grid
            item
            sm={4}
            xs={12}
            order={{ xs: 1, sm: 2 }}
            justifyContent="center"
          >
            <Box
              display="flex"
              justifyContent="flex-start"
              width={400}
              height={400}
            >
              <img
                src="src\assets\govQ-logo.png"
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
