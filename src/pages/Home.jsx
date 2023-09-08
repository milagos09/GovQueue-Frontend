import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Navigate,
} from "react-router-dom";
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
import { ErrorBoundary } from "react-error-boundary";
import { Box } from "@mui/material";

const isLoggedIn = !!sessionStorage.getItem("admin");

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
      {
        path: "",
        element: isLoggedIn ? (
          <AdminDashboard />
        ) : (
          <Navigate to={"/admin/login"} />
        ),
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
        element: isLoggedIn ? (
          <AdminSupport />
        ) : (
          <Navigate to={"/admin/login"} />
        ),
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
  function fallbackRender({ error, resetErrorBoundary }) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}>
        <button onClick={resetErrorBoundary}>Refresh Page</button>
      </Box>
    );
  }
  function refreshPage() {
    // Refresh the page
    window.location.reload();
  }
  // throw new Error("z");
  return (
    <>
      <ErrorBoundary
        fallbackRender={fallbackRender}
        onReset={(details) => {
          // Reset the state of your app so the error doesn't happen again
          refreshPage(); // Refresh the page when the error boundary is reset
        }}>
        <RouterProvider router={router}>
          <Outlet />
        </RouterProvider>
        <Footer />
      </ErrorBoundary>
    </>
  );
}
