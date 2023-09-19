import { Primary } from "./../Buttons/";
import { saveAs } from "file-saver";
import Papa from "papaparse";

export default function DownloadCSVButton({ logs, agency }) {
    const downloadCSV = () => {
        // Convert objects to CSV
        const csvLogs = logs.map((item) => ({
            ...item, // Spread the object's properties
        }));

        // Create a CSV string
        const csvString = Papa.unparse(csvLogs);

        // Create a Blob containing the CSV logs
        const blob = new Blob([csvString], { type: "text/csv" });

        // Trigger the download
        saveAs(blob, `${agency.name}_${new Date().getTime().toString(16)}.csv`);
    };

    return <Primary onClick={downloadCSV} value={"Download"} disable={logs.length == 0} />;
}
