import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Window from "./Window";
import { CheckScreenSize } from "../../hooks/CheckScreenSize";

export default function Windows({ queues, minWidth }) {
    const { width } = CheckScreenSize();

    // Sort the queues by updated_at
    const sortedQueues = [...queues].sort((a, b) => {
        const dateA = new Date(a.updated_at);
        const dateB = new Date(b.updated_at);
        return dateB - dateA; // Sort in descending order (most recent first)
    });

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
                {sortedQueues.map((q) => (
                    <Window
                        key={q.name + q.queue_id}
                        queueId={q.queue_id}
                        minWidth={minWidth}
                        name={q.name}
                        number={q.current_number}
                        updated={new Date(q.updated_at)}
                    />
                ))}
            </Stack>
        </Box>
    );
}
