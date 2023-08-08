import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function AgencyDetail({ agency, logo }) {
    return (
        <Box sx={{ width: "100%", textAlign: "center" }}>
            <img src={logo} alt={agency} loading="lazy" style={{ maxWidth: "125px" }} />
            <Typography component={"h6"} sx={{ fontSize: ".75rem" }}>
                {agency}
            </Typography>
        </Box>
    );
}
