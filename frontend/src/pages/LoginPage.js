import React, { useContext } from 'react';
import GoogleLogin from "react-google-login";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Font from 'react-font';
import Typography from '@mui/material/Typography';
import googleLogo from '../assets/google-logo.png';
const apiBaseURL = "http://localhost:8000";
const appBaseURL = "http://localhost:3000";

const googleClientId = 'abc';
const drfClientId = 'abc';
const drfClientSecret = 'abc';

const handleGoogleLogin = (response) => {
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
      localStorage.removeItem("google_access_token");
      localStorage.removeItem("google_refresh_token");
      localStorage.setItem("google_access_token", access_token);
      localStorage.setItem("google_refresh_token", refresh_token);
      console.log({ 'access_token': access_token, 'refresh_token': refresh_token });
      window.location.href = `${appBaseURL}/`;
    })
    .catch((err) => {
      console.log("Error Google login", err);
      return false;
    });
};

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div>
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
              style={{'backgroundColor': 'white', 'margin': '0 auto', 'display': 'flex', 'padding': '20px'}}
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
      </Container>
    </div>
  )
}

export default LoginPage