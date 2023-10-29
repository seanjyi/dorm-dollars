import React, { Component, useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import DisplayCard from './cards/Card';
import Navbar from '../../components/Navbar';
import TransactionTable from '../../components/transactionTable';
import { renderBarChart } from '../../components/charts/charts';
import { CATEGORIES } from '../../components/constants';

const Home = (props) => {

    const { transactions, setTransactions } = props

    const [monthlyIncome, setMonthlyIncome] = useState(
        transactions.reduce((total, curr) => curr.amount > 0 ? total + curr.amount : total, 0)
    )
    const [monthlyExpenses, setMonthlyExpenses] = useState(
        transactions.reduce((total, curr) => curr.amount < 0 ? total - curr.amount : total, 0)
    )

    useEffect(() => {
        const dataPoints = CATEGORIES.map(category => {
            return {
                label: category,
                y: transactions.reduce((total, curr) => curr.amount < 0 && curr.category === category ? total - curr.amount : total, 0)
            }
        })
        setMonthlyIncome(transactions.reduce((total, curr) => curr.amount > 0 ? total + curr.amount : total, 0))
        setMonthlyExpenses(transactions.reduce((total, curr) => curr.amount < 0 ? total - curr.amount : total, 0))
        try {
            renderBarChart("Spending by Category", dataPoints)
        } catch (error) {

        }
    }, [transactions])


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
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                {cards.map( card => {
                    return (
                        <DisplayCard title={card.title} value={card.value} />
                    )
                })}
            </div>
            <button onClick={incrementIncome}>
                Increment Income
            </button>
            <button onClick={incrementExpenses}>
                Increment Expenses
            </button>
            <TransactionTable rows={ transactions.slice(0,5) }/>
            <p>{JSON.stringify(props.userData)}</p>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <div id="bar-chart-container" style={{width: "100%", borderRadius: "5px"}} />
                <div id="pie-chart-container" style={{width: "100%", borderRadius: "5px"}} />
                <div id="line-chart-container" style={{width: "100%", borderRadius: "5px"}} />
            </div>
        </>
    )
}

export default Home;