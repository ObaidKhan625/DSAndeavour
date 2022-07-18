import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Font from "react-font";
import Typography from "@mui/material/Typography";
import googleLogo from "../../assets/google-logo.png";
import Footer from "../../components/footer/Footer";
import LoadingScreen from "react-loading-screen";
import Cookies from "universal-cookie";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "./LoginPage.css";
const apiBaseURL = "your_api_url";
const appBaseURL = "your_app_url";

const googleClientId = "your_google_client_id";
const drfClientId = "your_drf_id";
const drfClientSecret = "your_drf_pass";

const createErrorNotification = () => {
  alert("An Error Occurred!");
  return () => {
    NotificationManager.error("Login Failed!", "Error!");
  };
};

const LoginPage = () => {
  const [loading, setLoading] = useState(false);

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
        cookies.remove("topicsPinned");
        cookies.remove("problemStatus");
        cookies.set("google_access_token", access_token, {
          path: "/",
          maxAge: 24 * 60 * 60 * 60,
        });
        cookies.set("google_refresh_token", refresh_token, {
          path: "/",
          maxAge: 24 * 60 * 60 * 60,
        });
        setLoading(false);
        window.location.href = `${appBaseURL}/`;
      })
      .catch((err) => {
        setLoading(false);
        createErrorNotification();
      });
  };

  const handleBrowsing = () => {
    const cookies = new Cookies();
    cookies.remove("google_access_token");
    cookies.remove("google_refresh_token");
    cookies.remove("topicsPinned");
    cookies.remove("problemStatus");
    cookies.set("topicsPinned", "0".repeat(31), { path: "/", maxAge: 30 * 60 });
    cookies.set("problemStatus", "0".repeat(195), {
      path: "/",
      maxAge: 30 * 60,
    });
    window.location.href = `${appBaseURL}/`;
  };

  return (
    <div>
      <LoadingScreen
        loading={loading}
        bgColor="linear-gradient(to right, #f64f59, #c471ed, #12c2e9);"
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
              <GoogleLogin
                clientId={googleClientId}
                buttonText="LOGIN WITH GOOGLE"
                onSuccess={(response) => handleGoogleLogin(response)}
                render={(renderProps) => (
                  <Button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    style={{
                      backgroundColor: "white",
                      margin: "0 auto",
                      display: "flex",
                      padding: "20px",
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      src={googleLogo}
                      height="30px"
                      width="30px"
                      alt="fireSpot"
                    />
                    <Typography
                      style={{ marginLeft: "20px", color: "black" }}
                      fontSize="20px"
                      textTransform="none"
                    >
                      <b>Sign in with Google</b>
                    </Typography>
                  </Button>
                )}
                onFailure={(err) => console.log("Google Login failed", err)}
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
      <NotificationContainer />
    </div>
  );
};

export default LoginPage;
