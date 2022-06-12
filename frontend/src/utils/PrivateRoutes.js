import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const PrivateRoutes = () => {
    const { user } = useContext(AuthContext);
    const authenticated = (user ? true : false);
    return(
        authenticated ? <Outlet /> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes;