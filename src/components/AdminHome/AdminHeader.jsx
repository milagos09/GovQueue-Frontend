import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { dark } from "../../themes/MyTheme";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

export default function AdminHeader() {
  return (
    <>
      <Container maxWidth="lg">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="row"
          sx={{ padding: 1 }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="center"
            alignItems="center"
            spacing={1}
            sx={{ py: 2 }}>
            <Card raised sx={{ width: 150, height: 150 }}>
              <CardMedia></CardMedia>
            </Card>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                alignItems: "center",
                width: "100%",
              }}>
              Bureau of Internal Revenue Region VI
            </Typography>
            <Button
              variant="contained"
              // onClick={onClick}
              sx={{
                ...dark,
                "&:hover": { fontWeight: "bold", background: "black" },
                borderRadius: "4px",
              }}>
              Add
            </Button>
            <Button
              variant="contained"
              // onClick={onClick}
              sx={{
                ...dark,
                "&:hover": { fontWeight: "bold", background: "black" },
                borderRadius: "4px",
              }}>
              Remove
            </Button>
          </Stack>
        </Grid>
      </Container>
    </>
  );
}
