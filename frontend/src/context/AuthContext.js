import { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({children}) => {
    const tokenExists = localStorage.getItem('google_access_token') ? true : false;
    let accessToken = tokenExists ? localStorage.getItem('google_access_token') : null;
    let refreshToken = tokenExists ? localStorage.getItem('google_refresh_token') : null;
    // let [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const loginUser = async(e) => {
        e.preventDefault();
        navigate('/');
    }

    const logoutUser = () => {
        localStorage.removeItem('google_access_token');
        localStorage.removeItem('google_refresh_token');
        navigate('/login');
    }

    // let updateToken = async ()=> {
    //     let response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
    //         method:'POST',
    //         headers:{
    //             'Content-Type':'application/json'
    //         },
    //         body:JSON.stringify({'refresh':authTokens?.refresh})
    //     });

    //     let data = await response.json();
        
    //     if (response.status === 200){
    //         setAuthTokens(data);
    //         setUser(jwt_decode(data.access));
    //         localStorage.setItem('authTokens', JSON.stringify(data));
    //     }else{
    //         logoutUser();
    //     }

    //     if(loading){
    //         setLoading(false);
    //     }
    // }

    // useEffect(()=> {

    //     if(loading){
    //         updateToken();
    //     }

    //     let refreshSeconds = 1000 * 60 * 4;

    //     let interval =  setInterval(()=> {
    //         if(authTokens){
    //             updateToken();
    //         }
    //     }, fourMinutes);
    //     return ()=> clearInterval(interval);

    // }, [authTokens, loading]);

    let contextData = {
        // user: user,
        loginUser: loginUser,
        logoutUser: logoutUser,
        tokenExists: tokenExists,
        accessToken: accessToken,
        refreshToken: refreshToken,
        // authTokens: authTokens
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}