import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

function Item(props) {
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <div style={{ width: '100%', height: '300px', backgroundColor: 'lightgray', textAlign: 'center', fontSize: '50px' }}>100% x 300 
            </div>
            <p>{props.item.description}</p>
        </Paper>
    );
}

export default function Example(props) {
    let items = [
        {
            name: "",
            description: ""
        },
        {
            name: "",
            description: ""
        }
    ];

    return (
        <Carousel>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    );
}