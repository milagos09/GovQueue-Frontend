import { useState } from "react";
import utilityStore from "../stores/utilityStore";

export default function FetchData() {
  const { setIsLoading } = utilityStore();
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);

  const fetchData = async (endpoint, options = {}) => {
    setIsFetching(true);
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(endpoint, options);
      setStatus(response.status);
      if (response.status >= 300) {
        const jsonData = await response.json();
        throw new Error(`HTTP Error: ${response.status} - ${jsonData.error} `);
      }
      const jsonData = await response.json();

      setData(jsonData);
      setIsFetching(false); // Move setIsFetching(false) here to ensure it's called after data is set.
      setIsLoading(false);

      return jsonData; // Return the data when the fetch is successful.
    } catch (err) {
      setError(err.message);
      setIsFetching(false); // Make sure setIsFetching(false) is called in the catch block as well.
      setIsLoading(false);

      throw err; // Re-throw the error for further handling, if necessary.
    }
  };

  return { data, isFetching, error, fetchData, status };
}
