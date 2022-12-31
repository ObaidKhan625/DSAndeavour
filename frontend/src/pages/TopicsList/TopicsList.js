import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Topic from "../../components/Topic/Topic";
import topics from "../../assets/topics";
import Aos from "aos";
import "aos/dist/aos.css";
import Font from "react-font";
import AuthContext from "../../context/AuthContext";
import ClipLoader from "react-spinners/ClipLoader";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Cookies from "universal-cookie";
import BackToTop from "../../components/BackToTop/BackToTop";
import ReactRoundedImage from "react-rounded-image";
import { useMediaQuery } from 'react-responsive';
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import Backdrop from "@mui/material/Backdrop";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import CheckIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Cancel";

const feedbackModalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TopicsList = () => {
  const apiBaseURL = process.env.REACT_APP_API_URL;

  let { logoutUser, accessToken } = useContext(AuthContext);
  let authenticated = false;
  const navigate = useNavigate();
  const cookies = new Cookies();

  const picture = cookies.get('dsandeavour_picture');
  const smallPicture = useMediaQuery({ query: '(max-width: 550px)' });

  useEffect(() => {
    Aos.init({ duration: 2000 });
    if (accessToken) {
      authenticated = true;
    }
    else if (!cookies.get("dsandeavour_topics_pinned") || !cookies.get("dsandeavour_problem_status")) {
      navigate("/login");
    }
  }, []);

  const [problemStatus, setProblemStatus] = useState("");
  const [pinnedTopics, setPinnedTopics] = useState("");
  const [loading, setLoading] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [solvedproblem, setProblemSolved] = useState(0);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [feedbackContent, setFeedbackContent] = useState("");
  let problemDone = 0;
  
  const handleFeedbackModalOpen = () => {
    setFeedbackModalOpen(true);
  };

  const handleFeedbackModalClose = () => {
    setFeedbackModalOpen(false);
  };

  const handleFeedbackChange = (text) => {
    setFeedbackContent(text);
  }

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuOpen = Boolean(anchorEl);
  const menuId = menuOpen ? "simple-popover" : undefined;

  const getProblemStatus = async () => {
    console.log("Problem Status");
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
        if (responseJson["problem_status"][i] === "1") {
          problemDone += 1;
        }
      }
      setProblemSolved(problemDone);
    } else {
      let tempProblemStatus = cookies.get("dsandeavour_problem_status");
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

  const deactivateLoading = async () => {
    setLoading(false);
  };

  useEffect(() => {
    getProblemStatus();
  }, [problemStatus]);

  const getPinnedTopics = async () => {
    console.log("Pinned Status");
    if (authenticated) {
      let response = await fetch(`${apiBaseURL}/api/pinned-topics/`, {
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
    } else {
      const cookies = new Cookies();
      let tempTopicsPinned = cookies.get("dsandeavour_topics_pinned");
      setPinnedTopics(tempTopicsPinned);
    }
    setLoading(false);
  };

  const handleFeedback = async () => {
    console.log("Feedback");
    console.log(feedbackContent);
    if (authenticated) {
      if (feedbackContent === undefined || feedbackContent === "") {
        return;
      }
      let response = await fetch(`${apiBaseURL}/api/submitFeedback/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(accessToken),
        },
        body: JSON.stringify({ feedback: feedbackContent }),
      });
      if (response.statusText === "Unauthorized") {
        logoutUser();
      }
      else {
        alert("Your feedback has been recorded");
      }
    }
    else {
      alert("You need to sign in to provide feedback :)");
    }
  };

  useEffect(() => {
    getPinnedTopics();
  }, []);

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
                  {
                    authenticated?
                    <span onClick={handleMenuClick} style={{ marginRight: '10vh', cursor: 'pointer' }}>
                      <ReactRoundedImage image={picture} roundedSize="0" 
                      imageWidth={smallPicture ? "40" : "60"} imageHeight={smallPicture ? "40" : "60"} />
                    </span>
                    :
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
                  }
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
                    <Typography sx={{ p: 2, color:'blue', cursor: 'pointer' }} onClick={handleFeedbackModalOpen}>
                      Feedback
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
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={feedbackModalOpen}
              onClose={handleFeedbackModalClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={feedbackModalOpen}>
                <Box sx={feedbackModalStyle}>
                  <TextField
                    id="outlined-multiline-static"
                    label="Note"
                    multiline
                    rows={8}
                    fullWidth
                    color="success"
                    focused
                    defaultValue={feedbackContent}
                    onBlur={(event) => handleFeedbackChange(event.target.value) }
                  />
                  <Stack direction="row" spacing={2} style={{ marginTop: "15px" }}>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#FF0000" }}
                      onClick={() => {
                        handleFeedbackModalClose();
                      }}
                    >
                      <CancelIcon />
                    </Button>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#00ff00" }}
                      onClick={() => {
                        handleFeedback();
                        handleFeedbackModalClose();
                      }}
                    >
                      <CheckIcon />
                    </Button>
                  </Stack>
                </Box>
              </Fade>
            </Modal>
            <Grid
              container
              spacing={4}
              paddingTop={5}
              paddingLeft={5}
              paddingRight={5}
            >
              {topics.map((topic, index) => {
                if(pinnedTopics[index] === "1")
                  return (
                    <React.Fragment key={index}>
                      <Grid item xs={12} md={6} lg={4}>
                        <Topic
                          key={index}
                          topic={topic}
                          index={index}
                          problem_status={problemStatus}
                          currPinnedStatus={pinnedTopics[index]}
                          pinnedTopics={pinnedTopics}
                          setPinnedTopics={setPinnedTopics}
                          loading={loading}
                          activateLoading={activateLoading}
                          deactivateLoading={deactivateLoading}
                          listType="pins"
                        />
                      </Grid>
                    </React.Fragment>
                  )
                else
                  return(
                    <></>
                  )
              })}
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
                      pinnedTopics={pinnedTopics}
                      setPinnedTopics={setPinnedTopics}
                      loading={loading}
                      activateLoading={activateLoading}
                      deactivateLoading={deactivateLoading}
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

export default TopicsList;