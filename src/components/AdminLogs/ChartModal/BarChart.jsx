import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Label, Tooltip } from "recharts";
import dayjs from "dayjs";
import colorGenerator from "../../../helpers/colorGenerator";
import sort from "./sort";

function formatData(logs) {
    const grouped = logs.reduce((acc, cur) => {
        const date = cur.created_at;
        if (!acc[date]) {
            acc[date] = {};
        }

        if (cur.action_type === "increment") {
            const key = cur.name;
            if (!acc[date][key]) {
                acc[date][key] = 0;
            }
            acc[date][key]++;
        }

        return acc;
    }, {});

    const result = Object.keys(grouped).map((date) => {
        return {
            created_at: date,
            ...grouped[date],
        };
    });

    return sort(result, "created_at");
}

export default function BarChartTab({ logs }) {
    if (!logs.length) {
        return <p style={{ textAlign: "center", padding: "20px" }}>No results</p>;
    }
    const formatDate = logs.map((log) => ({
        ...log,
        created_at: dayjs(log.created_at).format("MM-DD"),
    }));
    const chartData = formatData(formatDate);
    const queues = [...new Set(logs.map((log) => log.name))];

    return (
        <BarChart
            width={550}
            height={330}
            data={chartData}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="created_at" />
            <YAxis>
                <Label value="Total Served" angle={-90} position="insideLeft" />
            </YAxis>
            <Tooltip />
            <Legend />

            {queues.map((q, i) => (
                <Bar dataKey={q} fill={colorGenerator()[i]} key={q + i} />
            ))}
        </BarChart>
    );
}
