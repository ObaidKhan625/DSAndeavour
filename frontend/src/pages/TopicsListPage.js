import React from 'react';
import Grid from '@mui/material/Grid'
import Topic from '../components/Topic';
import topics from '../assets/topics';

const TopicsListPage = () => {
  return (
    <div>
      <Grid container spacing={4} paddingTop={5} paddingLeft={5} paddingRight={5}>
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