import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index, name) {
    return {
        id: `queue-tab-${name}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export default function QueueTabs({ contents }) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%", mt: "20px" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="queue tabs"
                    textColor=""
                    TabIndicatorProps={{ style: { background: "#FC9300", height: "4px" } }}
                    centered
                    selectionFollowsFocus
                >
                    {/* <Tab label="Show All" {...a11yProps(0)} />
                    <Tab label="Show Favorites" {...a11yProps(1)} /> */}
                    {contents.map((content, i) => (
                        <Tab key={i} sx={{ mx: "20px" }} label={content.name} {...a11yProps(i, content.name)} />
                    ))}
                </Tabs>
            </Box>
            <div className="tab-content-container">
                {contents.map((content, i) => (
                    <div className={`tab-content ${value === i ? "active" : ""}`} key={i}>
                        <CustomTabPanel value={value} index={i}>
                            {content.component}
                        </CustomTabPanel>{" "}
                    </div>
                ))}
            </div>
        </Box>
    );
}
