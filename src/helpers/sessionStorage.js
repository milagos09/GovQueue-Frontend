// Function to set a value in session storage
export function setSessionStorage(key, value) {
    try {
        sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error("Error setting session storage:", error);
    }
}

// Function to get a value from session storage
export function getSessionStorage(key) {
    try {
        const storedValue = sessionStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : null;
    } catch (error) {
        console.error("Error getting session storage:", error);
        return null;
    }
}
