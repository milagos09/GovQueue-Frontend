import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/PublicWebsite/Dashboard";
import About from "./pages/PublicWebsite/About";
import Support from "./pages/PublicWebsite/Support";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";
import AdminDashboard from "./pages/AdminPage/AdminDashboard";
import Logs from "./pages/AdminPage/Logs";
import Settings from "./pages/AdminPage/Settings";
import AdminSupport from "./pages/AdminPage/AdminSupport";
import Agency from "./pages/PublicWebsite/Agency";
import queuesStore from "./stores/queuesStore";
import agencyStore from "./stores/agencyStore";
import Public from "./pages/PublicWebsite";
import Admin from "./pages/AdminPage";
import { useEffect } from "react";
import { socket } from "./helpers/socket";
import Register from "./pages/PublicWebsite/Register";

export default function App() {
  const { updateAgency } = agencyStore();
  const { updateQueue, removeQueue } = queuesStore();
  useEffect(() => {
    (async () => {
      socket.on("updateAgency", (agency) => {
        updateAgency(agency);
      });

      socket.on("updateQueue", (queue) => {
        updateQueue(queue);
      });

      socket.on("removeQueue", (queue) => {
        removeQueue(queue);
      });
    })();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Public />}>
            <Route index element={<Dashboard />} />
            <Route path="about" element={<About />} />
            <Route path="support" element={<Support />} />
            <Route path="register" element={<Register />} />
            <Route path="agency/:id" element={<Agency />} />
            <Route
              path="*"
              element={
                <ErrorPage
                  redirect={{ to: "/", buttonValue: "Return to Home Page" }}
                  status={404}
                />
              }
            />
          </Route>
          <Route path="admin" element={<Admin />}>
            <Route index element={<AdminDashboard />} />
            <Route path="login" element={<Navigate to="/admin" />} />
            <Route path="logs" element={<Logs />} />
            <Route path="settings" element={<Settings />} />
            <Route path="support" element={<AdminSupport />} />
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
