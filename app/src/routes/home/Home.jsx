import React, { Component, useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import DisplayCard from './cards/Card';
import Navbar from '../../components/Navbar';
import TransactionTable from '../../components/transactionTable';
import { renderBarChart, renderPieChart } from '../../components/charts/charts';
import { CATEGORIES, MOP } from '../../components/constants';

const Home = (props) => {

    const { transactions, setTransactions } = props

    const [monthlyIncome, setMonthlyIncome] = useState(
        transactions.reduce((total, curr) => curr.amount > 0 ? total + curr.amount : total, 0)
    )
    const [monthlyExpenses, setMonthlyExpenses] = useState(
        transactions.reduce((total, curr) => curr.amount < 0 ? total - curr.amount : total, 0)
    )

    useEffect(() => {
        
        const totalSpent = transactions.reduce((total, curr) => curr.amount < 0 ? total - curr.amount : total, 0)
        const dataPoints = CATEGORIES.map(category => {
            return {
                label: category,
                y: transactions.reduce((total, curr) => curr.amount < 0 && curr.category === category ? total - curr.amount : total, 0)
            }
        })
        const pieData = MOP.map(method => {
            return {
                label: method,
                y: transactions.reduce((total, curr) => curr.amount < 0 && curr.method_of_payment === method ? total - curr.amount : total, 0) / totalSpent * 100
            }
        })
        console.log(pieData, totalSpent)
        setMonthlyIncome(transactions.reduce((total, curr) => curr.amount > 0 ? total + curr.amount : total, 0))
        setMonthlyExpenses(transactions.reduce((total, curr) => curr.amount < 0 ? total - curr.amount : total, 0))
        try {
            renderBarChart("Spending by Category", dataPoints)
            renderPieChart("Spending by Payment Method", pieData)
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

    if (!props.loggedIn) {
        return <Navigate to="/login" />
    }

    transactions.sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
    })

    return (
        <>
            <h1>Welcome, {props.userData.firstName}</h1>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: "30px"}}>
                {cards.map( card => {
                    return (
                        <DisplayCard title={card.title} value={card.value} />
                    )
                })}
            </div>
            <TransactionTable rows={ transactions.slice(0,5) }/>
            <div id="bar-chart-container" style={{width: "100%", height: "400px", borderRadius: "5px", margin: "30px 0", paddingTop: "20px", backgroundColor: "white"}} />
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <div id="pie-chart-container" style={{width: "100%", height: "400px", borderRadius: "5px", marginBottom: "50px", marginTop: "20px", paddingTop: "20px", backgroundColor: "white"}} />
                {/* <div id="line-chart-container" style={{width: "45%", height: "400px", borderRadius: "5px"}} /> */}
            </div>
        </>
    )
}

export default Home;