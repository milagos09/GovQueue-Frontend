import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";

function CustomTabPanel(props) {
    const { children, value, index, width, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ py: 3, px: width < 600 ? 0 : 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index, name) {
    return {
        id: `queue-tab-${name}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export default function QueueTabs({ contents, width }) {
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
                    aria-label="queue-tabs"
                    textColor="inherit"
                    TabIndicatorProps={{ style: { background: "#FC9300", height: "4px" } }}
                    centered
                    selectionFollowsFocus
                >
                    {contents.map((content, i) => (
                        <Tab key={i} sx={{ mx: "20px" }} label={content.name} {...a11yProps(i, content.name)} />
                    ))}
                </Tabs>
            </Box>
            <div className="tab-content-container">
                {contents.map((content, i) => (
                    <div className={`tab-content ${value === i ? "active" : ""}`} key={i}>
                        <CustomTabPanel value={value} index={i} width={width}>
                            {content.component}
                        </CustomTabPanel>
                    </div>
                ))}
            </div>
        </Box>
    );
}
