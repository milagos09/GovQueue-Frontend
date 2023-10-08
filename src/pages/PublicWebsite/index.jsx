import { Outlet } from "react-router-dom";
import NavBar from "../../components/Navbar";
import { useEffect } from "react";
import { socket } from "../../helpers/socket";
import agencyStore from "../../stores/agencyStore";
import queuesStore from "../../stores/queuesStore";
import LoadingScreen from "../../components/LoadingScreen";
import getUserData from "./../../helpers/getCleintData";
import userStore from "../../stores/userStore";
import { setSessionStorage, getSessionStorage } from "./../../helpers/sessionStorage.js";

export default function Public() {
    const { agencies, setAgencies, updateAgency } = agencyStore();
    const { setQueues, updateQueue, removeQueue } = queuesStore();
    const { setVisitorCount } = userStore();

    useEffect(() => {
        (async () => {
            try {
                const activeSession = !!getSessionStorage("active");
                const userData = getUserData();
                userData.active = activeSession;
                socket.emit("getInitialData", userData);
                socket.on("updateData", (data) => {
                    setSessionStorage("active", true);
                    const { agencies, queues, visitors } = data;
                    setAgencies(agencies);
                    setQueues(queues);
                    setVisitorCount(visitors.count);
                });

                socket.on("updateAgency", (agency) => {
                    updateAgency(agency);
                });

                socket.on("updateQueue", (queue) => {
                    updateQueue(queue);
                });

                socket.on("removeQueue", (queue) => {
                    removeQueue(queue);
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        })();
    }, []);

    return (
        <>
            <NavBar />
            <Outlet />
            <LoadingScreen isFetching={agencies.length === 0} />
        </>
    );
}
