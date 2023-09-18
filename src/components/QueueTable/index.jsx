import CollapsibleTable from "./CollapsibleTable";
import QueueTabs from "./QueueTabs";
import { CheckScreenSize } from "../../hooks/CheckScreenSize";
import { useEffect, useState } from "react";
import queuesStore from "../../stores/queuesStore";
import agencyStore from "../../stores/agencyStore";

export default function QueueTable({ search }) {
    const { agencies } = agencyStore();
    const { queues } = queuesStore();
    const { width } = CheckScreenSize();
    const localStorageFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const [favorites, setFavorites] = useState(localStorageFavorites);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const agenciesWithQueues = agencies
        .filter((agency) => agency.name.toLowerCase().includes(search.toLowerCase()))
        .map((agency) => {
            return { ...agency, queues: queues.filter((q) => q.agency_id === agency.agency_id) };
        });

    const agenciesWithQueuesFavorites = agenciesWithQueues.filter((agency) => favorites.includes(agency.agency_id));
    const contents = [
        {
            name: "All Queues",
            component: (
                <CollapsibleTable
                    agencies={agenciesWithQueues}
                    search={search}
                    favorites={favorites}
                    setFavorites={setFavorites}
                    width={width}
                />
            ),
        },
        {
            name: "Favorites",
            component: (
                <CollapsibleTable
                    agencies={agenciesWithQueuesFavorites}
                    search={search}
                    favorites={favorites}
                    setFavorites={setFavorites}
                    width={width}
                />
            ),
        },
    ];

    return (
        <>
            <QueueTabs contents={contents} width={width} />
        </>
    );
}
