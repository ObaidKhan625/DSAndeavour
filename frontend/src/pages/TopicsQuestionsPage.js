import React,{useEffect} from "react";
import Grid from "@mui/material/Grid";
import Problem from "../components/Problem";
import { useParams } from "react-router-dom";
import ARRAYS_1_problems from "../assets/ARRAYS 1 problems";
import ARRAYS_2_problems from "../assets/ARRAYS 2 problems";
import BINARY_TREE_1_problems from "../assets/BINARY TREE 1 problems";
import BINARY_TREE_2_problems from "../assets/BINARY TREE 2 problems";
import Aos from "aos";
import "aos/dist/aos.css";
import '../css/TopicList.css';
const TopicsQuestionsPage = () => {
  useEffect(()=>{
Aos.init({duration:2000});
  },[]);
  const params = useParams();
  const topicName = params.topicName;
  console.log(params)
  let problems = null;
  if(topicName === "ARRAYS 1") {
    problems = ARRAYS_1_problems;
  }
  else if(topicName === "ARRAYS 2") {
    problems = ARRAYS_2_problems;
  }
  else if(topicName === "BINARY TREE 1") {
    problems = BINARY_TREE_1_problems;
  }
  else {
    problems = BINARY_TREE_2_problems;
  }
  return (
    <div   style={{ background: "linear-gradient(#348F50, #56B4D3)" }} >
    
    <Grid container spacing={4} paddingTop={5} paddingLeft={5} paddingRight={5}>
      {problems.map((problem, index) => (
         
        <Grid item xs={200} md={100} lg={5}>
 <div data-aos="fade-up">
          <Problem key={index} problem={problem} />
          </div>
        </Grid>
    
      ))}
    </Grid>
 
    </div>
  );
};

export default TopicsQuestionsPage;
