import { Outlet } from "react-router-dom";
import NavBar from "../../components/Navbar";
import { useEffect } from "react";
import { socket } from "../../helpers/socket";
import agencyStore from "../../stores/agencyStore";
import queuesStore from "../../stores/queuesStore";
import getUserData from "./../../helpers/getCleintData";
import userStore from "../../stores/userStore";
import { setSessionStorage, getSessionStorage } from "./../../helpers/sessionStorage.js";
import utilityStore from "../../stores/utilityStore";
import FacebookMessengerChat from "../../components/FacebookMessengerChat/index";

export default function Public() {
    const { setAgencies, updateAgency } = agencyStore();
    const { setQueues, updateQueue, removeQueue } = queuesStore();
    const { setVisitorCount } = userStore();
    const { setIsLoading } = utilityStore();

    useEffect(() => {
        (async () => {
            try {
                const activeSession = !!getSessionStorage("active");
                const userData = getUserData();
                userData.active = activeSession;
                setIsLoading(true);
                socket.emit("getInitialData", userData, (data) => {
                    setSessionStorage("active", true);
                    const { agencies, queues, visitors } = data;
                    setAgencies(agencies);
                    setQueues(queues);
                    setVisitorCount(visitors.count);
                    setIsLoading(false);
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
            <FacebookMessengerChat pageId="108965818922829" />
        </>
    );
}
