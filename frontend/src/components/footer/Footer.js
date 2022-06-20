import React from "react";
import "./footer.css";

function Footer(props) {

  return (
    <div
      style={{
        paddingTop: "10vh",
      }}
    >
      <div className="footer">
        <div className="footer-wrapper">
          <div className="footer-repo">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={"footer-link"}
              href="https://github.com/ObaidKhan625/Striver_Sheet_Tracker"
            >
              <div className={"footer-div-small"}>
                <b> GITHUB 🎉</b>
              </div>
            </a>
          </div>

          <div className="footer-repo">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={"footer-link"}
              href="/about"
            >
              <div className={"footer-div-small"}>
                <b>ABOUT US 📜</b>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
