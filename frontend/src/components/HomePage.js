import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import AuthContext from '../context/AuthContext';
// import { GoogleLogin } from 'react-google-login';


function HomePage() {
  let { user, logoutUser } = useContext(AuthContext);
  return (
    <div className='myStyle'>
      { user && <p>Hey, {user.name}</p> }
      { user && <p onClick={logoutUser}>Logout</p>}
      <b>WELCOME TO STRIVER SHEET</b>
      <Button>
        <Link to="/topics">GET STARTED</Link>
      </Button> 
    </div>
  );
}

export default HomePage;