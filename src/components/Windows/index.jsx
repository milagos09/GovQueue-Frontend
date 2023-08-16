import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Window from "./Window";
import { CheckScreenSize } from "../../hooks/CheckScreenSize";

export default function Windows({ queue, minWidth }) {
    const { width } = CheckScreenSize();
    return (
        <Box
            sx={{
                overflowX: "auto",
                padding: "20px 15px",
                marginY: "10px",
                width: "100%",
                borderRadius: "10px",
            }}
        >
            <Stack
                sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexDirection: width < 400 ? "column" : "row",
                    gap: "20px",
                    minWidth: "fit-content",
                    alignItems: "center",
                    flexWrap: "wrap",
                }}
            >
                {queue.map((q) => (
                    <Window
                        key={q.id}
                        minWidth={minWidth}
                        name={q.name}
                        number={q.current}
                        updated={new Date(q.updatedOn).toLocaleTimeString()}
                    />
                ))}
            </Stack>
        </Box>
    );
}
