import React, { useState, useContext} from "react";
import { useNavigate } from 'react-router-dom';
import { Container } from "@mui/system";
import { Form, Button } from "react-bootstrap";
import Font from "react-font";
import LoadingScreen from 'react-loading-screen';
import AuthContext from "../context/AuthContext";

export default function MyComponent() {

  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  let { logoutUser, accessToken } = useContext(AuthContext);

  const submitHandler = async() => {
    if(feedback === "") {
      setLoading(false);
      return;
    }
    setFeedback(feedback);
    let response = await fetch(`http://127.0.0.1:8000/api/submitFeedback/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(accessToken),
      },
      body: JSON.stringify({feedback: feedback})
    });
    if(response.statusText === 'Unauthorized') {
      logoutUser();
    }
    setLoading(false);
    navigate('/');
  };

  // useEffect(() => {
  //   // console.log(props.topic);
  //   setCurrPinnedStatus(props.currPinnedStatus);
  // }, []);

  return (
    <div>
      <LoadingScreen
        loading={loading}
        bgColor='linear-gradient(to right, #f64f59, #c471ed, #12c2e9);'
        spinnerColor='#9ee5f8'
        textColor='black'
        text='Please Wait'
      > 
        <Container
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            height: "100vh",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            paddingTop: "10vh",
          }}
        >
          <div>
            <Font family="Lobster">
              <h1
                style={{
                  textAlign: " center",
                  paddingTop: "40px",
                  color: "black",
                }}
              >
                <b>Feedback Form</b>
              </h1>
            </Font>
            <div>
              <Form.Group>
                <Form.Label>
                  <b>Enter Feedback Below</b>
                </Form.Label>
                <Form.Control
                  name="feedback"
                  id="feedback"
                  onChange={(e) =>
                    setFeedback({
                      ...feedback,
                      feedback: e.target.value,
                    })
                  }
                  as="textarea"
                  rows={8}
                  required
                />
              </Form.Group>
              <div style={{ paddingTop: "15px", 'textAlign': 'center' }}>
                <Button onClick = {(e) => {
                  setLoading(true);
                  submitHandler();
                }}>
                  <b>Send</b>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </LoadingScreen>
    </div>
  );
}
