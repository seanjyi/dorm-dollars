import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const Home = (props) => {

    if (!props.loggedIn) {
        return <Navigate to="/login" />
    }

    return (
        <p>{JSON.stringify(props.userData)}</p>
    )
}

export default Home;