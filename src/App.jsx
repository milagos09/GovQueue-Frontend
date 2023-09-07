import "./App.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import ErrorPage from "./pages/ErrorPage";
// import About from "./pages/public/About";
// import Support from "./pages/public/Support";
// import Login from "./pages/admin/Login";
// import Dashboard from "./pages/public/Dashboard";
import ErrorBoundary from "./pages/ErrorBoundaryPage";

import { useState } from "react";

export default function App() {
  const [hasError, setHasError] = useState(false);

  const handleOnError = () => {
    setHasError(true);
  };
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
      <ErrorBoundary onError={handleOnError}>
        <Home />
      </ErrorBoundary>
    </>
  );
}
