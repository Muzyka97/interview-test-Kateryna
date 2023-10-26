import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../App';

import { Box, Typography, Button } from '@mui/material';

const UserPage = () =>{
    const dispatch = useContext(AppContext).dispatch;
    const navigate = useNavigate();
    
    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/');
    };
    
    return (
        <Box>
            <Typography textAlign='center' variant="h2" gutterBottom >Hi Marcus!</Typography>
            <Box
                component='span'
                display='flex' 
                justifyContent="center"
                >
                <Button onClick={handleLogout}>logout</Button>
            </Box>
        </Box>
    );
};

export default UserPage;
