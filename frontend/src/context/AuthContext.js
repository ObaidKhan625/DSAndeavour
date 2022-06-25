import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from "universal-cookie";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({children}) => {
    const cookies = new Cookies();
    const tokenExists = cookies.get('google_access_token') ? true : false;
    let accessToken = tokenExists ? cookies.get('google_access_token') : null;
    let refreshToken = tokenExists ? cookies.get('google_refresh_token') : null;

    const navigate = useNavigate();

    const loginUser = async(e) => {
        e.preventDefault();
        navigate('/');
    }

    const logoutUser = async() => {
        cookies.remove("google_access_token");
        cookies.remove("google_refresh_token");
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