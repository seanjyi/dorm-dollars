import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Navbar = () => {

    return (
        <AppBar>
            <Toolbar sx={{mx: 4}}>
                    <Box sx={{ flexGrow: 1, display: 'flex'}}>
                        <Typography variant="h5">
                            Dorm Dollars
                        </Typography>

                        <Typography variant="h6" sx={{ml: 4}}>
                            History
                        </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 0, alignItems: 'center' }}>                       
                        <Button variant="contained" color="error">
                            Outlined
                        </Button>
                    </Box>

                </Toolbar>
        </AppBar>
    )
}

export default Navbar;