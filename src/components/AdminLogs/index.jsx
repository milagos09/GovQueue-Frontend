import { Container } from "@mui/material";
import LogPicker from "./LogPicker";
import LogTable from "./LogTable";
import LogOptions from "./LogOptions";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { CheckScreenSize } from "../../hooks/CheckScreenSize";
import LoadingScreen from "../LoadingScreen.jsx";

export default function AdminLogs({ user }) {
    const currentDate = dayjs();
    const { height } = CheckScreenSize();

    const [state, setState] = useState({
        logs: [],
        filteredLogs: [],
        startDate: currentDate,
        endDate: currentDate.subtract(1, "day"),
        selectedQueue: "All",
        isFetching: false,
    });

    const fetchLogs = async (agencyId, startDate, endDate) => {
        const result = await fetch(
            `https://govqueue-api.onrender.com/logs/dateRange/?agencyId=${agencyId}&startDate=${startDate}&endDate=${endDate}`
        );
        return await result.json();
    };

    const handleChangeDate = async (setter, newDate) => {
        setState((prevState) => ({ ...prevState, isFetching: true }));
        const { startDate, endDate } = state;

        const startDateToUpdate = setter === "startDate" ? newDate : startDate;
        const endDateToUpdate = setter === "endDate" ? newDate : endDate;

        const allLogs = await fetchLogs(
            user.id,
            startDateToUpdate.format("YYYY-MM-DD"),
            endDateToUpdate.format("YYYY-MM-DD")
        );

        setState((prevState) => ({
            ...prevState,
            startDate: startDateToUpdate,
            endDate: endDateToUpdate,
            logs: allLogs,
            isFetching: false,
        }));
    };

    const handleChangeSelect = (e) => {
        const name = e.target.value;
        setState((prevState) => ({ ...prevState, selectedQueue: name }));

        if (name === "All") {
            setState((prevState) => ({ ...prevState, filteredLogs: prevState.logs }));
        } else {
            const updateLogs = state.logs.filter((log) => log.name === name);
            setState((prevState) => ({ ...prevState, filteredLogs: updateLogs }));
        }
    };

    useEffect(() => {
        (async () => {
            const { startDate, endDate } = state;
            const allLogs = await fetchLogs(user.id, startDate.format("YYYY-MM-DD"), endDate.format("YYYY-MM-DD"));
            setState((prevState) => ({ ...prevState, logs: allLogs }));
        })();
    }, [state.startDate, state.endDate]);

    useEffect(() => {
        setState((prevState) => ({ ...prevState, filteredLogs: prevState.logs }));
    }, [state.logs]);

    return (
        <>
            <Container maxWidth="lg" sx={{ minHeight: `${height - 190}px` }}>
                <LogPicker
                    queues={[...new Set(state.logs.map((log) => log.name))]}
                    startDate={state.startDate}
                    endDate={state.endDate}
                    handleChangeDate={handleChangeDate}
                    selectedQueue={state.selectedQueue}
                    handleChangeSelect={handleChangeSelect}
                />
                <LogTable logs={state.filteredLogs} />
                <LogOptions />
            </Container>
            <LoadingScreen isFetching={state.isFetching} />
        </>
    );
}
