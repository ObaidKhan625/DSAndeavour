import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <b>WELCOME TO STRIVER SHEET</b>
      <Button>
        <Link to="/topics">GET STARTED</Link>
      </Button>
    </div>
  );
}

export default HomePage;
