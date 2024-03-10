import React, { useState, useEffect } from "react";
import GoogleButton from 'react-google-button';
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Font from "react-font";
import Typography from "@mui/material/Typography";
import Footer from "../../components/footer/Footer";
import LoadingScreen from "react-loading-screen";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import "./Login.css";


const apiBaseURL = process.env.REACT_APP_API_URL;
const appBaseURL = process.env.REACT_APP_APP_URL;

const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const cookies = new Cookies();
    cookies.remove("dsandeavour_topics_pinned");
    cookies.remove("dsandeavour_problem_status");
    if(cookies.get("dsandeavour_access_token")) {
      navigate('/');
    }
  }, []);

  const handleBrowsing = () => {
    const cookies = new Cookies();
    cookies.remove("dsandeavour_access_token");
    cookies.remove("dsandeavour_topics_pinned");
    cookies.remove("dsandeavour_problem_status");
    cookies.set("dsandeavour_topics_pinned", "0".repeat(31), { 
      path: "/", 
      maxAge: 30 * 60 
    });
    cookies.set("dsandeavour_problem_status", "0".repeat(195), {
      path: "/",
      maxAge: 30 * 60,
    });
    window.location.href = `${appBaseURL}/`;
  };

  const onGoogleLoginSuccess = () => {
    setLoading(true);
    let response = fetch(`${apiBaseURL}/api/ping/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });
    response.then(
      res => {
        const googleAuthUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
        const redirectUri = 'api/v1/auth/login/google/';

        const scope = [
          'https://www.googleapis.com/auth/userinfo.email',
          'https://www.googleapis.com/auth/userinfo.profile'
        ].join(' ');

        const params = {
          response_type: 'code',
          client_id: googleClientId,
          redirect_uri: `${apiBaseURL}/${redirectUri}`,
          prompt: 'select_account',
          access_type: 'offline',
          scope
        };
        const urlParams = new URLSearchParams(params).toString();
        setLoading(false);
        window.location = `${googleAuthUrl}?${urlParams}`;
      }
    )
  };

  return (
    <div>
      <LoadingScreen
        loading={loading}
        bgColor="linear-gradient(to right, #ffc3a0, #ffafbd);"
        spinnerColor="#9ee5f8"
        textColor="black"
        text="Please Wait"
      >
        <Container
          className="login__container"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            height: "100vh",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            paddingTop: "240px",
          }}
        >
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={3}>
              <Font family="Lobster">
                <h1 style={{ textAlign: " center", color: "black" }}>
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
            <GoogleButton
              onClick={onGoogleLoginSuccess}
              label="Sign in with Google"
            />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={3} style={{ marginTop: "10px" }}>
              <Button
                onClick={handleBrowsing}
                style={{
                  margin: "0 auto",
                  display: "flex",
                  padding: "5px",
                  borderRadius: "5px",
                }}
                sx={{ border: 1, borderColor: "text.primary" }}
              >
                <Typography
                  style={{ color: "black" }}
                  fontSize="12px"
                  textTransform="none"
                >
                  <b>Nahh, just want to look around...</b>
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <Footer />
        </Container>
      </LoadingScreen>
    </div>
  );
};

export default Login;