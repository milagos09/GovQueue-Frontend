import Grid from "@mui/material/Grid";
import SearchInput from "./SearchInput";
import AgencyDetail from "./AgencyDetail";
import { useState } from "react";
import { CheckScreenSize } from "../../hooks/CheckScreenSize";
import { CheckFeaturedQueuesHeight } from "./../../hooks/CheckFeaturedQueuesHeight";
import admins from "./../../../fake/admins.json";

export default function SearchColumn() {
    const fqHeight = CheckFeaturedQueuesHeight();
    const { width } = CheckScreenSize();
    const [input, setInput] = useState("");
    const filteredAdmins = admins.filter((admin) => admin.agency.toLocaleLowerCase().includes(input));
    return (
        <Grid
            container
            sx={{
                marginY: "20px",
                border: "1px solid black",
                position: "relative",
            }}
        >
            <Grid
                item
                xs={12}
                sx={{ height: "90px", paddingY: "30px", display: "flex" }}
                justifyContent="center"
                alignItems="center"
            >
                <SearchInput search={{ input, setInput }} />
            </Grid>
            <Grid
                item
                xs={12}
                sx={{
                    border: "0px solid black",
                    paddingY: "20px",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "40px",
                    overflowY: "auto",
                    height: width < 900 ? "250px" : fqHeight - 90 - 41 + "px",
                }}
                // justifyContent="center"
                alignItems="center"
            >
                {filteredAdmins.map((admin) => (
                    <AgencyDetail agency={admin.agency} logo={admin.logo} key={admin.id} />
                ))}
            </Grid>
        </Grid>
    );
}
