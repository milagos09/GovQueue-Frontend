import QueueLayout from "./QueueLayout";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import logs from "../../../fake/logs.json";
import admins from "../../../fake/admins.json";
import Pagination from "./Pagination";
import { GetFeaturedQueues } from "../../hooks/GetFeaturedQueues";
import { UsePagination } from "../../hooks/UsePagination";
import { dark } from "./../../themes/MyTheme";

export default function QueueLayoutTabs({ tab, setTab, filteredAdmins }) {
    const n = 5;
    const topN = GetFeaturedQueues(logs, n);
    const featured = topN.map((id) => admins.find((admin) => admin.id === id));

    const itemsPerPage = n;

    // Use the usePagination hook for pagination functionality
    // const { currentPage, currentItems, handlePageChange } = UsePagination(filteredAdmins, itemsPerPage);
    const filteredPagination = UsePagination(filteredAdmins, itemsPerPage);
    const featuredPagination = UsePagination(admins, itemsPerPage);

    return (
        <Tabs
            aria-label="Queue Tabs"
            value={tab}
            onChange={(e, newValue) => setTab(newValue)}
            sx={{ borderRadius: "lg" }}
        >
            <TabList id="tab-list" sx={{ color: "grey" }}>
                <Tab
                    sx={{
                        color: "grey",
                        "&.Mui-selected": {
                            ...dark,
                            color: "azure",
                        },
                    }}
                >
                    All
                </Tab>
                <Tab
                    sx={{
                        color: "grey",
                        "&.Mui-selected": {
                            ...dark,
                            color: "azure",
                        },
                    }}
                >
                    Favorites
                </Tab>
            </TabList>

            <TabPanel value={0} sx={{ p: 2 }}>
                {featuredPagination.currentItems.map((admin) => (
                    <QueueLayout agency={admin.agency} logo={admin.logo} id={admin.id} key={admin.id} />
                ))}
                <Pagination
                    array={admins}
                    currentPage={featuredPagination.currentPage}
                    itemsPerPage={itemsPerPage}
                    handlePageChange={featuredPagination.handlePageChange}
                />
            </TabPanel>
            <TabPanel value={1} sx={{ p: 2 }}>
                {filteredPagination.currentItems.map((admin) => (
                    <QueueLayout agency={admin.agency} logo={admin.logo} id={admin.id} key={admin.id} />
                ))}
                <Pagination
                    array={filteredAdmins}
                    currentPage={filteredPagination.currentPage}
                    itemsPerPage={itemsPerPage}
                    handlePageChange={filteredPagination.handlePageChange}
                />
            </TabPanel>
        </Tabs>
    );
}
