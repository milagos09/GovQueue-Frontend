import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { Primary } from "../Buttons";

export default function RegisterNavLink({ pages }) {
  return (
    <Box
      sx={{
        justifyContent: "space-evenly",
        flexGrow: 0,
        display: { xs: "flex" },
        "&:hover": {
          cursor: "pointer",
          textDecoration: "none",
        },
      }}>
      {pages.map((page) => (
        <Link
          key={page.nav}
          to={page.link}
          onClick={page.onClick}
          style={{ textDecoration: "none", color: "inherit" }}>
          <Primary
            value={"Sign Up"}
            // type={"submit"}
            sx={{ width: "120px" }}>
            {page.nav}
          </Primary>
        </Link>
      ))}
    </Box>
  );
}
