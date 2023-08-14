import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { gold } from "../../themes/MyTheme";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function ToggleFavorites({ showFavorites, setShowFavorites }) {
    return (
        <Tooltip arrow placement="top" title="Show Favorites">
            <IconButton aria-label="show favorites" onClick={() => setShowFavorites(!showFavorites)}>
                {showFavorites ? (
                    <FavoriteIcon sx={{ ...gold }} fontSize="large" />
                ) : (
                    <FavoriteBorder fontSize="large" />
                )}
            </IconButton>
        </Tooltip>
    );
}
