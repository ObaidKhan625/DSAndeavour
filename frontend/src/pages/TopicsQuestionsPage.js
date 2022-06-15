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
  const params = useParams();
  // console.log(JSON.stringify(params))

  const topicName = params.topicName;

  var problems = [];
  

  const [problemStatus, setProblemStatus] = useState("");
  const [solve,setSolve]=useState(0)


  let { logoutUser, authTokens } = useContext(AuthContext);
  
  const getProblemStatus = async () => {
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
    // console.log(responseJson)
    if(topicName === "ARRAYS 1") {
      let tempProblemStatus = "";
      for(let i = 0; i < 6; i++) {
        tempProblemStatus += responseJson['problem_status'][i];
      }
      setProblemStatus(tempProblemStatus);
    }
    else if(topicName === "ARRAYS 2") {
      let tempProblemStatus = "";
      for(let i = 6; i < 12; i++) {
        tempProblemStatus += responseJson['problem_status'][i];
      }
      setProblemStatus(tempProblemStatus);
    }
  }

  useEffect(() => {
    getProblemStatus()
  }, [count]);
  var count=0;
 
  if(topicName === "ARRAYS 1") {
    for(let i = 0; i < 6; i++) {
      problems.push(allProblems[i]);
      if(problemStatus[i]==1)
      {
       count++;
      }
      // selectProblemStatus += allProblemStatus['problem_status'][i];
    }
    // console.log(problemStatus[problems[0]['topic_index']]);
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
  console.log(count)

  // for(let i=0;i<problemStatus.length;i++)
  // {
  //       if(problemStatus[i]==1)
  //       {
  //         setSolve(solve + 1);
  //       }
  // }
// console.log(problemStatus)
// console.log(problemStatus.length)
// console.log(solve)
  return (
    <div>
    <Grid container spacing={4} paddingTop={5} paddingLeft={5} paddingRight={5}>
      {problems.map((problem, index) => (
        <Grid item xs={12} md={6} lg={4}>
        <div data-aos="fade-up">
          <Problem key={index} problem={problem} currProblemStatus={problemStatus[index]} count={problemStatus}/>
          </div>
         
        </Grid>
      ))}
    </Grid>
{/* <TopicsListPage getCount={count}/> */}
    </div>
  );
};

export default TopicsQuestionsPage;
