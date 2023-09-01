import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import logs from "./../../../fake/logs.json";
import LogTable from "./LogTable";

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

export default function ShowLogs({ queueId, adminId, title, openLogs, setOpenLogs }) {
    const handleClose = () => {
        setOpenLogs(false);
    };

    const filterLogs = queueId
        ? logs.filter((log) => log.queueId === queueId)
        : logs.filter((log) => log.adminId === adminId);

    return (
        <>
            <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={openLogs}>
                <BootstrapDialogTitle
                    id="customized-dialog-title"
                    onClose={handleClose}
                    sx={{ paddingX: "50px", maxWidth: "350px", textAlign: "center" }}
                >
                    {title ? title : "Logs"}
                </BootstrapDialogTitle>
                <DialogContent sx={{ paddingY: "50px" }}>
                    <LogTable logs={filterLogs.slice(-10)} />
                </DialogContent>
            </BootstrapDialog>
        </>
    );
}
