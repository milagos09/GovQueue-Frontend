import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Public/Dashboard";
import About from "./pages/Public/About";
import Support from "./pages/Public/Support";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Admin/Login";
import Footer from "./components/Footer";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Logs from "./pages/Admin/Logs";
import Settings from "./pages/Admin/Settings";
import AdminSupport from "./pages/Admin/AdminSupport";
import Agency from "./pages/Public/Agency";
import queuesStore from "./stores/queuesStore";
import agencyStore from "./stores/agencyStore";
import userStore from "./stores/userStore";
import { useEffect } from "react";
import { socket } from "./helpers/socket";
import LoadingScreen from "./components/LoadingScreen";
import Public from "./pages/Public";
import Admin from "./pages/Admin";

const session = sessionStorage.getItem("user");
// const isLoggedIn = !!session;

export default function App() {
    const { loggedIn } = userStore();
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
            <LoadingScreen isFetching={agencies.length === 0} />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Public />}>
                        <Route index element={<Dashboard />} />
                        <Route path="about" element={<About />} />
                        <Route path="support" element={<Support />} />
                        <Route path="agency/:id" element={<Agency />} />
                        <Route
                            path="*"
                            element={
                                <ErrorPage redirect={{ to: "/", buttonValue: "Return to Home Page" }} status={404} />
                            }
                        />
                    </Route>
                    <Route path="admin" element={<Admin />}>
                        <Route index element={loggedIn ? <AdminDashboard /> : <Login />} />
                        <Route path="login" element={loggedIn ? <Navigate to="/admin" /> : <Login />} />
                        <Route path="logs" element={loggedIn ? <Logs /> : <Login />} />
                        <Route path="settings" element={loggedIn ? <Settings /> : <Login />} />
                        <Route path="support" element={loggedIn ? <AdminSupport /> : <Login />} />
                        <Route
                            path="*"
                            element={
                                <ErrorPage
                                    redirect={{
                                        to: "/admin",
                                        buttonValue: "Return to Admin Page",
                                    }}
                                />
                            }
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}
