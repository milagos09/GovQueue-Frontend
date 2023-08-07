import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import queues from "./../../../fake/queues.json";
import { CheckScreenSize } from "../../hooks/CheckScreenSize";
import Row from "./Row";
import { glassEffect } from "../../themes/MyTheme";
import Searchbar from "./../Searchbar";

export default function CollapsibleTable({ admins }) {
    const { width } = CheckScreenSize();
    const adminsWithQueue = admins.map((admin) => {
        return { ...admin, queues: queues.filter((q) => q.adminId === admin.id) };
    });

    return (
        <Paper sx={{ width: "100%", overflow: "hidden", my: 4, ...glassEffect }}>
            <TableContainer sx={{ maxHeight: "550px", paddingX: width > 800 ? "120px" : "10px" }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell align="center">Agency</TableCell>
                            <TableCell align="center">Name</TableCell>
                            {width > 500 && <TableCell align="center">Region</TableCell>}
                            {width > 600 && <TableCell align="center">Number of Queues</TableCell>}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {adminsWithQueue.map((admin) => (
                            <Row key={admin.id} admin={admin} width={width} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
