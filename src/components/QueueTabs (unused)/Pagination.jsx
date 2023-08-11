import Box from "@mui/material/Box";
import { Pagination as MuiPagination } from "@mui/material";

export default function Pagination({ array, currentPage, itemsPerPage, handlePageChange }) {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 2,
                }}
            >
                <MuiPagination
                    count={Math.ceil(array.length / itemsPerPage)}
                    page={currentPage}
                    variant="outlined"
                    onChange={handlePageChange}
                />
            </Box>
        </>
    );
}
