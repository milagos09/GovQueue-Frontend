import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState, useEffect } from "react";
import { gold } from "../../themes/MyTheme";

export default function Favorites({ id }) {
    const [isFavorite, setFavorite] = useState(false); // Initialize with false
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const existingFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(existingFavorites);
        setFavorite(existingFavorites.includes(id));
    }, [id]);

    const toFavorites = () => {
        if (typeof localStorage !== "undefined") {
            if (isFavorite) {
                setFavorite(false);
                const updatedFavorites = favorites.filter((f) => f !== id);
                setFavorites(updatedFavorites);
                localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
            } else {
                setFavorite(true);
                const updatedFavorites = [...favorites, id];
                setFavorites(updatedFavorites);
                localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
            }
        }
    };
    return (
        <>
            {isFavorite ? (
                <FavoriteIcon sx={{ ...gold }} onClick={toFavorites} />
            ) : (
                <FavoriteBorder onClick={toFavorites} />
            )}
        </>
    );
}
