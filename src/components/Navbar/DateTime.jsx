import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
  const formattedDateTime = dateTimeFormatter
    .format(currentDateTime)
    .replace(" at", "");

  return (
    <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
      <Typography variant="body1" sx={{ color: "white", marginRight: 2 }}>
        {formattedDateTime.trim()}
      </Typography>
    </Box>
  );
}
