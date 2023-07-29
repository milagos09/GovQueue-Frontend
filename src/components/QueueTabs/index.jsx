import FeaturedTab from "./FeaturedTab";
import FilteredTab from "./FilteredTab";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import logs from "../../../fake/logs.json";
import admins from "../../../fake/admins.json";
import Box from "@mui/material/Box";
import { Pagination } from "@mui/material";
import { GetFeaturedQueues } from "../../hooks/GetFeaturedQueues";
import { UsePagination } from "../../hooks/UsePagination";
import { dark } from "./../../themes/MyTheme";

export default function QueueTabs({ tab, setTab, filteredAdmins }) {
    const n = 3;
    const topN = GetFeaturedQueues(logs, n);
    const featured = topN.map((id) => admins.find((admin) => admin.id === id));

    const itemsPerPage = n;

    // Use the usePagination hook for pagination functionality
    const { currentPage, currentItems, handlePageChange } = UsePagination(filteredAdmins, itemsPerPage);

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
                    Featured
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
                    Filtered
                </Tab>
            </TabList>

            <TabPanel value={0} sx={{ p: 2 }}>
                {featured.map((admin) => (
                    <FeaturedTab agency={admin.agency} logo={admin.logo} key={admin.id} />
                ))}
            </TabPanel>
            <TabPanel value={1} sx={{ p: 2 }}>
                {currentItems.map((admin) => (
                    <FilteredTab agency={admin.agency} logo={admin.logo} key={admin.id} />
                ))}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: 2,
                    }}
                >
                    <Pagination
                        count={Math.ceil(filteredAdmins.length / itemsPerPage)}
                        page={currentPage}
                        variant="outlined"
                        onChange={handlePageChange}
                    />
                </Box>
            </TabPanel>
        </Tabs>
    );
}
