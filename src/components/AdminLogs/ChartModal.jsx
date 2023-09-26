import { Modal, Box } from "@mui/material";
import QueueTabs from "../QueueTable/QueueTabs";
import { CheckScreenSize } from "../../hooks/CheckScreenSize";

const contents = [
    {
        name: "Line Chart",
        component: <div style={{ minWidth: "600px", minHeight: "400px", textAlign: "center" }}>Line Chart</div>,
    },
    {
        name: "Bar Chart",
        component: <div style={{ minWidth: "600px", minHeight: "400px", textAlign: "center" }}>Bar Chart</div>,
    },
    {
        name: "Summary",
        component: <div style={{ minWidth: "400", minHeight: "400px", textAlign: "center" }}>Summary</div>,
    },
];

export default function ChartModal({ setOpenCharts }) {
    const { width } = CheckScreenSize();
    const handleClose = () => {
        setOpenCharts(false);
    };

    return (
        <>
            <Modal
                open={true}
                onClose={handleClose}
                aria-labelledby="modal-modal-charts"
                aria-describedby="modal-modal-analytics"
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        minWidth: "400px",
                        borderRadius: "10px",
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <QueueTabs contents={contents} width={width} />
                </Box>
            </Modal>
        </>
    );
}
