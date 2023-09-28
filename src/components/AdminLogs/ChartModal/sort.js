export default function sort(arr, prop, sortOrder = "asc") {
    if (sortOrder === "asc") {
        return arr.sort((a, b) => (a[prop] > b[prop] ? 1 : -1));
    } else if (sortOrder === "desc") {
        return arr.sort((a, b) => (a[prop] < b[prop] ? 1 : -1));
    } else {
        throw new Error('Invalid sortOrder. Use "asc" or "desc".');
    }
}
