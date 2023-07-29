import Box from "@mui/material/Box";
import { light, gold, dark } from "./../../themes/MyTheme";

export default function Window({ name, number, updated }) {
    return (
        <Box sx={{ textAlign: "center" }}>
            <Box component="span">{name}</Box>
            <Box
                component="div"
                sx={{
                    fontWeight: "bold",
                    fontSize: "3rem",
                    // border: "1px solid black",
                    padding: "20px",
                    margin: "5px",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px groove grey",
                    position: "relative",
                    ...light,
                    borderRadius: "4px",
                    transition: ".3s",
                    "&:hover": {
                        ...dark,
                        color: "azure",
                        cursor: "pointer",
                    },
                }}
            >
                {number}
            </Box>
            <Box component="span" sx={{ fontSize: ".7rem" }}>
                {updated}
            </Box>
        </Box>
    );
}
