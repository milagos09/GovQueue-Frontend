export default function calculateTimeDifference(timeString) {
    const currentTime = new Date();
    const providedTime = new Date(timeString);

    // Check if the provided time is ahead of the current time
    if (providedTime > currentTime) {
        providedTime.setDate(providedTime.getDate() - 1); // Treat as if it were from yesterday
    }

    const timeDifferenceInMillis = currentTime - providedTime;

    const minutesDifference = Math.floor(timeDifferenceInMillis / (1000 * 60));
    const hoursDifference = Math.floor(minutesDifference / 60);
    const remainingMinutes = minutesDifference % 60;

    if (hoursDifference > 0) {
        return `${hoursDifference} hour${hoursDifference > 1 ? "s" : ""} ago`;
    } else {
        return `${remainingMinutes} min${remainingMinutes !== 1 ? "s" : ""} ago`;
    }
}
