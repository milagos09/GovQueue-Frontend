import Typography from "@mui/material/Typography";

export default function AppName() {
  return (
    <>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
          fontFamily: "Garamond",
        }}
      >
        GovQueue
      </Typography>

      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontFamily: "Garamond",
          letterSpacing: ".25rem",
          fontWeight: 700,
          color: "inherit",
          textDecoration: "none",
        }}
      >
        GovQueue
      </Typography>
    </>
  );
}