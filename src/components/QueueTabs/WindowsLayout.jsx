import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Window from "./Window";
import { CheckScreenSize } from "../../hooks/CheckScreenSize";

export default function WindowsLayout({ queue }) {
    const { width } = CheckScreenSize();
    return (
        <Box
            sx={{
                overflowX: "auto",
                padding: "20px 10px",
                marginY: "10px",
                width: "100%",
                boxShadow: 3,
                borderRadius: "10px",
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
                {/* <Window name={"Window 1"} number={33} updated={"10:30 AM"} />
                <Window name={"Window 2"} number={33} updated={"10:30 AM"} />
                <Window name={"Window 3"} number={33} updated={"10:30 AM"} />
                <Window name={"Window 4"} number={33} updated={"10:30 AM"} />
                <Window name={"Window 5"} number={33} updated={"10:30 AM"} /> */}
                {queue.map((q) => (
                    <Window
                        key={q.id}
                        name={q.name}
                        number={q.current}
                        updated={new Date(q.updatedOn).toLocaleTimeString()}
                    />
                ))}
            </Stack>
        </Box>
    );
}
