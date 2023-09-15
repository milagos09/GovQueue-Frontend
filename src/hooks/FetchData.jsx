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
            setIsFetching(false); // Move setIsFetching(false) here to ensure it's called after data is set.
            return jsonData; // Return the data when the fetch is successful.
        } catch (err) {
            setError(err);
            setIsFetching(false); // Make sure setIsFetching(false) is called in the catch block as well.
            throw err; // Re-throw the error for further handling, if necessary.
        }
    };

    return { data, isFetching, error, fetchData };
}
