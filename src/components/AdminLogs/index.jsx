import { Container } from "@mui/material";
import LogPicker from "./LogPicker";
import LogTable from "./LogTable";
import LogOptions from "./LogOptions";

export default function AdminLogs() {
  return (
    <>
      <Container maxWidth="lg">
        <LogPicker />
        <LogTable />
        <LogOptions />
      </Container>
    </>
  );
}
