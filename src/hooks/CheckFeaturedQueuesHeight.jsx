import { useState, useEffect } from "react";

export function CheckFeaturedQueuesHeight() {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const updateHeight = () => {
            const element = document.querySelector(".featured-queues");
            if (element) {
                const elementHeight = element.offsetHeight;
                setHeight(elementHeight);
            }
        };

        updateHeight();

        window.addEventListener("resize", updateHeight);

        return () => {
            window.removeEventListener("resize", updateHeight);
        };
    }, []);

    return height;
}
