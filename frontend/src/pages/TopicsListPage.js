import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid'
// import Topic from '../components/Topic';
// import topics from '../assets/topics';
import topicProblems from '../assets/topics'
import Topic from '../components/Topic';
import Pinned from '../components/Pinned';
import pinned from '../assets/pinned';

const TopicsListPage = () => {
  // let [pin, setPin] = useState([]);
  // let getPinnedStatus = async() => {
  //   let response = await fetch('http://127.0.0.1:8000/api/pinned-topics/');
  //   let allPinnedStatus = await response.json();
  //   var tempPin = [];
  //   for(let i = 0; i < 31; i++) {
  //     if(allPinnedStatus['topics_pinned'][i] === '1') {
  //       tempPin.push(i);
  //     }
  //   }
  //   setPin(tempPin);
  //   console.log(pin);
  // }
  // getPinnedStatus();
  const [problemStatus, setProblemStatus] = useState("");

  const getProblemStatus = async() => {
    let response = await fetch('http://127.0.0.1:8000/api/problem-status/');
    let responseJson = await response.json();
    setProblemStatus(responseJson['problem_status']);
    console.log(problemStatus);
  }

  useEffect(() => {
    getProblemStatus();
  }, [problemStatus]);

  return (
    <div  style={{ background: "linear-gradient(#e66465, #9198e5)" }}>
      <h1>PINNED</h1>
            <Grid container spacing={4} paddingTop={5} paddingLeft={5} paddingRight={5} paddingBottom={12}>
        {pinned.map((pinnedtopic,index)=>(
      <Grid item xs={12} md={6} lg={4}>
           
      <Pinned key={index} pinnedtopic={pinnedtopic}/> 
   </Grid>
   ))

   }
   </Grid>
   <h1>TOPICS</h1>
      <Grid container spacing={2} paddingTop={5} paddingLeft={5} paddingRight={5}>
        {/* {topics.map((topic, index) => (
          <Grid item xs={12} md={6} lg={4}>
             /* <Topic key={index} topic={topic}/>  
         
          </Grid>
        ))} */}
 
         {topicProblems.map((topic, index) => (
          <Grid item xs={12} md={6} lg={4}>
           
             <Topic key={index} topic={topic} problem_status={problemStatus} /> 
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default TopicsListPage