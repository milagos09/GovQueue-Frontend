import "./App.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import ErrorPage from "./pages/ErrorPage";
// import About from "./pages/public/About";
// import Support from "./pages/public/Support";
// import Login from "./pages/admin/Login";
// import Dashboard from "./pages/public/Dashboard";
import { ErrorBoundary } from "react-error-boundary";
import { Box } from "@mui/material";

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

export default function App() {
  // const router = createBrowserRouter([
  //     {
  //         path: "/",
  //         element: <Home />,
  //         errorElement: <ErrorPage />,
  //         children: [
  //             {
  //                 path: "dashboard",
  //                 element: <Dashboard />,
  //             },
  //             {
  //                 path: "about",
  //                 element: <About />,
  //             },
  //             {
  //                 path: "support",
  //                 element: <Support />,
  //             },
  //         ],
  //     },
  //     { path: "login", element: <Login /> },
  // ]);
  return (
    <>
      <ErrorBoundary
        fallbackRender={fallbackRender}
        onReset={(details) => {
          // Reset the state of your app so the error doesn't happen again
          refreshPage(); // Refresh the page when the error boundary is reset
        }}>
        <Home />
      </ErrorBoundary>
    </>
  );
}
