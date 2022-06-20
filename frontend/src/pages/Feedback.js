import React, { useState } from "react";
import { Container } from "@mui/system";
import { Form, Button } from "react-bootstrap";
import Font from "react-font";
export default function MyComponent() {
  const [details, setDetails] = useState({ description: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(details);
    setDetails(details);
  };
  
  return (
    <div>
      <div>
        <Container
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            height: "100vh",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            paddingTop: "100px",
          }}
        >
          <div
            style={{
              paddingTop: "0px",
              boxSizing: "content-box",
            }}
          >
            <Font family="Secular One">
              {" "}
              <h1
                style={{
                  textAlign: " center",
                  paddingTop: "40px",
                  color: "black",
                }}
              >
                <b>FEEDBACK FORM</b>
              </h1>
            </Font>

            <div className="outer">
              <div className="inner">
                <form>
                  <Form onSubmit={submitHandler}>
                    {/* text area */}
                    <Form.Group>
                      <Form.Label>
                        <b>ENTER FEEDBACK BELOW</b>
                      </Form.Label>
                      <Form.Control
                        name="description"
                        id="description"
                        onChange={(e) =>
                          setDetails({
                            ...details,
                            description: e.target.value,
                          })
                        }
                        as="textarea"
                        value={details.description}
                        rows={8}
                        required
                      />
                    </Form.Group>
                    <div style={{ paddingTop: "15px" }}>
                      <Button type="submit">
                        <b>SEND</b>
                      </Button>
                    </div>
                  </Form>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
