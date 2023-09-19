import { useState, useEffect } from "react";
import { Backdrop, CircularProgress } from "@mui/material";

export default function LoadingScreen({ isFetching }) {
    const [showBackdrop, setShowBackdrop] = useState(isFetching);

    useEffect(() => {
        let timeoutId;

        // Whenever isFetching changes, reset the timer and update showBackdrop
        if (isFetching) {
            setShowBackdrop(true);
            timeoutId = setTimeout(() => {
                setShowBackdrop(false);
            }, 30000);
        } else {
            // If isFetching becomes false, clear the timer and hide the backdrop
            clearTimeout(timeoutId);
            setShowBackdrop(false);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [isFetching]);

    return (
        <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={showBackdrop} // Show backdrop based on showBackdrop state
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}
