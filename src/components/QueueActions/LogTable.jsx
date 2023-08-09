import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import queues from "./../../../fake/queues.json";

export default function LogTable({ logs }) {
    return (
        <TableContainer>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Updated</TableCell>
                        <TableCell>Window</TableCell>
                        <TableCell align="center">Number</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {logs.map((log) => (
                        <TableRow key={log.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                {new Date(log.timestamp).toLocaleTimeString()}
                            </TableCell>
                            <TableCell>{queues.find((q) => q.id === log.queueId).name}</TableCell>
                            <TableCell align="center">{log.queue}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
