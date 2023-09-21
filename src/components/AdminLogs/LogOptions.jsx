import { Primary } from "./../Buttons/";
import { Stack, Box, Switch, FormControlLabel, FormGroup } from "@mui/material";
import DownloadCSVButton from "./DownloadCSVButton";
import { socket } from "./../../helpers/socket";
import { useState } from "react";
import { useEffect } from "react";

export default function LogOptions({ logs, agency }) {
    const [svg, setSVG] = useState(null);

    const analyze = () => {
        console.log(logs);
        const names = [...new Set(logs.map((log) => log.name))];
        console.log(names);
        let counts = [];
        names.forEach((name) => {
            counts.push({ name: name, count: logs.filter((log) => log.name == name).length });
        });
        console.log(counts);
        socket.emit("analyzeLogs", { logs, counts });
    };
    useEffect(() => {
        socket.on("analyzeLogs", (svgMarkup) => {
            setSVG(svgMarkup);
            // console.log(svgMarkup);
        });
    }, []);

    return (
        <Box sx={{ my: 4 }}>
            <Stack
                direction={{ xs: "col", sm: "row" }}
                justifyContent="space-between"
                alignItems="center"
                spacing={5}
                rowGap={3}
            >
                <FormGroup>
                    <FormControlLabel control={<Switch defaultChecked />} label="Always Show Logs" />
                </FormGroup>
                <Box>
                    <DownloadCSVButton logs={logs} agency={agency} />
                    <Primary value={"Analyze"} onClick={analyze} />
                </Box>
            </Stack>
            <div dangerouslySetInnerHTML={{ __html: svg }} />
        </Box>
    );
}
