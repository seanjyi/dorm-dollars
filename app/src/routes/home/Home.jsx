import React, { Component, useState } from 'react'
import { Navigate } from 'react-router-dom';
import DisplayCard from './cards/Card';
import Navbar from '../../components/Navbar';

const Home = (props) => {

    const { transactions } = props

    const [monthlyIncome, setMonthlyIncome] = useState(
        transactions.reduce((total, curr) => curr.type === "income" ? total + curr.amount : total, 0)
    )
    const [monthlyExpenses, setMonthlyExpenses] = useState(
        transactions.reduce((total, curr) => curr.type === "expense" ? total + curr.amount : total, 0)
    )


    const cards = [
        {
            title: "Monthly Earnings",
            value: monthlyIncome
        },
        {
            title: "Monthly Expenses",
            value: monthlyExpenses
        },
        {
            title: "Net Income",
            value: monthlyIncome - monthlyExpenses
        }
    ]

    const incrementIncome = () => {
        setMonthlyIncome(prev => prev + 10.73)
    }

    const incrementExpenses = () => {
        setMonthlyExpenses(prev => prev + 9.22)
    }

    if (!props.loggedIn) {
        return <Navigate to="/login" />
    }

    return (
        <>
            <h1>Welcome, {props.userData.firstName}</h1>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                {cards.map( card => {
                    return (
                        <DisplayCard title={card.title} value={card.value} />
                    )
                })}
            </div>
            <p>{JSON.stringify(props.userData)}</p>
            <button onClick={incrementIncome}>
                Increment Income
            </button>
            <button onClick={incrementExpenses}>
                Increment Expenses
            </button>
        </>
    )
}

export default Home;