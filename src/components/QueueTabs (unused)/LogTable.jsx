import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function LogTable({ logs }) {
    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Updated</TableCell>
                        <TableCell align="right">Window</TableCell>
                        <TableCell align="right">Number</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {logs.map((log) => (
                        <TableRow key={log.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                {new Date(log.timestamp).toLocaleTimeString()}
                            </TableCell>
                            <TableCell align="right">{log.queueId}</TableCell>
                            <TableCell align="right">{log.queue}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
