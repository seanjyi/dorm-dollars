import React, { Component, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Button, Box, Modal, Typography, InputLabel, MenuItem, FormControl, Select, OutlinedInput, InputAdornment } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { CATEGORIES, MOP } from '../../components/constants';
import TransactionTable from '../../components/transactionTable';
import { addTransaction, fetchTransactions } from '../../api/connector';

const History = (props) => {

    const { transactions } = props;
    const [rows, setRows] = useState(transactions)

    if (!props.loggedIn) {
        return <Navigate to="/login" />
    }

    // Add modal vars: date, cat, amo, mop
    // Filter modal vars: fCat, startDate, endDate

    // add modal form
    const [openAdd, setOpenAdd] = React.useState(false);
    const handleOpenAdd = () => setOpenAdd(true);
    const handleCloseAdd = () => setOpenAdd(false);

    // var for date
    const [date, setDate] = React.useState('');
    const handleDate = (value) => {
        setDate(value);
    }   

    // var for category
    const [cat, setCat] = React.useState('');
    const handleCat = (event) => {
        setCat(event.target.value);
    };

    // var for amount
    const [amo, setAmo] = React.useState('');
    const handleAmo = (event) => {
        setAmo(event.target.value);
    };

    // var for mop
    const [mop, setMop] = React.useState('');
    const handleMop = (event) => {
        setMop(event.target.value);
    };

    // filter modal form
    const [openFilter, setOpenFilter] = React.useState(false);
    const handleOpenFilter = () => setOpenFilter(true);
    const handleCloseFilter = () => setOpenFilter(false);

    // var for start date
    const [startDate, setStartDate] = React.useState('');
    const filterStartDate = (value) => {
        setStartDate(value);
    }   

    // var for end date
    const [endDate, setEndDate] = React.useState('');
    const filterEndDate = (value) => {
        setEndDate(value);
    }   

    // var for category
    const [fCat, setFilterCat] = React.useState('');
    const filterCat = (event) => {
        setFilterCat(event.target.value);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'purple',
        color: 'white',
        boxShadow: 24,
        p: 4,
    };

    const handleAddSubmit = (e) => {
        e.preventDefault();
        let data = {
            'userid': props.userData.userId,
            'amount': amo,
            // 'date': (date.$d.getYear() + 1900) + '-' + (date.$d.getMonth() + 1) + ,
            'date': date,
            'category': cat,
            'method_of_payment': mop
        }

        addTransaction(data)
        setAmo('')
        setDate('')
        setCat('')
        setMop('')

        data = {
            'userid': "" + props.userData.userId,
            'category': "",
            'start_date': "",
            'end_date': ""
        }
        fetchTransactions(data, props.setTransactions)
    }

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', my: 4 }}> 
                <Button variant="contained" onClick={handleOpenAdd}>
                    Add
                </Button>

                <Button variant="contained" onClick={handleOpenFilter} sx={{ ml: 2 }}>
                    Filter
                </Button>
            </Box>
            <TransactionTable rows={rows}/>

            <Modal
                open={openAdd}
                onClose={handleCloseAdd}
            >
                <Box sx={style}>
                    <Typography variant="h6">
                        Add transaction
                    </Typography>

                    <Box sx={{
                        display: 'grid',
                        gap: 3,
                        gridTemplateColumns: 'repeat(2, 1fr)',
                    }}>
                        <Typography>Date</Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DatePicker label="Date" onChange={handleDate} value={date} / >
                        </LocalizationProvider>

                        <Typography>Category</Typography>
                        <FormControl fullWidth>
                            <InputLabel>Category</InputLabel>
                            <Select value={cat} label="Category" onChange={handleCat}>
                                {
                                    CATEGORIES.map(cat => {
                                        return <MenuItem value={cat}>{cat}</MenuItem>
                                    })
                                }
                            </Select>
                        </FormControl>

                        <Typography>Amount</Typography>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel>Amount</InputLabel>
                            <OutlinedInput
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                label="Amount"
                                value={amo}
                                onChange={handleAmo}
                            />
                        </FormControl>

                        <Typography>Method of Payment</Typography>
                        <FormControl fullWidth>
                            <InputLabel>Method of Payment</InputLabel>
                            <Select
                                value={mop}
                                label="Method of Payment"
                                onChange={handleMop}
                            >
                                {
                                    MOP.map(m => {
                                        return <MenuItem value={m}>{m}</MenuItem>
                                    })
                                }
                            </Select>
                        </FormControl>                        
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
                        <Button variant="contained" onClick={handleAddSubmit}>
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Modal>

            <Modal
                open={openFilter}
                onClose={handleCloseFilter}
            >
                <Box sx={style}>
                    <Typography variant="h6">
                        Filter
                    </Typography>
                   
                    <Box sx={{
                        display: 'grid',
                        gap: 3,
                        gridTemplateColumns: 'repeat(2, 1fr)',
                    }}>
                        <Typography>Category</Typography>
                        <FormControl fullWidth>
                            <InputLabel>Category</InputLabel>
                            <Select value={fCat} label="Category" onChange={filterCat}>
                                {
                                    CATEGORIES.map(c => {
                                        return <MenuItem value={c}>{c}</MenuItem>
                                    })
                                }
                            </Select>
                        </FormControl>

                        <Typography>Start Date</Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label="Start Date" onChange={filterStartDate} value={startDate} />
                        </LocalizationProvider>

                        <Typography>End Date</Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label="End Date" onChange={filterEndDate} value={endDate} />
                        </LocalizationProvider>
                    
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
                        <Button variant="contained">
                            Update
                        </Button>
                    </Box>
                </Box>
            </Modal>

        </>
    )
}

export default History;
