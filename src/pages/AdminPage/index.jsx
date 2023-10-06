import { Outlet } from "react-router-dom";
import AdminNavbar from "../../components/AdminNavbar";
import userStore from "../../stores/userStore";
import Login from "./Login";
import { useEffect } from "react";
import queuesStore from "../../stores/queuesStore";

export default function Admin() {
    const { loggedIn, setLoggedIn, setUser, setAgency, user, agency } = userStore();
    const { setQueues } = queuesStore();

    useEffect(() => {
        (async () => {
            const options = {
                credentials: "include",
            };
            const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/users/login/status`, options);
            const { loggedIn, user, agency, queues } = await res.json();

            if (loggedIn) {
                user.agencyDetails = agency;
                setUser(user);
                setAgency(agency);
                setQueues(queues);
                // sessionStorage.setItem("user", JSON.stringify(user));
                setLoggedIn(true);
            }
        })();
    }, []);

    useEffect(() => {
        console.log(agency);
        console.log(user);
    }, [agency, user]);

    return (
        <>
            <AdminNavbar />
            {loggedIn ? <Outlet /> : <Login />}
        </>
    );
}
