import MuiCarousel from "react-material-ui-carousel";
import Item from "./Item";
import slider from "./../../../fake/slider.json";

export default function Carousel() {
    return (
        <MuiCarousel animation="fade">
            {slider.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </MuiCarousel>
    );
}
