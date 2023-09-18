import { useState, useEffect } from "react";
import { Box, Paper, Table, TableBody, TableHead, TableRow, TablePagination } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import { glassEffect } from "../../themes/MyTheme";
import QueueData from "./QueueData";
import LoadingScreen from "./../LoadingScreen";
import FetchData from "./../../hooks/FetchData";
import queuesStore from "./../../stores/queuesStore";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export default function AdminQueueTable({ agencyId }) {
    // const { fetchData, data, isFetching } = FetchData();
    // const [queues, setQueues] = useState([]);
    const { queues: allQueues } = queuesStore();
    const queues = allQueues.filter((q) => q.agency_id === agencyId);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        const newRowsPerPage = Number(event.target.value);
        setRowsPerPage(newRowsPerPage);
        setPage(0);
    };

    // useEffect(() => {
    //     (async () => {
    //         await fetchData(`https://govqueue-api.onrender.com/queues/agency/${agencyId}`);
    //     })();
    // }, []);

    // useEffect(() => {
    //     if (data) {
    //         setQueues(data);
    //     }
    // }, [data]);

    return (
        <>
            {/* <LoadingScreen isFetching={isFetching} /> */}
            <Paper
                sx={{
                    width: "100%",
                    overflow: "hidden",
                    mb: 4,
                    ...glassEffect,
                    position: "relative",
                }}
            >
                <Table sx={{ width: "100%" }} size="small" aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">ID</StyledTableCell>
                            <StyledTableCell align="center">Queue</StyledTableCell>
                            <StyledTableCell align="center">Number</StyledTableCell>
                            <StyledTableCell align="center">Updated</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>{" "}
                        </TableRow>
                    </TableHead>

                    <TableBody sx={{ columnGap: 100 }}>
                        {queues.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((queue, i) => (
                            <QueueData queue={queue} key={queue.name + i} />
                        ))}
                    </TableBody>
                </Table>
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        my: 1,
                    }}
                >
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 20]}
                        component="div"
                        count={queues.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Box>
            </Paper>
        </>
    );
}
