import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'

const History = (props) => {

    if (!props.loggedIn) {
        return <Navigate to="/login" />
    }

    return (
        <>
            <p>History</p>
        </>
    )
}

export default History;
