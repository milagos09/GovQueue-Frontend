import Box from "@mui/material/Box";

export default function Window({ name, number, updated }) {
    return (
        <Box sx={{ textAlign: "center" }}>
            <Box component="span">{name}</Box>
            <Box
                component="div"
                sx={{
                    fontWeight: "bold",
                    fontSize: "3rem",
                    border: "1px solid black",
                    padding: "10px 20px",
                    margin: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
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
