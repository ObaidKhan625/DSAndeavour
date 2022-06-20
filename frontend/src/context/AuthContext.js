import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({children}) => {
    const tokenExists = localStorage.getItem('google_access_token') ? true : false;
    let accessToken = tokenExists ? localStorage.getItem('google_access_token') : null;
    let refreshToken = tokenExists ? localStorage.getItem('google_refresh_token') : null;

    const navigate = useNavigate();

    const loginUser = async(e) => {
        e.preventDefault();
        navigate('/');
    }

    const logoutUser = async() => {
        console.log("Hey");
        localStorage.removeItem('google_access_token');
        localStorage.removeItem('google_refresh_token');
        navigate('/login');
    }

    let contextData = {
        loginUser: loginUser,
        logoutUser: logoutUser,
        tokenExists: tokenExists,
        accessToken: accessToken,
        refreshToken: refreshToken,
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}