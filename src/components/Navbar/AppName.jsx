import Typography from "@mui/material/Typography";

export default function AppName() {
  return (
    <>
      <Typography
        variant="h6"
        component="a"
        href="/"
        sx={{
          color: "azure",
          flexGrow: { xs: 10 },
          display: { sm: "flex" },

          fontWeight: 700,
          textDecoration: "none",
        }}>
        GovQueue
      </Typography>
    </>
  );
}
