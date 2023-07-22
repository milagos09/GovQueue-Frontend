import NavBar from "../../components/Navbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function About() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} md={12} lg={12} sx={{ px: 1, py: 2 }}>
          <Card
            variant="outlined"
            sx={{ minWidth: 275, height: "100%", border: "none" }}
          >
            <CardContent sx={{ px: 0 }}>
              <Typography sx={{ fontSize: 14, py: 0, px: 5 }} gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                tincidunt magna eu risus interdum, et scelerisque leo
                condimentum. Nam rhoncus ullamcorper ligula sollicitudin
                condimentum. Praesent quis est vitae ipsum maximus dapibus ut
                eget sapien. Mauris rutrum suscipit orci, eu tincidunt sapien
                pellentesque ac. Morbi auctor dolor nunc, finibus fermentum nunc
                tincidunt in. Ut tempor congue massa, non suscipit sapien mollis
                nec. Aenean dapibus consequat est a lobortis. Phasellus sed
                ipsum vitae ex eleifend porta. Phasellus justo orci, imperdiet
                quis nisl eget, interdum congue magna. Morbi bibendum nulla vel
                ligula mollis iaculis. Fusce ac massa porta, cursus leo eu,
                rhoncus enim. Donec venenatis nunc ac pellentesque hendrerit.
                Sed ullamcorper est eget dolor sagittis, laoreet pharetra sapien
                hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Curabitur condimentum erat in fringilla efficitur. Proin
                blandit feugiat lacus, eu sagittis nibh vulputate vel.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Box>

      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 28,
          py: 0,
          px: 5,
        }}
        gutterBottom
      >
        Donate for our cause
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} md={12} lg={12} sx={{ px: 1, py: 0 }}>
          <Card
            variant="outlined"
            sx={{ minWidth: 275, height: "100%", border: "none" }}
          >
            <CardContent sx={{ px: 0 }}>
              <Typography sx={{ fontSize: 32, py: 0, px: 5 }} gutterBottom>
                App by the Numbers
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1, py: 2, px: 3 }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid xs={3}>
            <Item>Number of Site Visits</Item>
          </Grid>
          <Grid xs={4}>
            <Item>Number of Agencies Participating</Item>
          </Grid>
          <Grid xs={3}>
            <Item>Another Site Statistic</Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
