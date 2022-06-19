import React from "react";
import "./footer.css";
import { useNavigate } from "react-router-dom";

function Footer(props) {
  let navigate = useNavigate();
  const routeChangeFeedback = () => {
    let path = `/feedback`;
    navigate(path);
  };

  const routeChangeAboutus = () => {
    let path = `/aboutus`;
    navigate(path);
  };

  return (
    <div
      style={{
        paddingTop: "180px",
      }}
    >
      <div className="footer">
        <div className="footer-wrapper">
          <div className="footer-repo">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={"footer-link"}
              href="https://github.com/ObaidKhan625/Striver_Sheet"
            >
              <div className={"footer-div-small"}>
                <b> GITHUB 🎉</b>
              </div>
            </a>
          </div>
          <div>
            <div className="footer-repo">
              <div className={"footer-div-small"}>
                <b onClick={routeChangeAboutus}>ABOUT US 😀</b>
              </div>
            </div>
          </div>

          <div className="footer-repo">
            <div className={"footer-div-small"}>
              <b onClick={routeChangeFeedback}> FEEDBACK 📜</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
