import React, { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context';

import { Box, Typography, Button } from '@mui/material';

const UserPage = () =>{
    const {state, dispatch} = useContext(AppContext);
    const navigate = useNavigate();
    
    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/');
    };
    
    if(!state.isAuthenticated){
        <Navigate to="/"/>
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
