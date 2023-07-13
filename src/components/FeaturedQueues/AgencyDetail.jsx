import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function AgencyDetail({ agency, logo }) {
    agency = "Bureau of Internal Revenue Region VI";
    logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQtoYs8uhF2_uICc1SeAs0d2MgqCe301F9-g&usqp=CAU";
    return (
        <Box sx={{ width: "100%", textAlign: "center" }}>
            <img src={logo} alt={"BIR"} loading="lazy" style={{ maxWidth: "125px" }} />
            <Typography component={"h6"} sx={{ fontSize: ".75rem" }}>
                {agency}
            </Typography>
        </Box>
    );
}
