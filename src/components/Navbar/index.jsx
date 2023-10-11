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
import { CheckScreenSize } from "../../hooks/CheckScreenSize";

export default function NavBar() {
    const { width } = CheckScreenSize();
    const { showSearch } = searchStore();

    return (
        <AppBar position="sticky" sx={{ paddingY: "7px", ...dark }}>
            <Toolbar>
                <Grid container justifyContent={"space-between"} alignItems={"center"}>
                    <Grid item>
                        <Box sx={{ display: "flex", alignItems: "center", columnGap: 2 }}>
                            {width <= 713 && <HamburgerMenu />}
                            <AppName />
                        </Box>
                    </Grid>
                    {width > 713 && (
                        <Grid item>
                            <NavLink />
                        </Grid>
                    )}
                    <Grid item flexGrow={width < 486 ? 1 : 0} sx={{ px: 1 }}>
                        {showSearch ? <Search /> : <DateTime />}
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
