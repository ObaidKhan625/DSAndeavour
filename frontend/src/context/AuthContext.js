import { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({children}) => {
    const tokenExists = localStorage.getItem('authTokens') ? true : false;
    let [authTokens, setAuthTokens] = useState(() => tokenExists ? JSON.parse(localStorage.getItem('authTokens')) : null);
    let [user, setUser] = useState(() => tokenExists ? jwt_decode(localStorage.getItem('authTokens')) : null);
    let [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const loginUser = async(e) => {
        e.preventDefault();
        let response = await fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'username': e.target.username.value, 'password': e.target.password.value})
        })
        let data = await response.json();
        var token_json = jwt_decode(data.access);
        if(response.status === 200) {
            setAuthTokens(data);
            setUser(token_json);
            localStorage.setItem('authTokens', JSON.stringify(data));
            navigate('/');
        }
    }

    const logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem('authTokens');
        navigate('/login');
    }

    let updateToken = async ()=> {
        let response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'refresh':authTokens?.refresh})
        });

        let data = await response.json();
        
        if (response.status === 200){
            setAuthTokens(data);
            setUser(jwt_decode(data.access));
            localStorage.setItem('authTokens', JSON.stringify(data));
        }else{
            logoutUser();
        }

        if(loading){
            setLoading(false);
        }
    }

    useEffect(()=> {

        if(loading){
            updateToken();
        }

        let fourMinutes = 1000 * 60 * 4;

        let interval =  setInterval(()=> {
            if(authTokens){
                updateToken();
            }
        }, fourMinutes);
        return ()=> clearInterval(interval);

    }, [authTokens, loading]);

    let contextData = {
        user: user,
        loginUser: loginUser,
        logoutUser: logoutUser,
        authTokens: authTokens
    }

    return(
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}