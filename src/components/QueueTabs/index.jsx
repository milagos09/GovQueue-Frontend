import React, { useState } from "react";
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

export default function QueueTabs() {
    const n = 3;
    const topN = GetFeaturedQueues(logs, n);
    const featured = topN.map((id) => admins.find((admin) => admin.id === id));

    const itemsPerPage = n;

    // Use the usePagination hook for pagination functionality
    const { currentPage, currentItems, handlePageChange } = UsePagination(admins, itemsPerPage);

    return (
        <Tabs aria-label="Queue Tabs" defaultValue={0} sx={{ borderRadius: "lg" }}>
            <TabList id="tab-list">
                <Tab
                    sx={{
                        "&.Mui-selected": {
                            backgroundColor: "#1976D2",
                            color: "white",
                        },
                    }}
                >
                    Featured
                </Tab>
                <Tab
                    sx={{
                        "&.Mui-selected": {
                            backgroundColor: "#1976D2",
                            color: "white",
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
                        count={Math.ceil(admins.length / itemsPerPage)}
                        page={currentPage}
                        variant="outlined"
                        color="primary"
                        onChange={handlePageChange}
                    />
                </Box>
            </TabPanel>
        </Tabs>
    );
}
