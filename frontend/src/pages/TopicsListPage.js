import React, { useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Topic from "../components/Topic";
import topics from "../assets/topics";
import { Button } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import AuthContext from "../context/AuthContext";

const TopicsListPage = () => {

  let { logoutUser, authTokens } = useContext(AuthContext);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);


  const [problemStatus, setProblemStatus] = useState("");
  const [pinnedTopics, setPinnedTopics] = useState("");
  const [pinnedTopicsList, setPinnedTopicsList] = useState([]);
  var isloading = false;

  const pinTopic = async(topic) => {
    if(pinnedTopics[topic.index - '0'] === '1') {
      return;
    }
    let response = await fetch(`http://127.0.0.1:8000/api/pinned-topics/${topic.index}/1/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access),
      }
    });
    let responseJson = await response.json();
    setPinnedTopics(responseJson['topics_pinned']);
    setPinnedTopicsList( arr => [...arr, topic]);
  };

  const unpinTopic  = async(topic) => {
    let response = await fetch(`http://127.0.0.1:8000/api/pinned-topics/${topic.index}/0/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access),
      }
    });
    let responseJson = await response.json();
    setPinnedTopics(responseJson['topics_pinned']);
    var tempPinnedTopicsList = pinnedTopicsList;
    const unpinIndex = tempPinnedTopicsList.indexOf(topic);
    tempPinnedTopicsList.splice(unpinIndex, 1); // 2nd parameter means remove one item only
    setPinnedTopicsList(tempPinnedTopicsList);
  };

  const getProblemStatus = async() => {
    let response = await fetch('http://127.0.0.1:8000/api/problem-status/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access),
      }
    });
    if(response.statusText === 'Unauthorized') {
      logoutUser();
    }
    let responseJson = await response.json();
    setProblemStatus(responseJson['problem_status']);
  }

  useEffect(() => {
    getProblemStatus();
  }, [problemStatus]);

  const getPinnedTopics = async () => {
    // window.location.reload(false);
    let response = await fetch('http://127.0.0.1:8000/api/pinned-topics/', { //FETCH THE STRING 0 AND 1
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access),
      }
    });
    if(response.statusText === 'Unauthorized') {
      logoutUser();
    }
    let responseJson = await response.json();
    setPinnedTopics(responseJson['topics_pinned']);
    var tempPinnedTopicsList = [];
    for(var i = 0; i < 31; i++) {
      if(responseJson['topics_pinned'][i] === '1') {
        tempPinnedTopicsList.push(topics[i]);
      }
    }
    setPinnedTopicsList(tempPinnedTopicsList);
  };

  useEffect(() => {
    getPinnedTopics();
  }, [pinnedTopics]);

  return (
    <div style={{ background: "linear-gradient(#e66465, #9198e5)" }}>
      <div data-aos="fade-up">
        <div>
          <h1>PINNED</h1>
          <Grid container spacing={4} paddingTop={5} paddingLeft={5} paddingRight={5}>
            {pinnedTopicsList.map((topic, index) => (
              <Grid item xs={12} md={6} lg={4}>
                <Topic key={index} topic={topic} problem_status={problemStatus} />
                <Button variant="outline-success" onClick={(e) => unpinTopic(topic)}>
                  <BookmarkRemoveIcon />
                </Button> 
              </Grid>
              
            ))}
          </Grid>
          <h1>TOPICS</h1>
          <Grid container spacing={4} paddingTop={5} paddingLeft={5} paddingRight={5}>
            {topics.map((topic, index) => (
              <Grid item xs={12} md={6} lg={4}>
                <Topic key={index} topic={topic} problem_status={problemStatus} /> 
                <Button variant="outline-success" onClick={(e) => pinTopic(topic)}>
                  <BookmarkAddIcon />
                </Button>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default TopicsListPage;
