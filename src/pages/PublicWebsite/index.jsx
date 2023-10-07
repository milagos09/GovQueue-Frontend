import { Outlet } from "react-router-dom";
import NavBar from "../../components/Navbar";
import { useEffect } from "react";
import { socket } from "../../helpers/socket";
import agencyStore from "../../stores/agencyStore";
import queuesStore from "../../stores/queuesStore";
import LoadingScreen from "../../components/LoadingScreen";

export default function Public() {
    const { agencies, setAgencies, updateAgency } = agencyStore();
    const { setQueues, updateQueue, removeQueue } = queuesStore();
    useEffect(() => {
        (async () => {
            try {
                socket.emit("getInitialData");
                socket.on("updateData", (data) => {
                    const { agencies, queues } = data;
                    setAgencies(agencies);
                    setQueues(queues);
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
