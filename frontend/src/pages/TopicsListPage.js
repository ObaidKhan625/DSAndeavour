import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Topic from "../components/Topic/Topic";
import topics from "../assets/topics";
import Aos from "aos";
import "aos/dist/aos.css";
import Font from "react-font";
import AuthContext from "../context/AuthContext";
import ClipLoader from "react-spinners/ClipLoader";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Cookies from "universal-cookie";
import BackToTop from "../components/BackToTop/BackToTop";

const TopicsListPage = () => {
  const apiBaseURL = "your_api_url";

  let { logoutUser, accessToken } = useContext(AuthContext);
  let authenticated = false;
  const navigate = useNavigate();
  const cookies = new Cookies();

  if (accessToken) {
    authenticated = true;
  } else if (!cookies.get("topicsPinned") || !cookies.get("problemStatus")) {
    navigate("/login");
  }

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  console.log(authenticated);

  const [problemStatus, setProblemStatus] = useState("");
  const [pinnedTopics, setPinnedTopics] = useState("");
  const [pinnedTopicsList, setPinnedTopicsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [solvedproblem, setProblemSolved] = useState(0);
  let problemDone = 0;

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuOpen = Boolean(anchorEl);
  const menuId = menuOpen ? "simple-popover" : undefined;

  const getProblemStatus = async () => {
    if (authenticated) {
      let response = await fetch(`${apiBaseURL}/api/problem-status/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(accessToken),
        },
      });
      if (response.statusText === "Unauthorized") {
        logoutUser();
      }
      let responseJson = await response.json();
      setProblemStatus(responseJson["problem_status"]);
      for (let i = 0; i < 195; i++) {
        if (problemStatus[i] === "1") {
          problemDone += 1;
        }
      }
      setProblemSolved(problemDone);
    } else {
      let tempProblemStatus = cookies.get("problemStatus");
      setProblemStatus(tempProblemStatus);
      for (let i = 0; i < 195; i++) {
        if (tempProblemStatus[i] === "1") {
          problemDone += 1;
        }
      }
      setProblemSolved(problemDone);
    }
    setLoading(false);
  };

  const activateLoading = async () => {
    setLoading(true);
  };

  useEffect(() => {
    getProblemStatus();
    //eslint-disable-next-line
  }, [problemStatus]);

  const getPinnedTopics = async () => {
    if (authenticated) {
      let response = await fetch(`${apiBaseURL}/api/pinned-topics/`, {
        //FETCH THE STRING 0 AND 1
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(accessToken),
        },
      });
      if (response.statusText === "Unauthorized") {
        logoutUser();
      }
      let responseJson = await response.json();
      setPinnedTopics(responseJson["topics_pinned"]);
      let tempPinnedTopicsList = [];
      for (var i = 0; i < 31; i++) {
        if (responseJson["topics_pinned"][i] === "1") {
          tempPinnedTopicsList.push(topics[i]);
        }
      }
      setPinnedTopicsList(tempPinnedTopicsList);
    } else {
      const cookies = new Cookies();
      let tempTopicsPinned = cookies.get("topicsPinned");
      setPinnedTopics(tempTopicsPinned);
      var tempPinnedTopicsList = [];
      for (let i = 0; i < 31; i++) {
        if (tempTopicsPinned[i] === "1") {
          tempPinnedTopicsList.push(topics[i]);
        }
      }
      setPinnedTopicsList(tempPinnedTopicsList);
    }
    setLoading(false);
  };

  useEffect(() => {
    getPinnedTopics();
    //eslint-disable-next-line
  }, [pinnedTopics]);

  return (
    <>
      <div style={{ paddingBottom: "5vh" }} className="topicListPage">
        <div data-aos="fade-up">
          <div>
            <Font family="Lobster">
              <h1
                style={{
                  textAlign: "center",
                  paddingTop: "30px",
                  color: "black",
                }}
              >
                <span style={{ float: "left" }}>
                  <Button
                    size="large"
                    style={{
                      backgroundColor: "blue",
                      marginLeft: "2vh",
                      color: "white",
                    }}
                    onClick={() => {
                      logoutUser();
                    }}
                  >
                    <b>{authenticated ? "Logout" : "Sign in"}</b>
                  </Button>
                </span>
                <span>PINNED</span>
                <ClipLoader
                  css={"margin-left: 10px;"}
                  loading={loading}
                  size={40}
                />
                <span style={{ float: "right" }}>
                  <IconButton
                    aria-label="settings"
                    size="large"
                    style={{
                      backgroundColor: "blue",
                      marginRight: "6vh",
                      color: "white",
                    }}
                    onClick={handleMenuClick}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Popover
                    id={menuId}
                    open={menuOpen}
                    anchorEl={anchorEl}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                  >
                    <Typography sx={{ p: 2 }}>
                      <a target="_blank" href="/about">
                        About Us
                      </a>
                    </Typography>
                    <Typography sx={{ p: 2 }}>
                      <a target="_blank" href="/feedback">
                        Feedback
                      </a>
                    </Typography>
                    <Typography sx={{ p: 2 }}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/ObaidKhan625/Striver_Sheet_Tracker"
                      >
                        Contribute
                      </a>
                    </Typography>
                  </Popover>
                </span>
              </h1>
            </Font>
            <Grid
              container
              spacing={4}
              paddingTop={5}
              paddingLeft={5}
              paddingRight={5}
            >
              {pinnedTopicsList.map((topic, index) => (
                <React.Fragment key={index}>
                  <Grid item xs={12} md={6} lg={4}>
                    <Topic
                      key={index}
                      topic={topic}
                      index={topic.index}
                      problem_status={problemStatus}
                      currPinnedStatus={pinnedTopics[topic.index - "0"]}
                      getPinnedTopics={getPinnedTopics}
                      activateLoading={activateLoading}
                      loading={loading}
                      listType="pins"
                    />
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
            <Font family="Lobster">
              <h1
                style={{
                  textAlign: " center",
                  paddingTop: "50px",
                  color: "black",
                }}
              >
                TOPICS
                <Typography
                  style={{
                    textAlign: " center",
                    paddingTop: "20px",
                    color: "green",
                  }}
                  fontFamily="Secular One"
                  fontSize="35px"
                >
                  {solvedproblem}/195
                </Typography>
              </h1>
            </Font>
            <Grid
              container
              spacing={4}
              paddingTop={5}
              paddingLeft={5}
              paddingRight={5}
            >
              {topics.map((topic, index) => (
                <React.Fragment key={index}>
                  <Grid item xs={12} md={6} lg={4}>
                    <Topic
                      key={index}
                      topic={topic}
                      index={index}
                      problem_status={problemStatus}
                      currPinnedStatus={pinnedTopics[index]}
                      getPinnedTopics={getPinnedTopics}
                      activateLoading={activateLoading}
                      loading={loading}
                      listType="topics"
                    />
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
          </div>
        </div>
      </div>
      <BackToTop />
    </>
  );
};

export default TopicsListPage;
