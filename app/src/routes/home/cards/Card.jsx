import React from 'react'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const DisplayCard = (props) => {
    const { title, value } = props
    const color = (title === "Net Income" ? (value > 0 ? "green" : "red") : "black")
    return (
        <Card sx={{ width: 275, height: 200, display: "flex", flexDirection: "column", justifyContent: "space-around", color: color}}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h3" component="div">
                    {"$" + value.toFixed(2)}
                </Typography>
                {/* <Typography variant="body2">
                    well meaning and kindly.
                </Typography> */}
            </CardContent>
            {/* <CardActions>
                <Button size="small">Tag</Button>
            </CardActions> */}
        </Card>
    )
}

export default DisplayCard;