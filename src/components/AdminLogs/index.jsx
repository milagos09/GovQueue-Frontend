import { Container } from "@mui/material";
import LogPicker from "./LogPicker";
import LogTable from "./LogTable";
import LogOptions from "./LogOptions";
import logs from "./../../../fake/logs.json";
import queues from "./../../../fake/queues.json";

export default function AdminLogs() {
    const queuesSample = queues.filter((queue) => queue.adminId == 1);
    const sampleLogs = logs.filter((log) => log.adminId == 1);

    return (
        <>
            <Container maxWidth="lg">
                <LogPicker queues={queuesSample} />
                <LogTable logs={sampleLogs} />
                <LogOptions />
            </Container>
        </>
    );
}
