import dayjs from "dayjs";
import minMax from "dayjs/plugin/minMax";
dayjs.extend(minMax);

function getUnique(array, property) {
    return [...new Set(array.map((log) => log[property]))];
}

export default function analyzePerQueue(logs) {
    const formatDateLogs = logs.map((log) => ({
        ...log,
        date: dayjs(log.created_at).format("YYYY-MM-DD"),
        time: dayjs(log.created_at).format("HH:mm:ss"),
    }));

    const queues = getUnique(formatDateLogs, "name");

    const dates = getUnique(formatDateLogs, "date");

    return queues.map((q) => ({
        name: q,
        byDate: dates.map((d) => {
            const filteredLogs = formatDateLogs.filter((log) => log.date === d && log.name === q);
            const times = filteredLogs.map((log) => dayjs(new Date(log.created_at)));
            const timeStarted = times.length ? dayjs.min(times) : null;
            const timeEnded = times.length ? dayjs.max(times) : null;
            const averagePerMinute =
                timeStarted && timeEnded ? filteredLogs.length / timeEnded.diff(timeStarted, "minutes") : null;
            return {
                date: d,
                total: filteredLogs.length,
                timeStarted: timeStarted ? timeStarted.format("HH:mm:ss") : null,
                timeEnded: timeEnded ? timeEnded.format("HH:mm:ss") : null,
                averageVelocityInMinutes: Number((1 / averagePerMinute).toFixed(2)),
            };
        }),
        total: formatDateLogs.filter((log) => log.name === q).length,
    }));
}
