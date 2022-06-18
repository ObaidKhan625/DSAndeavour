import React, { useEffect, useState, useContext } from "react";
import Grid from "@mui/material/Grid";
import Problem from "../components/Problem";
import { useParams } from "react-router-dom";
import allProblems from '../assets/problems';
import Aos from "aos";
import "aos/dist/aos.css";
import '../css/TopicList.css';
import AuthContext from "../context/AuthContext";
import TopicsListPage from "./TopicsListPage";

const TopicsQuestionsPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  let { logoutUser, accessToken } = useContext(AuthContext);

  const params = useParams();
  // console.log(JSON.stringify(params))

  const topicName = params.topicName;

  var problems = [];

  const [problemStatus, setProblemStatus] = useState("");
  const [problemNotesList, setProblemNotesList] = useState([]);

  const getProblemStatusAndNotes = async () => {
    let problemStatusResponse = await fetch('http://127.0.0.1:8000/api/problem-status/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(accessToken),
      }
    });
    let problemNotesListResponse = await fetch('http://127.0.0.1:8000/api/problem-notes/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(accessToken),
      }
    });
    if(problemStatusResponse.statusText === 'Unauthorized') {
      logoutUser();
    }
    let problemStatusResponseJson = await problemStatusResponse.json();
    let problemNotesResponseJson = await problemNotesListResponse.json();
    // console.log(responseJson)
    if(topicName === "ARRAYS 1") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for(let i = 0; i < 6; i++) {
        tempProblemStatus += problemStatusResponseJson['problem_status'][i];
        tempProblemNotes.push(problemNotesResponseJson['problems_notes'][i]);
      }
      setProblemStatus(tempProblemStatus);
      setProblemNotesList(tempProblemNotes);
    }
    else if(topicName === "ARRAYS 2") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for(let i = 6; i < 12; i++) {
        tempProblemStatus += problemStatusResponseJson['problem_status'][i];
        tempProblemNotes.push(problemNotesResponseJson['problems_notes'][i]);
      }
      setProblemStatus(tempProblemStatus);
      setProblemNotesList(tempProblemNotes);
    }
  }

  useEffect(() => {
    getProblemStatusAndNotes();
  }, [count]);
  var count=0;
 
  if(topicName === "ARRAYS 1") {
    for(let i = 0; i < 6; i++) {
      problems.push(allProblems[i]);
      // selectProblemStatus += allProblemStatus['problem_status'][i];
    }
  }
  else if(topicName === "ARRAYS 2") {
    for(let i = 6; i < 12; i++) {
      problems.push(allProblems[i]);
      // selectProblemStatus += allProblemStatus['problem_status'][i];
    }
  }
  else if(topicName === "ARRAYS 3") {
    for(let i = 12; i < 18; i++) {
      problems.push(allProblems[i]);
      // selectProblemStatus += allProblemStatus['problem_status'][i];
    }
  }
  else if(topicName === "ARRAYS 4") {
    for(let i = 18; i < 24; i++) {
      problems.push(allProblems[i]);
    }
  }
  else if(topicName === "LINKED LIST 1") {
    for(let i = 24; i < 30; i++) {
      problems.push(allProblems[i]);
    }
  }
  else if(topicName === "LINKED LIST 2") {
    for(let i = 30; i < 36; i++) {
      problems.push(allProblems[i]);
    }
  }
  else if(topicName === "LINKED LIST AND ARRAY") {
    for(let i = 36; i < 42; i++) {
      problems.push(allProblems[i]);
    }
  }
  else if(topicName === "GREEDY ALGORITHM") {
    for(let i = 42; i < 48; i++) {
      problems.push(allProblems[i]);
    }
  }
  else if(topicName === "RECURSION") {
    for(let i = 48; i < 54; i++) {
      problems.push(allProblems[i]);
    }
  }
  else if(topicName === "RECURSION AND BACKTRACKING") {
    for(let i = 54; i < 60; i++) {
      problems.push(allProblems[i]);
    }
  }
  else {
    for(let i = 0; i < 6; i++) {
      problems.push(allProblems[i]);
    }
  }

  return (
    <div>
      <Grid container spacing={4} paddingTop={5} paddingLeft={5} paddingRight={5}>
        {problems.map((problem, index) => (
          <Grid item xs={12} md={6} lg={4}>
          <div data-aos="fade-up">
            <Problem key={index} problem={problem} 
            currProblemStatus={problemStatus[index]} currProblemNote={problemNotesList[index]}/>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default TopicsQuestionsPage;
