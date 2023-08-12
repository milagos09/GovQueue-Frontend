import SearchIcon from "@mui/icons-material/Search";
import { Container, InputAdornment, TextField } from "@mui/material";

export default function SearchInput({ search }) {
    const { input, setInput } = search;
    const handleChange = (event) => {
        setInput(event.target.value);
    };

    return (
        <TextField
            id="search"
            type="search"
            label="Search"
            value={input}
            onChange={handleChange}
            sx={{ width: "50%", minWidth: "350px" }}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
        />
    );
}
