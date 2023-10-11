import { Outlet } from "react-router-dom";
import AdminNavbar from "../../components/AdminNavbar";
import userStore from "../../stores/userStore";
import Login from "./Login";
import { useEffect, useState } from "react";
import queuesStore from "../../stores/queuesStore";
import FetchData from "../../hooks/FetchData";
import LoadingScreen from "../../components/LoadingScreen";
import { getSessionStorage, setSessionStorage } from "../../helpers/sessionStorage";
import FitToScreen from "../../components/FitToScreen";

export default function Admin() {
    const { data, isFetching, fetchData } = FetchData();
    const { loggedIn, setLoggedIn } = userStore();
    const { setQueues } = queuesStore();
    const [initialLoad, setInitialLoad] = useState(true);
    const user = getSessionStorage("user");
    const agency = getSessionStorage("agency");

    useEffect(() => {
        (async () => {
            if (user && agency) {
                setLoggedIn(true);
            }
            const options = {
                credentials: "include",
            };

            await fetchData(`${import.meta.env.VITE_SERVER_URL}/users/login/status`, options);
        })();

        setInitialLoad(false);
    }, []);

    useEffect(() => {
        if (data?.loggedIn) {
            const { user, agency, queues } = data;
            setSessionStorage("user", user);
            setSessionStorage("agency", agency);
            setQueues(queues);
            setLoggedIn(true);
        }
    }, [data]);

    if (initialLoad) {
        return (
            <>
                <AdminNavbar />
                <FitToScreen reduce={164}>
                    <LoadingScreen isFetching={true} />
                </FitToScreen>
            </>
        );
    }

    return (
        <>
            <AdminNavbar />
            {loggedIn ? <Outlet /> : <Login />}
        </>
    );
}
