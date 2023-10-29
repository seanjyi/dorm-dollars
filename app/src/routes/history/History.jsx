import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import { Button, Box, Modal, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const History = (props) => {

    if (!props.loggedIn) {
        return <Navigate to="/login" />
    }

    const [openAdd, setOpenAdd] = React.useState(false);
    const handleOpenAdd = () => setOpenAdd(true);
    const handleCloseAdd = () => setOpenAdd(false);

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
                            <InputLabel>Age</InputLabel>
                            <Select
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                        <Typography>Amount</Typography>
                        <Typography>Method of Payment</Typography>
                        <Typography>Repayment</Typography>

                        
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
