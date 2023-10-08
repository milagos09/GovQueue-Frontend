export default function getClientData() {
    const userAgent = navigator.userAgent;
    let device, browser, os;

    // Device
    if (/Mobi|Android/i.test(userAgent)) {
        device = "Mobile";
    } else if (/Tablet|iPad/i.test(userAgent)) {
        device = "Tablet";
    } else {
        device = "Desktop";
    }

    // Browser
    if (/Chrome/i.test(userAgent)) {
        browser = "Chrome";
    } else if (/Firefox/i.test(userAgent)) {
        browser = "Firefox";
    } else if (/Safari/i.test(userAgent)) {
        browser = "Safari";
    } else if (/MSIE|Trident/i.test(userAgent)) {
        browser = "Internet Explorer";
    } else if (/Edge/i.test(userAgent)) {
        browser = "Edge";
    } else {
        browser = "Other";
    }

    // Operating System
    if (/Win/i.test(userAgent)) {
        os = "Windows";
    } else if (/Mac/i.test(userAgent)) {
        os = "MacOS";
    } else if (/Linux/i.test(userAgent)) {
        os = "Linux";
    } else if (/Android/i.test(userAgent)) {
        os = "Android";
    } else if (/like Mac OS X/i.test(userAgent)) {
        os = "iOS";
    } else {
        os = "Other";
    }

    return { device: device, browser: browser, os: os };
}
