import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

function Item(props) {
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
        </Paper>
    );
}

export default function Example(props) {
    let items = [
        {
            name: "Picture 1",
            description: ""
        },
        {
            name: "Picture 2",
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