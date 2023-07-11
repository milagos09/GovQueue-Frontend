import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Window from "./Window";
import { CheckScreenSize } from "../../hooks/checkScreenSize";

export default function WindowsLayout() {
    const { width } = CheckScreenSize();
    return (
        <Box
            sx={{
                overflowX: "auto",
                padding: "20px 10px",
                marginY: "10px",
                border: "solid black 1px",
                width: "100%",
            }}
        >
            <Stack
                sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexDirection: "row",
                    gap: "20px",
                    minWidth: "fit-content",
                    alignItems: "center",
                    paddingX: "20px",
                    flexWrap: width < 600 ? "wrap" : "no-wrap",
                }}
            >
                <Window name={"Window 1"} number={33} updated={"10:30 AM"} />
                <Window name={"Window 2"} number={33} updated={"10:30 AM"} />
                <Window name={"Window 3"} number={33} updated={"10:30 AM"} />
                <Window name={"Window 4"} number={33} updated={"10:30 AM"} />
                <Window name={"Window 5"} number={33} updated={"10:30 AM"} />
            </Stack>
        </Box>
    );
}
