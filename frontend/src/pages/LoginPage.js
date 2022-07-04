import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleLogin from "react-google-login";
import axios from "axios";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Font from 'react-font';
import Typography from '@mui/material/Typography';
import googleLogo from '../assets/google-logo.png';
import Footer from '../components/footer/Footer';
import LoadingScreen from 'react-loading-screen';
import Cookies from "universal-cookie";
import AuthContext from '../context/AuthContext';
import {NotificationContainer, NotificationManager} from 'react-notifications';
const apiBaseURL = "http://localhost:8000";
const appBaseURL = "http://localhost:3000";

// Will be deprecated
const googleClientId = '673674178296-u69af3bdvpoc06oqji8ht8niau7ooocv.apps.googleusercontent.com';
const drfClientId = 'd36WcE0lMyg7mMDep9srtAlBzT94GYLbobHAkWCp';
const drfClientSecret = '1Cgsn7mX4BN07Pc4mApWaxWUBLq0nLTIjEAG9aNVDWKhcED3hGcU1zZIk6aUriAFljARcgUg84ntF88tN2x9qf1VglPbmQ1HPEZlr8yirtYMQS1mRruICWoRUqvEkwAD';

const createErrorNotification = () => {
  alert("An Error Occurred!");
  return () => {
    NotificationManager.error('Login Failed!', 'Error!')};
};

const LoginPage = () => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { accessToken } = useContext(AuthContext);
  const authenticated = (accessToken ? true : false);
  
  useEffect(() => {
    if(authenticated) {
      navigate('/');
    }
  }, []);

  const handleGoogleLogin = (response) => {
    setLoading(true);
    axios
      .post(`${apiBaseURL}/auth/convert-token`, {
        token: response.accessToken,
        backend: "google-oauth2",
        grant_type: "convert_token",
        client_id: drfClientId,
        client_secret: drfClientSecret,
      })
      .then((res) => {
        const { access_token, refresh_token } = res.data;
        const cookies = new Cookies();
        cookies.remove("google_access_token");
        cookies.remove("google_refresh_token");
        cookies.set("google_access_token", access_token, {path: "/", maxAge: 24*60*60});
        cookies.set("google_refresh_token", refresh_token, {path: "/", maxAge: 24*60*60});
        setLoading(false);
        window.location.href = `${appBaseURL}/`;
      })
      .catch((err) => {
        setLoading(false);
        createErrorNotification();
      });
  };

  return (
    <div>
      <LoadingScreen
        loading={loading}
        bgColor='linear-gradient(to right, #f64f59, #c471ed, #12c2e9);'
        spinnerColor='#9ee5f8'
        textColor='black'
        text='Please Wait'
      > 
        <Container style={{'backgroundColor': 'rgba(255, 255, 255, 0.2)', 
        'height': '100vh', 'boxShadow': '0 4px 30px rgba(0, 0, 0, 0.1)', 'paddingTop': '300px'}}>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={3}>
              <Font family="Lobster">
                <h1 style={{'textAlign':' center', 'color': 'black'}}>
                  Track Your Progress On The Striver Sheet
                </h1>
              </Font>
            </Grid>
          </Grid> 
          <br />
          <br />
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={3}>
              <GoogleLogin
              clientId={googleClientId}
              buttonText="LOGIN WITH GOOGLE"
              onSuccess={(response) => handleGoogleLogin(response)}
              render={(renderProps) => (
                <Button onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                style={{'backgroundColor': 'white', 'margin': '0 auto', 'display': 'flex', 'padding': '20px', 
                'borderRadius': '10px'}}
                >
                  <img src={googleLogo} height="30px" width="30px" alt="fireSpot"/>
                  <Typography style={{'marginLeft': '20px', 'color': 'black'}} fontSize="20px" textTransform = 'none'>
                    <b>Sign in with Google</b>
                  </Typography>
                </Button>
              )}
              onFailure={(err) => console.log("Google Login failed", err)}
              />
            </Grid>
          </Grid> 
          <Footer/>
        </Container>
      </LoadingScreen>
      <NotificationContainer/>
    </div>
  )
}

export default LoginPage