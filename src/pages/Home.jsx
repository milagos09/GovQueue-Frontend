import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
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
    element: (
      <ErrorPage redirect={{ to: "/", buttonValue: "Return to Home Page" }} />
    ),
  },
  {
    path: "/admin",
    children: [
      { path: "", element: <AdminDashboard /> },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "logs",
        element: <Logs />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "support",
        element: <AdminSupport />,
      },
      {
        path: "*",
        element: (
          <ErrorPage
            redirect={{ to: "/admin", buttonValue: "Return to Admin Page" }}
          />
        ),
      },
    ],
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
