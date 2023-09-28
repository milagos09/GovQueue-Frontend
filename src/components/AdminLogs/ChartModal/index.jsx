import { Modal, Box } from "@mui/material";
import QueueTabs from "../../QueueTable/QueueTabs";
import { CheckScreenSize } from "../../../hooks/CheckScreenSize";
import LineChart from "./LineChart";
import BarChart from "./BarChart";

export default function ChartModal({ setOpenCharts, logs }) {
    const { width } = CheckScreenSize();
    const handleClose = () => {
        setOpenCharts(false);
    };

    const contents = [
        {
            name: "Line Chart",
            component: <LineChart logs={logs} />,
        },
        {
            name: "Bar Chart",
            component: <BarChart logs={logs} />,
        },
        {
            name: "Summary",
            component: <div style={{ minWidth: "400", minHeight: "400px", textAlign: "center" }}>Summary</div>,
        },
    ];

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
