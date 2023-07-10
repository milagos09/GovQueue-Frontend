import { Paper, Button } from '@mui/material';

function Item({ item }) {
    const handleClick = () => {
        window.open(item.link);
    };

    return (
        <Paper>
            <img src={item.image} alt={item.title} style={{ width: "100%", height: "45vh" }} />
            <div className='description' style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <h2>{item.title}</h2>
                <Button variant="contained" onClick={handleClick}>
                    Check it out!
                </Button>
            </div>
        </Paper>
    );
}

export default Item;