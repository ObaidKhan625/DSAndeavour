import React, { useState, useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
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
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

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
    if(response.statusText === 'Unauthorized') {
      logoutUser();
    }
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
      if(props.problem_status[i] === '1') {
        totalDone++;
      }
      if(props.problem_status[i] === '0' && upNextProblemIndex === -1) {
        upNextProblemIndex = i;
      }
      totalProblems++;
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
  else if(props.topic.name === "BINARY SEARCH") {
    for(let i = 60; i < 68; i++) {
      if(props.problem_status[i] === '1') {
        totalDone++;
      }
      if(props.problem_status[i] === '0' && upNextProblemIndex === -1) {
        upNextProblemIndex = i;
      }
      totalProblems++;
    }
  }
  else if(props.topic.name === "HEAPS") {
    for(let i = 68; i < 74; i++) {
      if(props.problem_status[i] === '1') {
        totalDone++;
      }
      if(props.problem_status[i] === '0' && upNextProblemIndex === -1) {
        upNextProblemIndex = i;
      }
      totalProblems++;
    }
  }
  else if(props.topic.name === "STACKS AND QUEUE") {
    for(let i = 74; i < 81; i++) {
      if(props.problem_status[i] === '1') {
        totalDone++;
      }
      if(props.problem_status[i] === '0' && upNextProblemIndex === -1) {
        upNextProblemIndex = i;
      }
      totalProblems++;
    }
  }
  else if(props.topic.name === "STACKS AND QUEUE 2") {
    for(let i = 81; i < 91; i++) {
      if(props.problem_status[i] === '1') {
        totalDone++;
      }
      if(props.problem_status[i] === '0' && upNextProblemIndex === -1) {
        upNextProblemIndex = i;
      }
      totalProblems++;
    }
  }
  else if(props.topic.name === "STRING") {
    for(let i = 91; i < 97; i++) {
      if(props.problem_status[i] === '1') {
        totalDone++;
      }
      if(props.problem_status[i] === '0' && upNextProblemIndex === -1) {
        upNextProblemIndex = i;
      }
      totalProblems++;
    }
  }
  else if(props.topic.name === "STRING 2") {
    for(let i = 97; i < 103; i++) {
      if(props.problem_status[i] === '1') {
        totalDone++;
      }
      if(props.problem_status[i] === '0' && upNextProblemIndex === -1) {
        upNextProblemIndex = i;
      }
      totalProblems++;
    }
  }
  else if(props.topic.name === "BINARY TREE") {
    for(let i = 103; i < 115; i++) {
      if(props.problem_status[i] === '1') {
        totalDone++;
      }
      if(props.problem_status[i] === '0' && upNextProblemIndex === -1) {
        upNextProblemIndex = i;
      }
      totalProblems++;
    }
  }
  else if(props.topic.name === "BINARY TREE 2") {
    for(let i = 115; i < 123; i++) {
      if(props.problem_status[i] === '1') {
        totalDone++;
      }
      if(props.problem_status[i] === '0' && upNextProblemIndex === -1) {
        upNextProblemIndex = i;
      }
      totalProblems++;
    }
  }
  else if(props.topic.name === "BINARY TREE 3") {
    for(let i = 123; i < 130; i++) {
      if(props.problem_status[i] === '1') {
        totalDone++;
      }
      if(props.problem_status[i] === '0' && upNextProblemIndex === -1) {
        upNextProblemIndex = i;
      }
      totalProblems++;
    }
  }
  else if(props.topic.name === "BINARY SEARCH TREE") {
    for(let i = 130; i < 137; i++) {
      if(props.problem_status[i] === '1') {
        totalDone++;
      }
      if(props.problem_status[i] === '0' && upNextProblemIndex === -1) {
        upNextProblemIndex = i;
      }
      totalProblems++;
    }
  }
  else if(props.topic.name === "BINARY SEARCH TREE 2") {
    for(let i = 137; i < 145; i++) {
      if(props.problem_status[i] === '1') {
        totalDone++;
      }
      if(props.problem_status[i] === '0' && upNextProblemIndex === -1) {
        upNextProblemIndex = i;
      }
      totalProblems++;
    }
  }
  else if(props.topic.name === "BINARY SEARCH TREE (MISCELLAEOUS)") {
    for(let i = 145; i < 151; i++) {
      if(props.problem_status[i] === '1') {
        totalDone++;
      }
      if(props.problem_status[i] === '0' && upNextProblemIndex === -1) {
        upNextProblemIndex = i;
      }
      totalProblems++;
    }
  }
  else if(props.topic.name === "GRAPH") {
    for(let i = 151; i < 163; i++) {
      if(props.problem_status[i] === '1') {
        totalDone++;
      }
      if(props.problem_status[i] === '0' && upNextProblemIndex === -1) {
        upNextProblemIndex = i;
      }
      totalProblems++;
    }
  }
  else if(props.topic.name === "GRAPH 2") {
    for(let i = 163; i < 169; i++) {
      if(props.problem_status[i] === '1') {
        totalDone++;
      }
      if(props.problem_status[i] === '0' && upNextProblemIndex === -1) {
        upNextProblemIndex = i;
      }
      totalProblems++;
    }
  }
  else if(props.topic.name === "DYNAMIC PROGRAMMING") {
    for(let i = 169; i < 176; i++) {
      if(props.problem_status[i] === '1') {
        totalDone++;
      }
      if(props.problem_status[i] === '0' && upNextProblemIndex === -1) {
        upNextProblemIndex = i;
      }
      totalProblems++;
    }
  }
  else if(props.topic.name === "DYNAMIC PROGRAMMING 2") {
    for(let i = 176; i < 184; i++) {
      if(props.problem_status[i] === '1') {
        totalDone++;
      }
      if(props.problem_status[i] === '0' && upNextProblemIndex === -1) {
        upNextProblemIndex = i;
      }
      totalProblems++;
    }
  }
  else if(props.topic.name === "TRIE") {
    for(let i = 184; i < 191; i++) {
      if(props.problem_status[i] === '1') {
        totalDone++;
      }
      if(props.problem_status[i] === '0' && upNextProblemIndex === -1) {
        upNextProblemIndex = i;
      }
      totalProblems++;
    }
  }
  else if(props.topic.name === "OPERATING SYSTEM REVISION") {
    for(let i = 191; i < 192; i++) {
      if(props.problem_status[i] === '1') {
        totalDone++;
      }
      if(props.problem_status[i] === '0' && upNextProblemIndex === -1) {
        upNextProblemIndex = i;
      }
      totalProblems++;
    }
  }
  else if(props.topic.name === "DBMS REVISION") {
    for(let i = 192; i < 193; i++) {
      if(props.problem_status[i] === '1') {
        totalDone++;
      }
      if(props.problem_status[i] === '0' && upNextProblemIndex === -1) {
        upNextProblemIndex = i;
      }
      totalProblems++;
    }
  }
  else if(props.topic.name === "COMPUTER NETWORK REVISION") {
    for(let i = 193; i < 194; i++) {
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
    for(let i = 194; i < 195; i++) {
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
            !props.loading ?
            <IconButton aria-label="settings">
              {currPinnedStatus === '0' && props.listType === 'topics'
                  ? 
                  <BookmarkAddIcon onClick={(e) => {
                    props.activateLoading();
                    pinTopic(props.topic);
                  }}/>
                  :
                  <BookmarkRemoveIcon onClick={(e) => {
                    props.activateLoading();
                    unpinTopic(props.topic);
                  }}/>
              }
            </IconButton>
            : <BookmarkBorderIcon />
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
