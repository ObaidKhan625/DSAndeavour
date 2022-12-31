import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from "universal-cookie";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({children}) => {
    const cookies = new Cookies();
    const tokenExists = cookies.get('dsandeavour_access_token') ? true : false;
    const accessToken = tokenExists ? cookies.get('dsandeavour_access_token') : null;

    const navigate = useNavigate();

    const loginUser = async(e) => {
        e.preventDefault();
        navigate('/');
    }

    const logoutUser = async() => {
        cookies.remove("dsandeavour_access_token");
        cookies.remove("dsandeavour_username");
        cookies.remove("dsandeavour_picture");
        navigate('/login');
    }

    let contextData = {
        loginUser: loginUser,
        logoutUser: logoutUser,
        tokenExists: tokenExists,
        accessToken: accessToken,
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}