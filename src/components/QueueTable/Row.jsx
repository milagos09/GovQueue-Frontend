import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { Link } from "react-router-dom";
import QueueActions from "../QueueActions";
import Windows from "../Windows";
import { StyledTableCell, StyledTableRow } from "../AdminHome/StyledTableElements";

export default function Row({ agency, customBreakPoint, isFavorite, toggleFavorite }) {
    const [showQueues, setShowQueues] = useState(false);

    const toggleQueues = () => {
        setShowQueues((prev) => !prev);
    };

    const fontSize = ".9rem";

    const logoWidth = "62px";

    return (
        <>
            <TableRow aria-label="expand row" size="small">
                <TableCell component="th" scope="row" sx={{ textAlign: "center" }}>
                    <Link target="_blank" to={`agency/${agency.agency_id}`}>
                        <img
                            src={agency.logo}
                            alt={agency.name + " logo"}
                            loading="lazy"
                            style={{ maxWidth: logoWidth, borderRadius: "50%" }}
                        />
                    </Link>
                </TableCell>
                <TableCell align="center" sx={{ fontSize: fontSize }}>
                    <Link
                        target="_blank"
                        to={`agency/${agency.agency_id}`}
                        style={{ textDecoration: "none", color: "darkblue" }}
                    >
                        {agency.name}
                    </Link>
                </TableCell>
                {customBreakPoint && <TableCell align="center">{agency.region}</TableCell>}
                <TableCell align="center">
                    <QueueActions
                        customBreakPoint={customBreakPoint}
                        agency={agency}
                        isFavorite={isFavorite}
                        toggleFavorite={toggleFavorite}
                        toggleQueues={toggleQueues}
                    />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
                    <Collapse in={showQueues} timeout="auto" unmountOnExit>
                        <Box sx={{ marginBottom: "20px" }}>
                            <Windows minWidth={80} queues={agency.queues} />
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}
