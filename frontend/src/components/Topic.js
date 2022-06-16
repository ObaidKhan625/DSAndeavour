import React, { useState, useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import '../css/DummyTopic.css';
import problems from '../assets/problems';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import "aos/dist/aos.css";
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import IconButton from '@mui/material/IconButton';
import Font from 'react-font';
import AuthContext from "../context/AuthContext";
import Typography from '@mui/material/Typography';

export default function Problem(props) {

  let { logoutUser, accessToken } = useContext(AuthContext);

  const [currPinnedStatus, setCurrPinnedStatus] = useState(props.currPinnedStatus);
  
  const pinTopic = async() => {
    if(currPinnedStatus === '1') {
      return;
    }
    let response = await fetch(`http://127.0.0.1:8000/api/pinned-topics/${props.topic.index}/1/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(accessToken),
      }
    });
    // let responseJson = await response.json();
    // setPinnedTopics(responseJson['topics_pinned']);
    setCurrPinnedStatus('1');
    await props.getPinnedTopics();
  };

  const unpinTopic  = async() => {
    let response = await fetch(`http://127.0.0.1:8000/api/pinned-topics/${props.topic.index}/0/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(accessToken),
      }
    });
    // let responseJson = await response.json();
    // setPinnedTopics(responseJson['topics_pinned']);
    setCurrPinnedStatus('0');
    await props.getPinnedTopics();
  };

  useEffect(() => {
    // console.log(props.topic);
    setCurrPinnedStatus(props.currPinnedStatus);
  }, [props.currPinnedStatus])

  var upNextProblemIndex = -1;
  var totalDone = 0;
  var totalProblems = 0;
  if(props.topic.name === "ARRAYS 1") {
    for(let i = 0; i < 6; i++) {
      if(props.problem_status[i] === '1') {
        totalDone++;
      }
      if(props.problem_status[i] === '0' && upNextProblemIndex === -1) {
        upNextProblemIndex = i;
      }
      totalProblems++;
    }
  }
  else if(props.topic.name === "ARRAYS 2") {
    for(let i = 6; i < 12; i++) {
      if(props.problem_status[i] === '1') {
        totalDone++;
      }
      if(props.problem_status[i] === '0' && upNextProblemIndex === -1) {
        upNextProblemIndex = i;
      }
      totalProblems++;
    }
  }
  else if(props.topic.name === "ARRAYS 3") {
    for(let i = 12; i < 18; i++) {
      if(props.problem_status[i] === '1') {
        totalDone++;
      }
      if(props.problem_status[i] === '0' && upNextProblemIndex === -1) {
        upNextProblemIndex = i;
      }
      totalProblems++;
    }
  }
  else if(props.topic.name === "ARRAYS 4") {
    for(let i = 18; i < 24; i++) {
      if(props.problem_status[i] === '1') {
        totalDone++;
      }
      if(props.problem_status[i] === '0' && upNextProblemIndex === -1) {
        upNextProblemIndex = i;
      }
      totalProblems++;
    }
  }
  else if(props.topic.name === "LINKED LIST 1") {
    for(let i = 24; i < 30; i++) {
      if(props.problem_status[i] === '1') {
        totalDone++;
      }
      if(props.problem_status[i] === '0' && upNextProblemIndex === -1) {
        upNextProblemIndex = i;
      }
      totalProblems++;
    }
  }
  else if(props.topic.name === "LINKED LIST 2") {
    for(let i = 30; i < 36; i++) {
      if(props.problem_status[i] === '0') {
        upNextProblemIndex = i; break;
      }
    }
  }
  else if(props.topic.name === "LINKED LIST AND ARRAYS") {
    for(let i = 36; i < 42; i++) {
      if(props.problem_status[i] === '1') {
        totalDone++;
      }
      if(props.problem_status[i] === '0' && upNextProblemIndex === -1) {
        upNextProblemIndex = i;
      }
      totalProblems++;
    }
  }
  else if(props.topic.name === "GREEDY ALGORITHM") {
    for(let i = 42; i < 48; i++) {
      if(props.problem_status[i] === '1') {
        totalDone++;
      }
      if(props.problem_status[i] === '0' && upNextProblemIndex === -1) {
        upNextProblemIndex = i;
      }
      totalProblems++;
    }
  }
  else if(props.topic.name === "RECURSION") {
    for(let i = 48; i < 54; i++) {
      if(props.problem_status[i] === '1') {
        totalDone++;
      }
      if(props.problem_status[i] === '0' && upNextProblemIndex === -1) {
        upNextProblemIndex = i;
      }
      totalProblems++;
    }
  }
  else if(props.topic.name === "RECURSION AND BACKTRACKING") {
    for(let i = 54; i < 60; i++) {
      if(props.problem_status[i] === '1') {
        totalDone++;
      }
      if(props.problem_status[i] === '0' && upNextProblemIndex === -1) {
        upNextProblemIndex = i;
      }
      totalProblems++;
    }
  }
  else {
    for(let i = 0; i < 6; i++) {
      if(props.problem_status[i] === '1') {
        totalDone++;
      }
      if(props.problem_status[i] === '0' && upNextProblemIndex === -1) {
        upNextProblemIndex = i;
      }
      totalProblems++;
    }
  }

  return (
    <div data-aos="fade-up">
      <Card variant="outlined">
        <CardHeader
          action={
            <IconButton aria-label="settings">
              {currPinnedStatus === '0' && props.listType === 'topics'
                  ? 
                  <Button variant="outline-success" onClick={(e) => pinTopic(props.topic)}>
                    <BookmarkAddIcon />
                  </Button>
                  :
                  <Button variant="outline-success" onClick={(e) => unpinTopic(props.topic)}>
                    <BookmarkRemoveIcon />
                  </Button> 
              }
            </IconButton>
          }
          title={<Link to={`/topics/${props.topic.name}`}><Typography color="black" fontFamily="Secular One" fontSize="25px">{props.topic.name}</Typography></Link>}
        /> 
        <CardContent>
          <Font family="Secular One">
            <b>Up Next</b><br />
            {upNextProblemIndex === -1 ? "All Done!!!" : problems[upNextProblemIndex].name}
            <Typography color="green" align="right" fontFamily="Secular One" fontSize="30px">
              {totalDone}/{totalProblems}
            </Typography>
          </Font>
          
        </CardContent>
      </Card>
    </div>
  );
}
