import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import { Button, Box, Modal, Typography, InputLabel, MenuItem, FormControl, Select, OutlinedInput, InputAdornment } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { CATEGORIES, MOP } from '../../components/constants';

const History = (props) => {

    if (!props.loggedIn) {
        return <Navigate to="/login" />
    }

    // add modal form
    const [openAdd, setOpenAdd] = React.useState(false);
    const handleOpenAdd = () => setOpenAdd(true);
    const handleCloseAdd = () => setOpenAdd(false);

    // var for category
    const [cat, setCat] = React.useState('');
    const handleCat = (event) => {
        setCat(event.target.value);
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

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', my: 4 }}> 
                <Button variant="contained" onClick={handleOpenAdd}>
                    Add
                </Button>

                <Button variant="contained" sx={{ ml: 2 }}>
                    Filter
                </Button>
            </Box>

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
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label="Basic date picker" />
                        </LocalizationProvider>

                        <Typography>Category</Typography>
                        <FormControl fullWidth>
                            <InputLabel>Category</InputLabel>
                            <Select
                                value={CATEGORIES}
                                label="Category"
                                onChange={handleCat}
                            >
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
                            />
                        </FormControl>

                        <Typography>Method of Payment</Typography>
                        <FormControl fullWidth>
                            <InputLabel>Method of Payment</InputLabel>
                            <Select
                                value={MOP}
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
                    
                    <Button>
                        Submit
                    </Button>
                </Box>
            </Modal>

        </>
    )
}

export default History;
