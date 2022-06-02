import React from 'react'
import Grid from '@mui/material/Grid'
import Problem from '../components/Problem'
import problems from '../assets/treesProblems'

const TopicsQuestionsPage = () => {
  return (
    <Grid container spacing={4} paddingTop={5} paddingLeft={5} paddingRight={5}>
      {problems.map((problem, index) => (
        <Grid item xs={12} md={6} lg={4}>
          <Problem key={index} problem={problem}/>
        </Grid>
      ))}
    </Grid>
  );
}

export default TopicsQuestionsPage