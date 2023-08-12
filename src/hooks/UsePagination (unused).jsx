import { useState, useEffect } from "react";

export function UsePagination(data, itemsPerPage) {
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the range of items to display for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    // Function to handle page change
    const handlePageChange = (event, page) => {
        setCurrentPage(page);

        // Scroll to the TabList element
        const tabListElement = document.getElementById("tab-list");
        if (tabListElement) {
            tabListElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    // Reset currentPage to 1 whenever the component re-renders
    useEffect(() => {
        setCurrentPage(1);
    }, [data]);

    return {
        currentPage,
        currentItems,
        handlePageChange,
    };
}
