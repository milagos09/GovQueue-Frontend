import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { Box, Backdrop, SpeedDial, SpeedDialIcon, SpeedDialAction } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useState, useEffect } from "react";
import calculateTimeDifference from "../../helpers/calculateTimeDifference";
import { getSessionStorage } from "./../../helpers/sessionStorage";
import LoadingScreen from "../LoadingScreen";
import FetchData from "../../hooks/FetchData";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: open ? 16 : 14,
    },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },

    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

export default function QueueData({ queue, setQueues }) {
    const { fetchData, data, isFetching } = FetchData();
    const user = getSessionStorage("user");
    const [open, setOpen] = useState(false);
    const [number, setNumber] = useState(queue.current_number);
    const [action, setAction] = useState("");
    const [updated, setUpdated] = useState(calculateTimeDifference(queue.updated_at));
    const handleOpen = () => setOpen(!open);
    const increaseNumber = () => {
        setNumber(number + 1);
        setAction("increment");
    };
    const editNumber = () => {
        const updatedNumber = prompt();

        if (!isNaN(Number(updatedNumber))) {
            setNumber(Number(updatedNumber));
            setAction("set");
        }
    };
    const actions = [
        {
            icon: <ModeEditIcon />,
            name: "Set",
            onClick: editNumber,
        },
        {
            icon: <AddIcon onClick={increaseNumber} />,
            name: "Increment",
        },
    ];

    useEffect(() => {
        if (number !== queue.current_number) {
            const options = {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    queueId: queue.queue_id,
                    agencyId: user.agency_id,
                    actionType: action,
                    currentNumber: number,
                    updatedBy: user.user_id,
                }),
            };
            fetchData("https://govqueue-api.onrender.com/logs/add", options);
        }
    }, [number]);

    useEffect(() => {
        if (data) {
            setUpdated("0 mins ago");
            setQueues((queues) =>
                queues.map((q) =>
                    q.queue_id === queue.queue_id
                        ? { ...q, current_number: data.current_number, updated_at: data.created_at }
                        : q
                )
            );
        }
    }, [data]);
    return (
        <>
            <LoadingScreen isFetching={isFetching} />
            <StyledTableRow>
                <StyledTableCell align="center">{queue.name}</StyledTableCell>
                <StyledTableCell align="center">
                    <Box
                        component={"span"}
                        style={
                            open
                                ? {
                                      fontSize: "2rem",
                                      padding: "1rem",
                                      borderRadius: "5px",
                                  }
                                : {}
                        }
                    >
                        {number}
                    </Box>
                </StyledTableCell>
                <StyledTableCell align="center">{updated}</StyledTableCell>
                <StyledTableCell align="center">
                    <Box sx={{ transform: "translateZ(0px)" }}>
                        <Backdrop open={open} sx={{ background: "none" }} />
                        <SpeedDial
                            direction="up"
                            ariaLabel="SpeedDial tooltip"
                            icon={<SpeedDialIcon onClick={handleOpen} sx={{}} />}
                            open={open}
                            FabProps={{
                                size: "small",
                                color: "info",
                            }}
                            sx={{ position: "relative" }}
                        >
                            {actions.map((action) => (
                                <SpeedDialAction
                                    onClick={action.onClick}
                                    key={action.name}
                                    icon={action.icon}
                                    tooltipTitle={action.name}
                                    sx={{
                                        position: !open ? "absolute" : "",
                                        transition: open ? ".5s" : "none",
                                        borderRadius: "50%",
                                        "&:hover": {
                                            color: "black",
                                            background: "azure",
                                        },
                                    }}
                                />
                            ))}
                        </SpeedDial>
                    </Box>
                </StyledTableCell>
            </StyledTableRow>
        </>
    );
}
