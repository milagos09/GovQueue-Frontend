import SearchInput from "./SearchInput";
import { useState } from "react";
import { Box, Container } from "@mui/material";
import { Primary, Secondary } from "./../../components/Buttons";

export default function Searchbar() {
    const [input, setInput] = useState("");

    return (
        <Container maxWidth="md" sx={{ mx: "auto", my: "30px", textAlign: "center" }}>
            <SearchInput search={{ input, setInput }} />
            <Box sx={{ display: "inline", mx: "20px" }}>
                <Secondary value={"Clear"} />
                <Secondary value={"Filters"} />
            </Box>
        </Container>
    );
}
