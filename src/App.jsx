import "./App.css";

import Home from "./pages/Home";
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
  window.location.reload();
}

export default function App() {
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
