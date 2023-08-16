import Box from "@mui/material/Box";
import { glassEffect, dark } from "../../themes/MyTheme";

export default function Window({ minWidth = 100, name, number, updated }) {
    return (
        <Box sx={{ textAlign: "center" }}>
            <Box component="span">{name}</Box>
            <Box
                component="div"
                sx={{
                    fontWeight: "bold",
                    fontSize: minWidth / 33.3 + "rem",
                    padding: "20px",
                    margin: "5px",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px groove grey",
                    position: "relative",
                    // ...glassEffect,
                    borderRadius: "4px",
                    transition: ".3s",
                    minWidth: minWidth + "px",
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
