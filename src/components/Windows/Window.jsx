import Box from "@mui/material/Box";
import { dark } from "../../themes/MyTheme";
import ShowLogs from "../QueueActions/ShowLogs";
import { useState } from "react";
import calculateTimeDifference from "../../helpers/calculateTimeDifference";

export default function Window({ id, minWidth = 100, name, number, updated }) {
    const [openLogs, setOpenLogs] = useState(false);
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
                {number}
            </Box>
            <Box component="span" sx={{ fontSize: ".7rem" }}>
                {calculateTimeDifference(updated)}
            </Box>
            <ShowLogs queueId={id} openLogs={openLogs} setOpenLogs={setOpenLogs} />
        </Box>
    );
}
