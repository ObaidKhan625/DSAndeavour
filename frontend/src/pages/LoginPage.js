import React, { useContext } from 'react';
import GoogleLogin from "react-google-login";
import axios from "axios";
const baseURL = "http://localhost:8000";

const googleClientId = 'abc';
const drfClientId = 'abc';
const drfClientSecret = 'abc';

const handleGoogleLogin = (response) => {
  axios
    .post(`${baseURL}/auth/convert-token`, {
      token: response.accessToken,
      backend: "google-oauth2",
      grant_type: "convert_token",
      client_id: drfClientId,
      client_secret: drfClientSecret,
    })
    .then((res) => {
      const { access_token, refresh_token } = res.data;
      localStorage.setItem("google_access_token", access_token);
      localStorage.setItem("google_refresh_token", refresh_token);
      console.log({ 'access_token': access_token, 'refresh_token': refresh_token });
    })
    .catch((err) => {
      console.log("Error Google login", err);
    });
};

const LoginPage = () => {
  return (
    <div>
      {/* <form onSubmit={loginUser}>
          <input type="text" name="username" placeholder="Enter Username"/>
          <input type="password" name="password" placeholder="Enter Password"/>
          <input type="submit"/>
      </form> */}
      <GoogleLogin
        clientId={googleClientId}
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={(response) => handleGoogleLogin(response)}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            type="button"
            class="login-with-google-btn"
          >
            Sign in with Google
          </button>
        )}
        onFailure={(err) => console.log("Google Login failed", err)}
      />
    </div>
  )
}

export default LoginPage