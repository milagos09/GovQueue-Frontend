import { createBrowserRouter, Outlet, RouterProvider, Navigate } from "react-router-dom";
import Dashboard from "./public/Dashboard";
import About from "./public/About";
import Support from "./public/Support";
import ErrorPage from "./ErrorPage";
import Login from "./admin/Login";
import Footer from "./../components/Footer";
import AdminDashboard from "./admin/AdminDashboard";
import Logs from "./admin/Logs";
import Settings from "./admin/Settings";
import AdminSupport from "./admin/AdminSupport";
import Agency from "./public/Agency";
import queuesStore from "../stores/queuesStore";
import agencyStore from "../stores/agencyStore";
import { useEffect } from "react";
import { socket } from "../helpers/socket";

const session = sessionStorage.getItem("user");
const isLoggedIn = !!session;

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/support",
        element: <Support />,
    },
    {
        path: "/agency/:id",
        element: <Agency />,
    },
    {
        path: "*",
        element: <ErrorPage redirect={{ to: "/", buttonValue: "Return to Home Page" }} status={404} />,
    },
    {
        path: "/admin",
        errorElement: <ErrorPage redirect={{ to: "/admin", buttonValue: "Return to Admin Page" }} status={500} />,
        children: [
            {
                path: "",
                element: isLoggedIn ? <AdminDashboard /> : <Navigate to={"/admin/login"} />,
            },
            {
                path: "login",
                element: isLoggedIn ? <Navigate to={"/admin"} /> : <Login />,
            },
            {
                path: "logs",
                element: isLoggedIn ? <Logs /> : <Navigate to={"/admin/login"} />,
            },
            {
                path: "settings",
                element: isLoggedIn ? <Settings /> : <Navigate to={"/admin/login"} />,
            },
            {
                path: "support",
                element: isLoggedIn ? <AdminSupport /> : <Navigate to={"/admin/login"} />,
            },
            {
                path: "*",
                element: <ErrorPage redirect={{ to: "/admin", buttonValue: "Return to Admin Page" }} />,
            },
        ],
    },
]);

export default function Home() {
    const { setAgencies, updateAgency } = agencyStore();
    const { setQueues, updateQueue } = queuesStore();
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
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        })();
    }, []);

    return (
        <>
            <RouterProvider router={router}>
                <Outlet />
            </RouterProvider>
            <Footer />
        </>
    );
}
