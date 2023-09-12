import { useState } from "react";

export default function FetchData() {
    const [data, setData] = useState(null);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async (url, options = {}) => {
        setIsFetching(true);
        setError(null);

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const jsonData = await response.json();
            setData(jsonData);
        } catch (err) {
            setError(err);
        } finally {
            setIsFetching(false);
        }
    };

    return { data, isFetching, error, fetchData };
}
