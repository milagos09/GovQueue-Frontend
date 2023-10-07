import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavLink from "./NavLink";
import AppName from "./AppName";
import HamburgerMenu from "./HamburgerMenu";
import { dark } from "./../../themes/MyTheme";
import Search from "./Search";
import DateTime from "./DateTime";
import searchStore from "../../stores/searchStore";
import { Box, Grid } from "@mui/material";

export default function NavBar() {
    const { showSearch } = searchStore();

    return (
        <AppBar position="sticky" sx={{ paddingX: "20px", ...dark }}>
            <Toolbar>
                <Grid container justifyContent={"space-between"} alignItems={"center"}>
                    <Grid item grow>
                        <Box sx={{ display: "flex", alignItems: "center", columnGap: 2 }}>
                            <HamburgerMenu />
                            <AppName />
                        </Box>
                    </Grid>
                    <Grid item grow justifySelf={"flex-end"}>
                        <NavLink />
                    </Grid>
                    <Grid item grow>
                        {showSearch ? <Search /> : <DateTime />}
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
