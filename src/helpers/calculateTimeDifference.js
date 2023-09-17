export default function calculateTimeDifference(timeString) {
    const currentTime = new Date();
    const providedTime = new Date(timeString);

    const timeDifferenceInMillis = Math.abs(currentTime - providedTime); // Use Math.abs to ensure non-negative difference

    const minutesDifference = Math.floor(timeDifferenceInMillis / (1000 * 60));
    const hoursDifference = Math.floor(minutesDifference / 60);
    const remainingMinutes = minutesDifference % 60;

    if (hoursDifference > 0) {
        return `${hoursDifference} hour${hoursDifference > 1 ? "s" : ""} ago`;
    } else {
        return `${remainingMinutes} min${remainingMinutes !== 1 ? "s" : ""} ago`;
    }
}
