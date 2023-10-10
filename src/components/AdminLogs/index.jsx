import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import LogPicker from "./LogPicker";
import LogTable from "./LogTable";
import LogOptions from "./LogOptions";
import dayjs from "dayjs";
import LoadingScreen from "../LoadingScreen";
import { getSessionStorage } from "../../helpers/sessionStorage";
import FitToScreen from "../FitToScreen";

const initialStartDate = dayjs();
const initialEndDate = dayjs().add(1, "day");

export default function AdminLogs() {
    const URL = import.meta.env.VITE_SERVER_URL;
    const user = getSessionStorage("user");
    const agency = getSessionStorage("agency");

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
                `${URL}/logs/dateRange/?agencyId=${agencyId}&startDate=${startDate.format(
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

        setState((prevState) => ({
            ...prevState,
            startDate: startDateToUpdate,
            endDate: endDateToUpdate,
            selectedQueue: "All",
        }));

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
            <FitToScreen reduce={162}>
                <Container maxWidth="lg">
                    <LogPicker
                        queues={[...new Set(state.logs.map((log) => log.name))]}
                        startDate={state.startDate}
                        endDate={state.endDate}
                        handleChangeDate={handleChangeDate}
                        selectedQueue={state.selectedQueue}
                        handleChangeSelect={handleChangeSelect}
                    />
                    <LogTable logs={state.filteredLogs} />
                    <LogOptions logs={state.filteredLogs} agency={agency} />
                </Container>
            </FitToScreen>
            <LoadingScreen isFetching={state.isFetching} />
        </>
    );
}
