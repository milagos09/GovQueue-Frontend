import { LineChart, Line, XAxis, YAxis, Legend, CartesianGrid, Label, Tooltip } from "recharts";
import dayjs from "dayjs";
import colorGenerator from "./../../../helpers/colorGenerator";
import sort from "./sort";

function formatDate(date) {
    return dayjs(date).format("ddd HH:mm");
}

export default function LineChartTab({ logs }) {
    if (!logs.length) {
        return <p style={{ textAlign: "center", padding: "20px" }}>No results</p>;
    }

    const groupedData = {};

    sort(logs, "created_at").forEach((log) => {
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

    // const lastIndex = result.length - 1;
    // const lastResult = result[lastIndex];
    // const lastData = lastResult.data[lastResult.data.length - 1];

    // const firstCreatedAt = formatDate(result[0].data[0].created_at);
    // const lastCreatedAt = formatDate(lastData.created_at);

    // const dateRange = `Date: ${firstCreatedAt} - ${lastCreatedAt}`;

    return (
        <>
            {/* <p style={{ textAlign: "center" }}>{dateRange}</p> */}
            <LineChart width={550} height={330} margin={{ top: 20, right: 30, left: 20 }}>
                <XAxis dataKey="created_at" type="date" tickFormatter={formatDate} />
                <YAxis dataKey="current_number">
                    <Label value="Queue" angle={-90} position="insideLeft" />
                </YAxis>
                <Legend />

                <CartesianGrid strokeDasharray="3 3" />
                {result.map((e, i) => (
                    <Line
                        dot={false}
                        dataKey="current_number"
                        stroke={colorGenerator()[i]}
                        name={e.name}
                        data={e.data}
                        key={i + e.name}
                    />
                ))}
            </LineChart>
        </>
    );
}
