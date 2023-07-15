import { useState, useEffect } from "react";
export default function FormatDateTime() {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const dateTimeOptions = {
        weekday: "short",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const dateTimeFormatter = new Intl.DateTimeFormat(undefined, dateTimeOptions);
    const formattedDateTime = dateTimeFormatter.format(currentDateTime).replace(" at", "");

    return formattedDateTime.trim();
}
