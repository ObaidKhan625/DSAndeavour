import React from 'react';
import Grid from '@mui/material/Grid'
import Topic from '../components/Topic';
import topics from '../assets/topics';
import topicsproblem from '../assets/data'
import DummyTopic from '../components/DummyTopic';
import Pinned from '../components/Pinned';
import pinned from '../assets/pinned';
const TopicsListPage = () => {
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
 
         {topicsproblem.map((topic, index) => (
          <Grid item xs={12} md={6} lg={4}>
           
             <DummyTopic key={index} topic={topic}/> 
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default TopicsListPage