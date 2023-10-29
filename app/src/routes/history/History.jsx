import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import { Button, Box, Modal, Typography } from '@mui/material';

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
            <Box sx={{  }}> 
                <Button variant="contained" onClick={handleOpenAdd}>
                    Add
                </Button>

                <Button variant="contained">
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

        

                    <Button>
                        Submit
                    </Button>
                </Box>
            </Modal>

        </>
    )
}

export default History;
