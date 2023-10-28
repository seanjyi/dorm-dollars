import React, { Component } from 'react'
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

const Home = () => {

    if (!props.loggedIn) {
        return <Navigate to="/login" />
    }

    return (
        <AppBar>
            <Typography variant="h6" >
                Dorm Dollars
            </Typography>
        </AppBar>
    )
}

export default Home;