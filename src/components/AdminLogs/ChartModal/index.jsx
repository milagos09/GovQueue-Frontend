import { Modal, Box } from "@mui/material";
import QueueTabs from "../../QueueTable/QueueTabs";
import { CheckScreenSize } from "../../../hooks/CheckScreenSize";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import Summary from "./Summary";

export default function ChartModal({ setOpenCharts, logs }) {
    const { width } = CheckScreenSize();
    const handleClose = () => {
        setOpenCharts(false);
    };

    const style = { width: 550, overflow: "auto", overflowY: "hidden" };

    const contents = [
        {
            name: "Line Chart",
            component: (
                <div style={style}>
                    <LineChart logs={logs} />
                </div>
            ),
        },
        {
            name: "Bar Chart",
            component: (
                <div style={style}>
                    <BarChart logs={logs} />
                </div>
            ),
        },
        {
            name: "Summary",
            component: (
                <div style={{ width: 550, overflow: "auto", overflowY: "auto" }}>
                    <Summary logs={logs} />
                </div>
            ),
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
