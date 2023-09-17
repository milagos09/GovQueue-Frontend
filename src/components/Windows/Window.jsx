import Box from "@mui/material/Box";
import { dark } from "../../themes/MyTheme";
import ShowLogs from "../QueueActions/ShowLogs";
import { useState, useEffect } from "react";
import calculateTimeDifference from "../../helpers/calculateTimeDifference";
import { socket } from "./../../helpers/socket";
import beep from "./../../assets/sounds/beep.wav";

export default function Window({ queueId, minWidth = 100, name, number, updated }) {
    const [openLogs, setOpenLogs] = useState(false);
    const [currentNumber, setNumber] = useState(number);
    const [currentUpdated, setUpdated] = useState(updated);

    useEffect(() => {
        const updateLogsHandler = (log) => {
            if (log.queue_id === queueId) {
                const sound = new Audio(beep);
                setNumber(log.current_number);
                setUpdated(log.updated_at);

                sound.play();
            }
        };

        socket.on("addLog", updateLogsHandler);

        // Cleanup the socket listener when the component unmounts
        return () => {
            socket.off("newLog");
        };
    }, []);

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
                    boxShadow: "5",
                    position: "relative",
                    borderRadius: "4px",
                    transition: ".3s",
                    minWidth: minWidth + "px",
                    "&:hover": {
                        ...dark,
                        color: "azure",
                        cursor: "pointer",
                    },
                }}
                onClick={() => {
                    setOpenLogs(true);
                }}
            >
                {currentNumber}
            </Box>
            <Box component="span" sx={{ fontSize: ".7rem" }}>
                {calculateTimeDifference(currentUpdated)}
            </Box>
            <ShowLogs queueId={queueId} openLogs={openLogs} setOpenLogs={setOpenLogs} />
        </Box>
    );
}
