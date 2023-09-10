import { Backdrop, CircularProgress } from "@mui/material";

export default function LoadingScreen({ isFetching }) {
    return (
        <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isFetching} // Show backdrop only when isFetching is true
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}
