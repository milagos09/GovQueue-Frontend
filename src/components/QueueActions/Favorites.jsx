import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { gold } from "../../themes/MyTheme";

export default function Favorites({ id, isFavorite, toggleFavorite }) {
    return (
        <>
            {isFavorite ? (
                <FavoriteIcon sx={{ ...gold }} onClick={() => toggleFavorite(id, isFavorite)} />
            ) : (
                <FavoriteBorder onClick={() => toggleFavorite(id, isFavorite)} />
            )}
        </>
    );
}
