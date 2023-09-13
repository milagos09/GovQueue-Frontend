import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import LogPicker from "./LogPicker";
import LogTable from "./LogTable";
import LogOptions from "./LogOptions";
import dayjs from "dayjs";
import { CheckScreenSize } from "../../hooks/CheckScreenSize";
import LoadingScreen from "../LoadingScreen";
import userStore from "../../stores/userStore";

const initialStartDate = dayjs().subtract(1, "day");
const initialEndDate = dayjs();

export default function AdminLogs() {
    const { user } = userStore();
    const { height } = CheckScreenSize();

    const [state, setState] = useState({
        logs: [],
        filteredLogs: [],
        startDate: initialStartDate,
        endDate: initialEndDate,
        selectedQueue: "All",
        isFetching: false,
    });

    // Fetch logs from the API and update component state.
    const fetchLogs = async (agencyId, startDate, endDate) => {
        try {
            setState((prevState) => ({ ...prevState, isFetching: true }));
            const result = await fetch(
                `https://govqueue-api.onrender.com/logs/dateRange/?agencyId=${agencyId}&startDate=${startDate.format(
                    "YYYY-MM-DD"
                )}&endDate=${endDate.format("YYYY-MM-DD")}`
            );
            const logs = await result.json();
            setState((prevState) => ({
                ...prevState,
                logs,
                filteredLogs: logs,
                isFetching: false,
            }));
        } catch (error) {
            console.error("Error fetching logs:", error);
            setState((prevState) => ({ ...prevState, isFetching: false }));
        }
    };

    // Handle changes to the selected date and trigger log fetching.
    const handleChangeDate = async (setter, newDate) => {
        let startDateToUpdate, endDateToUpdate;

        if (setter === "startDate") {
            startDateToUpdate = newDate;
            endDateToUpdate = state.endDate;
        } else {
            startDateToUpdate = state.startDate;
            endDateToUpdate = newDate;
        }

        setState((prevState) => ({ ...prevState, startDate: startDateToUpdate, endDate: endDateToUpdate }));
        await fetchLogs(user.agency_id, startDateToUpdate, endDateToUpdate);
    };

    // Handle changes to the selected queue and update filtered logs.
    const handleChangeSelect = (e) => {
        const name = e.target.value;
        setState((prevState) => ({ ...prevState, selectedQueue: name }));
        const filteredLogs = name === "All" ? state.logs : state.logs.filter((log) => log.name === name);
        setState((prevState) => ({ ...prevState, filteredLogs }));
    };

    // Fetch logs from the API when the component is initially mounted.
    useEffect(() => {
        fetchLogs(user.agency_id, state.startDate, state.endDate);
    }, []);

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
