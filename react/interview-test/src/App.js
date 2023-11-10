import { Route, Routes } from "react-router-dom";
import Login from "./page/Login/Login";
import UserPage from "./page/UserPage/UserPage";
import PublicRoute from './shared/PablicRoute';
import PrivateRoute from "./shared/PrivateRoute";

import {AppProvider} from "./context.js";

import { Box } from '@mui/material';


function App() {
  return (
    <Box>
    <AppProvider>
          <Routes>
            <Route element={<PublicRoute/>}>
              <Route path="/" element={<Login/>} />
            </Route>
            <Route element={<PrivateRoute/>}>
              <Route path="/private" element={<UserPage/>} />
            </Route>
          </Routes>
      </AppProvider>
    </Box>
  );
};

export default App;

