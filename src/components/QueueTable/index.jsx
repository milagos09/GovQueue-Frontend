import CollapsibleTable from "./CollapsibleTable";
// import admins from "./../../../fake/admins.json";
// import queues from "./../../../fake/queues.json";
import QueueTabs from "./QueueTabs";
import { CheckScreenSize } from "../../hooks/CheckScreenSize";
import { useEffect, useState } from "react";
import queuesStore from "../../stores/queuesStore";
import agencyStore from "../../stores/agencyStore";
import FetchData from "../../hooks/FetchData";
import LoadingScreen from "../LoadingScreen";

export default function QueueTable({ search }) {
    const { fetchData, isFetching } = FetchData();
    const { agencies } = agencyStore();
    const { queues } = queuesStore();
    const { width } = CheckScreenSize();
    const localStorageFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const [favorites, setFavorites] = useState(localStorageFavorites);
    // const [agencies, setAgencies] = useState([]);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    useEffect(() => {
        (async () => {
            // const result = await fetchData("https://govqueue-api.onrender.com/agencies");
            // setAgencies(result);
        })();
    }, []);

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
                    admins={agenciesWithQueues}
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
                    admins={agenciesWithQueuesFavorites}
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
            <LoadingScreen isFetching={isFetching} />
            <QueueTabs contents={contents} width={width} />
        </>
    );
}
