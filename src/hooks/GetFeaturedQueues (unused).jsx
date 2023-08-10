import { useState, useEffect } from "react";

export function GetFeaturedQueues(data, n) {
    const [topNIds, setTopNIds] = useState([1, 2, 3]);

    useEffect(() => {
        // Define the filter function inside the hook
        function getTopNMostOccurringIds(data, n) {
            const idCounts = new Map();

            // Count the occurrences of each id
            for (const item of data) {
                const { id } = item;
                idCounts.set(id, (idCounts.get(id) || 0) + 1);
            }

            // Sort the ids based on their occurrence count in descending order
            const sortedIds = Array.from(idCounts.entries()).sort((a, b) => b[1] - a[1]);

            // Extract the top N most occurring ids
            const topNIds = sortedIds.slice(0, n).map((entry) => entry[0]);

            return topNIds;
        }

        if (data && data.length > 0 && n > 0) {
            const topNIds = getTopNMostOccurringIds(data, n);
            setTopNIds(topNIds);
        }
    }, [data, n]);

    return topNIds;
}
