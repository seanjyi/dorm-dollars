import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Navbar = () => {
    return (
        <AppBar sx={{ background: 'purple' }}>
            <Toolbar sx={{mx: 4}}>
                    <Box sx={{ flexGrow: 1, display: 'flex'}}>
                        <Button href="/home">
                            <Typography variant="h5" sx={{ color: 'white'}}>
                                Dorm Dollars
                            </Typography>
                        </Button>

                        <Button href="/history" sx={{ textTransform: 'none' }}>
                            <Typography variant="h6" sx={{ ml: 4, color: 'white' }}>
                                History
                            </Typography>
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}> 
                        <Button href="/login" variant="contained" color="error">
                            Logout
                        </Button>
                    </Box>

                </Toolbar>
        </AppBar>
    )
}

export default Navbar;