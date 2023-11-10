import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context';

import { Box, Typography, TextField, Button } from '@mui/material';


const Login = () =>{
    const dispatch = useContext(AppContext).dispatch;
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) =>{
        e.preventDefault()

        if(email === '' && password === ''){
            alert('fill in the lines');
            return
        };

        dispatch({ type: 'LOGIN' })
        navigate('/private')
    };
    
    return (
        <Box>
            <Typography textAlign='center' variant="h2" gutterBottom >login form</Typography>
            <Box 
                m="auto"
                component='form' 
                onSubmit={handleLogin}  
                autoComplete="off"
                sx={{     
                    width: 700,
                    height: 500,
                    padding: 1,
                }}
                >
                <TextField 
                    id="email"
                    label="Email" 
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    variant="standard"
                    size='small'
                    fullWidth 
                    margin='normal'
                />
                <TextField 
                    id="password"
                    label="Password" 
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    variant="standard"
                    size='small'
                    fullWidth 
                    margin='normal'
                />
                <Box
                    component='span'
                    display='flex' 
                    justifyContent="center"
                    >
                    <Button type={"submit"}>login</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Login;