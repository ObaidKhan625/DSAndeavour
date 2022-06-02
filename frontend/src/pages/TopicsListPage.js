import React from 'react';
import Grid from '@mui/material/Grid'
import topics from '../assets/topics'
import Topic from '../components/Topic';

// import { PhotoStory, VideoStory } from './stories';

// const components = {
//     photo: PhotoStory,
//     video: VideoStory
// };

const TopicsListPage = () => {
  // Correct! JSX type can be a capitalized variable.
  // const SpecificStory = components[props.storyType];
  // return <SpecificStory story={props.story} />;
  return (
    <div  style={{ background: "linear-gradient(#e66465, #9198e5)" }}>
      <Grid container spacing={4} paddingTop={5} paddingLeft={5} paddingRight={5}>
        {/* {topics.map((topic, index) => (
          <Grid item xs={12} md={6} lg={4}>
             /* <Topic key={index} topic={topic}/>  
         
          </Grid>
        ))} */}
         {topics.map((topic, index) => (
          <Grid item xs={12} md={6} lg={4}>
             <Topic key={index} topic={topic}/> 
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default TopicsListPage