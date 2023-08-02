import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Dashboard from "./public/Dashboard";
import About from "./public/About";
import Support from "./public/Support";
import ErrorPage from "./ErrorPage";
import Login from "./admin/Login";
import Footer from "./../components/Footer";
import AdminNavBar from "../components/AdminNavbar";
import AdminDashboard from "./admin/AdminDashboard";
import Chat from "./admin/Chat";
import Logs from "./admin/Logs";
// import AdminSupport from "./admin/AdminSupport";
import Settings from "./admin/Settings";
import AdminNavbar from "../components/AdminNavbar";

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
        path: "*",
        element: <ErrorPage />,
    },
    {
        path: "/login",
        element: <Login />,
    },


    {
        path: "/admin",
        element: <AdminDashboard />,
    },
    {
        path: "admindashboard", 
        element: <AdminNavbar />,
    },
    {
        path: "logs", 
        element: <Logs />,
    },
    {
        path: "chat", 
        element: <Chat />,
    },
    {
        path: "/adminsupport", 
        element: <AdminNavBar />,
    },
    {
        path: "settings", 
        element: <Settings />,
    },
           
]);

export default function Home() {
    return (
        <>
            <RouterProvider router={router}>
                <Outlet />
            </RouterProvider>
            <Footer />
        </>
    );
}
