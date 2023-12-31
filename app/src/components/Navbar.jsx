import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static" sx={{ background: 'purple' }}>
            <Toolbar sx={{mx: 4}}>
                    <Box sx={{ flexGrow: 1, display: 'flex'}}>
                        <Link to="/">
                            <Typography variant="h5" sx={{ color: 'white'}}>
                                Dorm Dollars
                            </Typography>
                        </Link>

                        <Link to="/history">
                            <Typography variant="h6" sx={{ ml: 4, color: 'white' }}>
                                History
                            </Typography>
                        </Link>
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