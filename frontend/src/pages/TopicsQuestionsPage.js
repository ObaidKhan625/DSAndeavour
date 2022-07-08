import React, { useEffect, useState, useContext } from "react";
import Grid from "@mui/material/Grid";
import Problem from "../components/Problem";
import { useParams } from "react-router-dom";
import allProblems from '../assets/problems';
import Aos from "aos";
import "aos/dist/aos.css";
import '../css/TopicList.css';
import AuthContext from "../context/AuthContext";
import Font from 'react-font';
import ClipLoader from 'react-spinners/ClipLoader';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

const TopicsQuestionsPage = () => {

  const apiBaseURL = "http://localhost:8000";

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  let { logoutUser, accessToken } = useContext(AuthContext);

  const params = useParams();

  const topicName = params.topicName;

  var problems = [];

  const [problemStatus, setProblemStatus] = useState("");
  const [problemNotesList, setProblemNotesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuOpen = Boolean(anchorEl);
  const menuId = menuOpen ? 'simple-popover' : undefined;

  const getProblemStatusAndNotes = async () => {
    let problemStatusResponse = await fetch(`${apiBaseURL}/api/problem-status/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(accessToken),
      }
    });
    let problemNotesListResponse = await fetch(`${apiBaseURL}/api/problem-notes/`, {
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
    else if(topicName === "ARRAYS 3") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for(let i = 12; i < 18; i++) {
        tempProblemStatus += problemStatusResponseJson['problem_status'][i];
        tempProblemNotes.push(problemNotesResponseJson['problems_notes'][i]);
      }
      setProblemStatus(tempProblemStatus);
      setProblemNotesList(tempProblemNotes);
    }
    else if(topicName === "ARRAYS 4") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for(let i = 18; i < 24; i++) {
        tempProblemStatus += problemStatusResponseJson['problem_status'][i];
        tempProblemNotes.push(problemNotesResponseJson['problems_notes'][i]);
      }
      setProblemStatus(tempProblemStatus);
      setProblemNotesList(tempProblemNotes);
    }
    else if(topicName === "LINKED LIST 1") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for(let i = 24; i < 30; i++) {
        tempProblemStatus += problemStatusResponseJson['problem_status'][i];
        tempProblemNotes.push(problemNotesResponseJson['problems_notes'][i]);
      }
      setProblemStatus(tempProblemStatus);
      setProblemNotesList(tempProblemNotes);
    }
    else if(topicName === "LINKED LIST 2") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for(let i = 30; i < 36; i++) {
        tempProblemStatus += problemStatusResponseJson['problem_status'][i];
        tempProblemNotes.push(problemNotesResponseJson['problems_notes'][i]);
      }
      setProblemStatus(tempProblemStatus);
      setProblemNotesList(tempProblemNotes);
    }
    else if(topicName === "LINKED LIST AND ARRAYS") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for(let i = 36; i < 42; i++) {
        tempProblemStatus += problemStatusResponseJson['problem_status'][i];
        tempProblemNotes.push(problemNotesResponseJson['problems_notes'][i]);
      }
      setProblemStatus(tempProblemStatus);
      setProblemNotesList(tempProblemNotes);
    }
    else if(topicName === "GREEDY ALGORITHM") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for(let i = 42; i < 48; i++) {
        tempProblemStatus += problemStatusResponseJson['problem_status'][i];
        tempProblemNotes.push(problemNotesResponseJson['problems_notes'][i]);
      }
      setProblemStatus(tempProblemStatus);
      setProblemNotesList(tempProblemNotes);
    }
    else if(topicName === "RECURSION") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for(let i = 48; i < 54; i++) {
        tempProblemStatus += problemStatusResponseJson['problem_status'][i];
        tempProblemNotes.push(problemNotesResponseJson['problems_notes'][i]);
      }
      setProblemStatus(tempProblemStatus);
      setProblemNotesList(tempProblemNotes);
    }
    else if(topicName === "RECURSION AND BACKTRACKING") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for(let i = 54; i < 60; i++) {
        tempProblemStatus += problemStatusResponseJson['problem_status'][i];
        tempProblemNotes.push(problemNotesResponseJson['problems_notes'][i]);
      }
      setProblemStatus(tempProblemStatus);
      setProblemNotesList(tempProblemNotes);
    }
    else if(topicName === "BINARY SEARCH") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for(let i = 60; i < 68; i++) {
        tempProblemStatus += problemStatusResponseJson['problem_status'][i];
        tempProblemNotes.push(problemNotesResponseJson['problems_notes'][i]);
      }
      setProblemStatus(tempProblemStatus);
      setProblemNotesList(tempProblemNotes);
    }
    else if(topicName === "HEAPS") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for(let i = 68; i < 74; i++) {
        tempProblemStatus += problemStatusResponseJson['problem_status'][i];
        tempProblemNotes.push(problemNotesResponseJson['problems_notes'][i]);
      }
      setProblemStatus(tempProblemStatus);
      setProblemNotesList(tempProblemNotes);
    }
    else if(topicName === "STACKS AND QUEUE") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for(let i = 74; i < 81; i++) {
        tempProblemStatus += problemStatusResponseJson['problem_status'][i];
        tempProblemNotes.push(problemNotesResponseJson['problems_notes'][i]);
      }
      setProblemStatus(tempProblemStatus);
      setProblemNotesList(tempProblemNotes);
    }
    else if(topicName === "STACKS AND QUEUE 2") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for(let i = 81; i < 91; i++) {
        tempProblemStatus += problemStatusResponseJson['problem_status'][i];
        tempProblemNotes.push(problemNotesResponseJson['problems_notes'][i]);
      }
      setProblemStatus(tempProblemStatus);
      setProblemNotesList(tempProblemNotes);
    }
    else if(topicName === "STRING") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for(let i = 91; i < 97; i++) {
        tempProblemStatus += problemStatusResponseJson['problem_status'][i];
        tempProblemNotes.push(problemNotesResponseJson['problems_notes'][i]);
      }
      setProblemStatus(tempProblemStatus);
      setProblemNotesList(tempProblemNotes);
    }
    else if(topicName === "STRING 2") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for(let i = 97; i < 103; i++) {
        tempProblemStatus += problemStatusResponseJson['problem_status'][i];
        tempProblemNotes.push(problemNotesResponseJson['problems_notes'][i]);
      }
      setProblemStatus(tempProblemStatus);
      setProblemNotesList(tempProblemNotes);
    }
    else if(topicName === "BINARY TREE") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for(let i = 103; i < 115; i++) {
        tempProblemStatus += problemStatusResponseJson['problem_status'][i];
        tempProblemNotes.push(problemNotesResponseJson['problems_notes'][i]);
      }
      setProblemStatus(tempProblemStatus);
      setProblemNotesList(tempProblemNotes);
    }
    else if(topicName === "BINARY TREE 2") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for(let i = 115; i < 123; i++) {
        tempProblemStatus += problemStatusResponseJson['problem_status'][i];
        tempProblemNotes.push(problemNotesResponseJson['problems_notes'][i]);
      }
      setProblemStatus(tempProblemStatus);
      setProblemNotesList(tempProblemNotes);
    }
    else if(topicName === "BINARY TREE 3") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for(let i = 123; i < 130; i++) {
        tempProblemStatus += problemStatusResponseJson['problem_status'][i];
        tempProblemNotes.push(problemNotesResponseJson['problems_notes'][i]);
      }
      setProblemStatus(tempProblemStatus);
      setProblemNotesList(tempProblemNotes);
    }
    else if(topicName === "BINARY SEARCH TREE") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for(let i = 130; i < 137; i++) {
        tempProblemStatus += problemStatusResponseJson['problem_status'][i];
        tempProblemNotes.push(problemNotesResponseJson['problems_notes'][i]);
      }
      setProblemStatus(tempProblemStatus);
      setProblemNotesList(tempProblemNotes);
    }
    else if(topicName === "BINARY SEARCH TREE 2") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for(let i = 137; i < 145; i++) {
        tempProblemStatus += problemStatusResponseJson['problem_status'][i];
        tempProblemNotes.push(problemNotesResponseJson['problems_notes'][i]);
      }
      setProblemStatus(tempProblemStatus);
      setProblemNotesList(tempProblemNotes);
    }
    else if(topicName === "BINARY SEARCH TREE (MISCELLAEOUS)") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for(let i = 145; i < 151; i++) {
        tempProblemStatus += problemStatusResponseJson['problem_status'][i];
        tempProblemNotes.push(problemNotesResponseJson['problems_notes'][i]);
      }
      setProblemStatus(tempProblemStatus);
      setProblemNotesList(tempProblemNotes);
    }
    else if(topicName === "GRAPH") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for(let i = 151; i < 163; i++) {
        tempProblemStatus += problemStatusResponseJson['problem_status'][i];
        tempProblemNotes.push(problemNotesResponseJson['problems_notes'][i]);
      }
      setProblemStatus(tempProblemStatus);
      setProblemNotesList(tempProblemNotes);
    }
    else if(topicName === "GRAPH 2") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for(let i = 163; i < 169; i++) {
        tempProblemStatus += problemStatusResponseJson['problem_status'][i];
        tempProblemNotes.push(problemNotesResponseJson['problems_notes'][i]);
      }
      setProblemStatus(tempProblemStatus);
      setProblemNotesList(tempProblemNotes);
    }
    else if(topicName === "DYNAMIC PROGRAMMING") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for(let i = 169; i < 176; i++) {
        tempProblemStatus += problemStatusResponseJson['problem_status'][i];
        tempProblemNotes.push(problemNotesResponseJson['problems_notes'][i]);
      }
      setProblemStatus(tempProblemStatus);
      setProblemNotesList(tempProblemNotes);
    }
    else if(topicName === "DYNAMIC PROGRAMMING 2") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for(let i = 176; i < 184; i++) {
        tempProblemStatus += problemStatusResponseJson['problem_status'][i];
        tempProblemNotes.push(problemNotesResponseJson['problems_notes'][i]);
      }
      setProblemStatus(tempProblemStatus);
      setProblemNotesList(tempProblemNotes);
    }
    else if(topicName === "TRIE") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for(let i = 184; i < 191; i++) {
        tempProblemStatus += problemStatusResponseJson['problem_status'][i];
        tempProblemNotes.push(problemNotesResponseJson['problems_notes'][i]);
      }
      setProblemStatus(tempProblemStatus);
      setProblemNotesList(tempProblemNotes);
    }
    else if(topicName === "OPERATING SYSTEM REVISION") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for(let i = 191; i < 192; i++) {
        tempProblemStatus += problemStatusResponseJson['problem_status'][i];
        tempProblemNotes.push(problemNotesResponseJson['problems_notes'][i]);
      }
      setProblemStatus(tempProblemStatus);
      setProblemNotesList(tempProblemNotes);
    }
    else if(topicName === "DBMS REVISION") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for(let i = 192; i < 193; i++) {
        tempProblemStatus += problemStatusResponseJson['problem_status'][i];
        tempProblemNotes.push(problemNotesResponseJson['problems_notes'][i]);
      }
      setProblemStatus(tempProblemStatus);
      setProblemNotesList(tempProblemNotes);
    }
    else if(topicName === "COMPUTER NETWORK REVISION") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for(let i = 193; i < 194; i++) {
        tempProblemStatus += problemStatusResponseJson['problem_status'][i];
        tempProblemNotes.push(problemNotesResponseJson['problems_notes'][i]);
      }
      setProblemStatus(tempProblemStatus);
      setProblemNotesList(tempProblemNotes);
    }
    else {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for(let i = 194; i < 195; i++) {
        tempProblemStatus += problemStatusResponseJson['problem_status'][i];
        tempProblemNotes.push(problemNotesResponseJson['problems_notes'][i]);
      }
      setProblemStatus(tempProblemStatus);
      setProblemNotesList(tempProblemNotes);
    }
    setLoading(false);
  }

  const activateLoading = async() => {
    setLoading(true);
  }

  const deactivateLoading = async() => {
    setLoading(false);
  }
  var count=0;
  useEffect(() => {
    getProblemStatusAndNotes();
      //eslint-disable-next-line
  }, [count]);
  

  if(topicName === "ARRAYS 1") {
    for(let i = 0; i < 6; i++) {
      problems.push(allProblems[i]);
    }
  }
  else if(topicName === "ARRAYS 2") {
    for(let i = 6; i < 12; i++) {
      problems.push(allProblems[i]);
    }
  }
  else if(topicName === "ARRAYS 3") {
    for(let i = 12; i < 18; i++) {
      problems.push(allProblems[i]);
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
  else if(topicName === "LINKED LIST AND ARRAYS") {
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
  else if(topicName === "BINARY SEARCH") {
    for(let i = 60; i < 68; i++) {
      problems.push(allProblems[i]);
    }
  }
  else if(topicName === "HEAPS") {
    for(let i = 68; i < 74; i++) {
      problems.push(allProblems[i]);
    }
  }
  else if(topicName === "STACKS AND QUEUE") {
    for(let i = 74; i < 81; i++) {
      problems.push(allProblems[i]);
    }
  }
  else if(topicName === "STACKS AND QUEUE 2") {
    for(let i = 81; i < 91; i++) {
      problems.push(allProblems[i]);
    }
  }
  else if(topicName === "STRING") {
    for(let i = 91; i < 97; i++) {
      problems.push(allProblems[i]);
    }
  }
  else if(topicName === "STRING 2") {
    for(let i = 97; i < 103; i++) {
      problems.push(allProblems[i]);
    }
  }
  else if(topicName === "BINARY TREE") {
    for(let i = 103; i < 115; i++) {
      problems.push(allProblems[i]);
    }
  }
  else if(topicName === "BINARY TREE 2") {
    for(let i = 115; i < 123; i++) {
      problems.push(allProblems[i]);
    }
  }
  else if(topicName === "BINARY TREE 3") {
    for(let i = 123; i < 130; i++) {
      problems.push(allProblems[i]);
    }
  }
  else if(topicName === "BINARY SEARCH TREE") {
    for(let i = 130; i < 137; i++) {
      problems.push(allProblems[i]);
    }
  }
  else if(topicName === "BINARY SEARCH TREE 2") {
    for(let i = 137; i < 145; i++) {
      problems.push(allProblems[i]);
    }
  }
  else if(topicName === "BINARY SEARCH TREE (MISCELLAEOUS)") {
    for(let i = 145; i < 151; i++) {
      problems.push(allProblems[i]);
    }
  }
  else if(topicName === "GRAPH") {
    for(let i = 151; i < 163; i++) {
      problems.push(allProblems[i]);
    }
  }
  else if(topicName === "GRAPH 2") {
    for(let i = 163; i < 169; i++) {
      problems.push(allProblems[i]);
    }
  }
  else if(topicName === "DYNAMIC PROGRAMMING") {
    for(let i = 169; i < 176; i++) {
      problems.push(allProblems[i]);
    }
  }
  else if(topicName === "DYNAMIC PROGRAMMING 2") {
    for(let i = 176; i < 184; i++) {
      problems.push(allProblems[i]);
    }
  }
  else if(topicName === "TRIE") {
    for(let i = 184; i < 191; i++) {
      problems.push(allProblems[i]);
    }
  }
  else if(topicName === "OPERATING SYSTEM REVISION") {
    for(let i = 191; i < 192; i++) {
      problems.push(allProblems[i]);
    }
  }
  else if(topicName === "DBMS REVISION") {
    for(let i = 192; i < 193; i++) {
      problems.push(allProblems[i]);
    }
  }
  else if(topicName === "COMPUTER NETWORK REVISION") {
    for(let i = 193; i < 194; i++) {
      problems.push(allProblems[i]);
    }
  }
  else {
    for(let i = 194; i < 195; i++) {
      problems.push(allProblems[i]);
    }
  }

  return (
    <div>
      <Font family="Secular One">
        <h1 style={{'textAlign': 'center', 'paddingTop': '30px', 'color': 'black'}}>
          <span style={{'float': 'left'}}>
            <Button size="large" style={{'backgroundColor': 'blue', 'marginLeft': '2vh', 'color': 'white'}} 
            onClick={() => {
              logoutUser();
            }}>
              Logout
            </Button>
          </span>
          <span>{topicName}</span>
          <ClipLoader css={'margin-left: 10px;'} loading={loading} size={40} />
          <span style={{'float': 'right'}}>
            <IconButton aria-label="settings" size="large" 
            style={{'backgroundColor': 'blue', 'marginRight': '6vh', 'color': 'white'}}
            onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
            <Popover
            id={menuId}
            open={menuOpen}
            anchorEl={anchorEl}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            >
              <Typography sx={{ p: 2 }}><a target="_blank" rel="noopener noreferrer" href="/about">About Us</a></Typography>
                  <Typography sx={{ p: 2 }}><a target="_blank" rel="noopener noreferrer" href="/feedback">Feedback</a></Typography>
                  <Typography sx={{ p: 2 }}><a target="_blank" rel="noopener noreferrer" href="https://github.com/ObaidKhan625/Striver_Sheet_Tracker">Contribute</a></Typography>
            </Popover>
          </span>
        </h1>
      </Font>
      <Grid container spacing={4} paddingTop={5} paddingLeft={5} paddingRight={5}>
        {problems.map((problem, index) => (
          <React.Fragment key={index}>
            <Grid item xs={12} md={6} lg={4}>
            <div data-aos="fade-up">
              <Problem key={index} problem={problem} 
              currProblemStatus={problemStatus[index]} currProblemNote={problemNotesList[index]}
              activateLoading={activateLoading} deactivateLoading={deactivateLoading} />
              </div>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </div>
  );
};

export default TopicsQuestionsPage;
