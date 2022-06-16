import React, { useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Topic from "../components/Topic";
import topics from "../assets/topics";
import Aos from "aos";
import "aos/dist/aos.css";
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import Font from 'react-font';
import AuthContext from "../context/AuthContext";

const TopicsListPage = () => {

  let { logoutUser, accessToken } = useContext(AuthContext);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);


  const [problemStatus, setProblemStatus] = useState("");
  const [pinnedTopics, setPinnedTopics] = useState("");
  const [pinnedTopicsList, setPinnedTopicsList] = useState([]);
  var isloading = false;

  const getProblemStatus = async() => {
    let response = await fetch('http://127.0.0.1:8000/api/problem-status/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(accessToken),
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
        'Authorization': 'Bearer ' + String(accessToken),
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

  // const updatePinnedTopicsList = async () => {
  //   // window.location.reload(false);
  //   // var tempPinnedTopicsList = [];
  //   // for(var i = 0; i < 31; i++) {
  //   //   if(responseJson['topics_pinned'][i] === '1') {
  //   //     tempPinnedTopicsList.push(topics[i]);
  //   //   }
  //   // }
  //   // setPinnedTopicsList(tempPinnedTopicsList);
  //   setPinnedTopicsList((array) => pinnedTopics.split('').filter((element, index) => element === '1'));
  //   console.log(pinnedTopicsList);
  // };

  useEffect(() => {
    console.log(pinnedTopics);
    getPinnedTopics();
  }, [pinnedTopics]);

  return (
    <div>
      <div data-aos="fade-up">
        <div>
          <Font family="Lobster">
            <h1 style={{'textAlign':' center', 'paddingTop': '30px', 'color': 'black'}}>PINNED</h1>
          </Font>
          <Grid container spacing={4} paddingTop={5} paddingLeft={5} paddingRight={5}>
            {pinnedTopicsList.map((topic, index) => (
              <Grid item xs={12} md={6} lg={4}>
                <Topic key={index} topic={topic} problem_status={problemStatus} currPinnedStatus={pinnedTopics[topic.index-'0']} getPinnedTopics={getPinnedTopics}  listType = "pins"/>
              </Grid>
            ))}
          </Grid>
          <Font family="Lobster">
          <h1 style={{'textAlign':' center', 'paddingTop': '50px', 'color': 'black'}}>TOPICS</h1>
          </Font>
          <Grid container spacing={4} paddingTop={5} paddingLeft={5} paddingRight={5}>
            {topics.map((topic, index) => (
              <Grid item xs={12} md={6} lg={4}>
                <Topic key={index} topic={topic} problem_status={problemStatus} currPinnedStatus={pinnedTopics[index]} getPinnedTopics={getPinnedTopics} listType = "topics"/> 
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default TopicsListPage;
