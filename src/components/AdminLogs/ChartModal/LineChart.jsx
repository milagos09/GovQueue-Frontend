import { LineChart, Line, XAxis, YAxis, Legend, CartesianGrid, Label } from "recharts";
import dayjs from "dayjs";
import colorGenerator from "./../../../helpers/colorGenerator";

function formatDate(date) {
    return dayjs(date).format("MM-DD HH:mm");
}

export default function LineChartTab({ logs }) {
    if (!logs.length) {
        return <p style={{ textAlign: "center", padding: "20px" }}>No results</p>;
    }
    const sortLogs = logs.sort((a, b) => a.created_at - b.created_at);
    const groupedData = {};

    sortLogs.forEach((log) => {
        log.created_at = new Date(log.created_at);
        if (!groupedData[log.name]) {
            groupedData[log.name] = [];
        }
        groupedData[log.name].push(log);
    });

    const result = Object.keys(groupedData).map((name) => ({
        name,
        data: groupedData[name],
    }));

    return (
        <LineChart width={550} height={330} data={result[0].data} margin={{ top: 20, right: 30, left: 20 }}>
            <XAxis dataKey="created_at" type="date" tickFormatter={formatDate} />

            <YAxis dataKey="current_number">
                <Label value="Served" angle={-90} position="insideLeft" />
            </YAxis>

            <Legend />

            <CartesianGrid strokeDasharray="3 3" />

            {result.map((e, i) => (
                <Line
                    dataKey="current_number"
                    stroke={colorGenerator()[i]}
                    name={e.name}
                    data={e.data}
                    key={i}
                    dot={false}
                />
            ))}
        </LineChart>
    );
}
