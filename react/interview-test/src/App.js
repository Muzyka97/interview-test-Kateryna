import React, { createContext, useReducer } from 'react';
import { Route, Routes } from "react-router-dom";
import Login from "./page/Login/Login";
import UserPage from "./page/UserPage/UserPage";

import { Box } from '@mui/material';

export const AppContext = createContext();

const initialState = {
  isAuthenticated: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { isAuthenticated: true };
    case 'LOGOUT':
      return { isAuthenticated: false };
    default:
      return state;
  };
};

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

function App() {
  return (
    <Box>
    <AppProvider>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/private" element={<UserPage/>} />
          </Routes>
      </AppProvider>
    </Box>
  );
};

export default App;

