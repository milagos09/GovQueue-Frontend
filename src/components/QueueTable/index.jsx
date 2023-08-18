import CollapsibleTable from "./CollapsibleTable";
import admins from "./../../../fake/admins.json";
import queues from "./../../../fake/queues.json";
import QueueTabs from "./QueueTabs";
import { CheckScreenSize } from "../../hooks/CheckScreenSize";
import { useEffect, useState } from "react";

export default function QueueTable({ search }) {
    const { width } = CheckScreenSize();
    const localStorageFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const [favorites, setFavorites] = useState(localStorageFavorites);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const adminsWithQueue = admins
        .filter((admin) => admin.agency.toLowerCase().includes(search.toLowerCase()))
        .map((admin) => {
            return { ...admin, queues: queues.filter((q) => q.adminId === admin.id) };
        });

    const adminsWithQueueFavorites = adminsWithQueue.filter((admin) => favorites.includes(admin.id));
    const contents = [
        {
            name: "All Queues",
            component: (
                <CollapsibleTable
                    admins={adminsWithQueue}
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
                    admins={adminsWithQueueFavorites}
                    search={search}
                    favorites={favorites}
                    setFavorites={setFavorites}
                    width={width}
                />
            ),
        },
    ];
    return <QueueTabs contents={contents} width={width} />;
}
