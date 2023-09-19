import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import LogTable from "./LogTable";
import { socket } from "../../helpers/socket";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1),
    },
}));

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function ShowLogs({ queueId, agencyId, title, setOpenLogs }) {
    const [logs, setLogs] = useState(null);
    const dateStart = dayjs(new Date()).format("YYYY-MM-DD");
    const dateEnd = dayjs(new Date()).add(1, "day").format("YYYY-MM-DD");

    const handleClose = () => {
        setOpenLogs(false);
    };

    useEffect(() => {
        socket.emit("getLogs", { dateStart, dateEnd, queueId, agencyId });

        socket.on("getLogs", (logs) => {
            setLogs(logs);
        });

        return () => socket.off("getLogs");
    }, []);

    return (
        <>
            {logs != null && (
                <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={true}>
                    <BootstrapDialogTitle
                        id="customized-dialog-title"
                        onClose={handleClose}
                        sx={{ paddingX: "10px", textAlign: "center" }}
                    >
                        {title ? title : "Logs"}
                    </BootstrapDialogTitle>
                    <DialogContent sx={{ paddingY: "50px" }}>
                        <LogTable logs={logs} />
                    </DialogContent>
                </BootstrapDialog>
            )}
        </>
    );
}
