import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Grid from "@mui/material/Grid";
import Problem from "../../components/Problem/Problem";
import { useParams } from "react-router-dom";
import allProblems from "../../assets/problems";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../css/TopicList.css";
import Box from "@mui/material/Box";
import AuthContext from "../../context/AuthContext";
import Font from "react-font";
import ClipLoader from "react-spinners/ClipLoader";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Popover from "@mui/material/Popover";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Cookies from "universal-cookie";
import LoadingScreen from "react-loading-screen";
import BackToTop from "../../components/BackToTop/BackToTop";
import "./TopicsQuestionsPage.css";

const TopicsQuestionsPage = () => {
  const apiBaseURL = "your_api_url";

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  let { logoutUser, accessToken } = useContext(AuthContext);
  let authenticated = false;

  const navigate = useNavigate();
  const cookies = new Cookies();
  const params = useParams();
  const topicName = params.topicName;

  if (accessToken) {
    authenticated = true;
  } else if (!cookies.get("topicsPinned") || !cookies.get("problemStatus")) {
    navigate("/login");
  }

  const problemStatusCookie = authenticated ? "" : cookies.get("problemStatus");

  var problems = [];

  const [problemStatus, setProblemStatus] = useState("");
  const [problemNotesList, setProblemNotesList] = useState([]);
  const [clear, setClear] = useState(0);
  const [loading, setLoading] = useState(true);
  const [clearLoading, setClearLoading] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuOpen = Boolean(anchorEl);
  const menuId = menuOpen ? "simple-popover" : undefined;

  let getProblemStatusAndNotes = async () => {
    let problemStatusResponseJson;
    let problemNotesResponseJson;
    if (authenticated) {
      let problemStatusResponse = await fetch(
        `${apiBaseURL}/api/problem-status/`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + String(accessToken),
          },
        }
      );
      let problemNotesListResponse = await fetch(
        `${apiBaseURL}/api/problem-notes/`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + String(accessToken),
          },
        }
      );
      if (problemStatusResponse.statusText === "Unauthorized") {
        logoutUser();
      }
      problemStatusResponseJson = await problemStatusResponse.json();
      problemNotesResponseJson = await problemNotesListResponse.json();
    }

    if (topicName === "ARRAYS 1") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for (let i = 0; i < 6; i++) {
        if (authenticated) {
          tempProblemStatus += problemStatusResponseJson["problem_status"][i];
          tempProblemNotes.push(problemNotesResponseJson["problems_notes"][i]);
        } else {
          tempProblemStatus += problemStatusCookie[i];
        }
      }
      if (authenticated) {
        setProblemNotesList(tempProblemNotes);
      }
      setProblemStatus(tempProblemStatus);
    } else if (topicName === "ARRAYS 2") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for (let i = 6; i < 12; i++) {
        if (authenticated) {
          tempProblemStatus += problemStatusResponseJson["problem_status"][i];
          tempProblemNotes.push(problemNotesResponseJson["problems_notes"][i]);
        } else {
          tempProblemStatus += problemStatusCookie[i];
        }
      }
      if (authenticated) {
        setProblemNotesList(tempProblemNotes);
      }
      setProblemStatus(tempProblemStatus);
    } else if (topicName === "ARRAYS 3") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for (let i = 12; i < 18; i++) {
        if (authenticated) {
          tempProblemStatus += problemStatusResponseJson["problem_status"][i];
          tempProblemNotes.push(problemNotesResponseJson["problems_notes"][i]);
        } else {
          tempProblemStatus += problemStatusCookie[i];
        }
      }
      if (authenticated) {
        setProblemNotesList(tempProblemNotes);
      }
      setProblemStatus(tempProblemStatus);
    } else if (topicName === "ARRAYS 4") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for (let i = 18; i < 24; i++) {
        if (authenticated) {
          tempProblemStatus += problemStatusResponseJson["problem_status"][i];
          tempProblemNotes.push(problemNotesResponseJson["problems_notes"][i]);
        } else {
          tempProblemStatus += problemStatusCookie[i];
        }
      }
      if (authenticated) {
        setProblemNotesList(tempProblemNotes);
      }
      setProblemStatus(tempProblemStatus);
    } else if (topicName === "LINKED LIST 1") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for (let i = 24; i < 30; i++) {
        if (authenticated) {
          tempProblemStatus += problemStatusResponseJson["problem_status"][i];
          tempProblemNotes.push(problemNotesResponseJson["problems_notes"][i]);
        } else {
          tempProblemStatus += problemStatusCookie[i];
        }
      }
      if (authenticated) {
        setProblemNotesList(tempProblemNotes);
      }
      setProblemStatus(tempProblemStatus);
    } else if (topicName === "LINKED LIST 2") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for (let i = 30; i < 36; i++) {
        if (authenticated) {
          tempProblemStatus += problemStatusResponseJson["problem_status"][i];
          tempProblemNotes.push(problemNotesResponseJson["problems_notes"][i]);
        } else {
          tempProblemStatus += problemStatusCookie[i];
        }
      }
      if (authenticated) {
        setProblemNotesList(tempProblemNotes);
      }
      setProblemStatus(tempProblemStatus);
    } else if (topicName === "LINKED LIST AND ARRAYS") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for (let i = 36; i < 42; i++) {
        if (authenticated) {
          tempProblemStatus += problemStatusResponseJson["problem_status"][i];
          tempProblemNotes.push(problemNotesResponseJson["problems_notes"][i]);
        } else {
          tempProblemStatus += problemStatusCookie[i];
        }
      }
      if (authenticated) {
        setProblemNotesList(tempProblemNotes);
      }
      setProblemStatus(tempProblemStatus);
    } else if (topicName === "GREEDY ALGORITHM") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for (let i = 42; i < 48; i++) {
        if (authenticated) {
          tempProblemStatus += problemStatusResponseJson["problem_status"][i];
          tempProblemNotes.push(problemNotesResponseJson["problems_notes"][i]);
        } else {
          tempProblemStatus += problemStatusCookie[i];
        }
      }
      if (authenticated) {
        setProblemNotesList(tempProblemNotes);
      }
      setProblemStatus(tempProblemStatus);
    } else if (topicName === "RECURSION") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for (let i = 48; i < 54; i++) {
        if (authenticated) {
          tempProblemStatus += problemStatusResponseJson["problem_status"][i];
          tempProblemNotes.push(problemNotesResponseJson["problems_notes"][i]);
        } else {
          tempProblemStatus += problemStatusCookie[i];
        }
      }
      if (authenticated) {
        setProblemNotesList(tempProblemNotes);
      }
      setProblemStatus(tempProblemStatus);
    } else if (topicName === "RECURSION AND BACKTRACKING") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for (let i = 54; i < 60; i++) {
        if (authenticated) {
          tempProblemStatus += problemStatusResponseJson["problem_status"][i];
          tempProblemNotes.push(problemNotesResponseJson["problems_notes"][i]);
        } else {
          tempProblemStatus += problemStatusCookie[i];
        }
      }
      if (authenticated) {
        setProblemNotesList(tempProblemNotes);
      }
      setProblemStatus(tempProblemStatus);
    } else if (topicName === "BINARY SEARCH") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for (let i = 60; i < 68; i++) {
        if (authenticated) {
          tempProblemStatus += problemStatusResponseJson["problem_status"][i];
          tempProblemNotes.push(problemNotesResponseJson["problems_notes"][i]);
        } else {
          tempProblemStatus += problemStatusCookie[i];
        }
      }
      if (authenticated) {
        setProblemNotesList(tempProblemNotes);
      }
      setProblemStatus(tempProblemStatus);
    } else if (topicName === "HEAPS") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for (let i = 68; i < 74; i++) {
        if (authenticated) {
          tempProblemStatus += problemStatusResponseJson["problem_status"][i];
          tempProblemNotes.push(problemNotesResponseJson["problems_notes"][i]);
        } else {
          tempProblemStatus += problemStatusCookie[i];
        }
      }
      if (authenticated) {
        setProblemNotesList(tempProblemNotes);
      }
      setProblemStatus(tempProblemStatus);
    } else if (topicName === "STACKS AND QUEUE") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for (let i = 74; i < 81; i++) {
        if (authenticated) {
          tempProblemStatus += problemStatusResponseJson["problem_status"][i];
          tempProblemNotes.push(problemNotesResponseJson["problems_notes"][i]);
        } else {
          tempProblemStatus += problemStatusCookie[i];
        }
      }
      if (authenticated) {
        setProblemNotesList(tempProblemNotes);
      }
      setProblemStatus(tempProblemStatus);
    } else if (topicName === "STACKS AND QUEUE 2") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for (let i = 81; i < 91; i++) {
        if (authenticated) {
          tempProblemStatus += problemStatusResponseJson["problem_status"][i];
          tempProblemNotes.push(problemNotesResponseJson["problems_notes"][i]);
        } else {
          tempProblemStatus += problemStatusCookie[i];
        }
      }
      if (authenticated) {
        setProblemNotesList(tempProblemNotes);
      }
      setProblemStatus(tempProblemStatus);
    } else if (topicName === "STRING") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for (let i = 91; i < 97; i++) {
        if (authenticated) {
          tempProblemStatus += problemStatusResponseJson["problem_status"][i];
          tempProblemNotes.push(problemNotesResponseJson["problems_notes"][i]);
        } else {
          tempProblemStatus += problemStatusCookie[i];
        }
      }
      if (authenticated) {
        setProblemNotesList(tempProblemNotes);
      }
      setProblemStatus(tempProblemStatus);
    } else if (topicName === "STRING 2") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for (let i = 97; i < 103; i++) {
        if (authenticated) {
          tempProblemStatus += problemStatusResponseJson["problem_status"][i];
          tempProblemNotes.push(problemNotesResponseJson["problems_notes"][i]);
        } else {
          tempProblemStatus += problemStatusCookie[i];
        }
      }
      if (authenticated) {
        setProblemNotesList(tempProblemNotes);
      }
      setProblemStatus(tempProblemStatus);
    } else if (topicName === "BINARY TREE") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for (let i = 103; i < 115; i++) {
        if (authenticated) {
          tempProblemStatus += problemStatusResponseJson["problem_status"][i];
          tempProblemNotes.push(problemNotesResponseJson["problems_notes"][i]);
        } else {
          tempProblemStatus += problemStatusCookie[i];
        }
      }
      if (authenticated) {
        setProblemNotesList(tempProblemNotes);
      }
      setProblemStatus(tempProblemStatus);
    } else if (topicName === "BINARY TREE 2") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for (let i = 115; i < 123; i++) {
        if (authenticated) {
          tempProblemStatus += problemStatusResponseJson["problem_status"][i];
          tempProblemNotes.push(problemNotesResponseJson["problems_notes"][i]);
        } else {
          tempProblemStatus += problemStatusCookie[i];
        }
      }
      if (authenticated) {
        setProblemNotesList(tempProblemNotes);
      }
      setProblemStatus(tempProblemStatus);
    } else if (topicName === "BINARY TREE 3") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for (let i = 123; i < 130; i++) {
        if (authenticated) {
          tempProblemStatus += problemStatusResponseJson["problem_status"][i];
          tempProblemNotes.push(problemNotesResponseJson["problems_notes"][i]);
        } else {
          tempProblemStatus += problemStatusCookie[i];
        }
      }
      if (authenticated) {
        setProblemNotesList(tempProblemNotes);
      }
      setProblemStatus(tempProblemStatus);
    } else if (topicName === "BINARY SEARCH TREE") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for (let i = 130; i < 137; i++) {
        if (authenticated) {
          tempProblemStatus += problemStatusResponseJson["problem_status"][i];
          tempProblemNotes.push(problemNotesResponseJson["problems_notes"][i]);
        } else {
          tempProblemStatus += problemStatusCookie[i];
        }
      }
      if (authenticated) {
        setProblemNotesList(tempProblemNotes);
      }
      setProblemStatus(tempProblemStatus);
    } else if (topicName === "BINARY SEARCH TREE 2") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for (let i = 137; i < 145; i++) {
        if (authenticated) {
          tempProblemStatus += problemStatusResponseJson["problem_status"][i];
          tempProblemNotes.push(problemNotesResponseJson["problems_notes"][i]);
        } else {
          tempProblemStatus += problemStatusCookie[i];
        }
      }
      if (authenticated) {
        setProblemNotesList(tempProblemNotes);
      }
      setProblemStatus(tempProblemStatus);
    } else if (topicName === "BINARY SEARCH TREE (MISCELLAEOUS)") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for (let i = 145; i < 151; i++) {
        if (authenticated) {
          tempProblemStatus += problemStatusResponseJson["problem_status"][i];
          tempProblemNotes.push(problemNotesResponseJson["problems_notes"][i]);
        } else {
          tempProblemStatus += problemStatusCookie[i];
        }
      }
      if (authenticated) {
        setProblemNotesList(tempProblemNotes);
      }
      setProblemStatus(tempProblemStatus);
    } else if (topicName === "GRAPH") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for (let i = 151; i < 163; i++) {
        if (authenticated) {
          tempProblemStatus += problemStatusResponseJson["problem_status"][i];
          tempProblemNotes.push(problemNotesResponseJson["problems_notes"][i]);
        } else {
          tempProblemStatus += problemStatusCookie[i];
        }
      }
      if (authenticated) {
        setProblemNotesList(tempProblemNotes);
      }
      setProblemStatus(tempProblemStatus);
    } else if (topicName === "GRAPH 2") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for (let i = 163; i < 169; i++) {
        if (authenticated) {
          tempProblemStatus += problemStatusResponseJson["problem_status"][i];
          tempProblemNotes.push(problemNotesResponseJson["problems_notes"][i]);
        } else {
          tempProblemStatus += problemStatusCookie[i];
        }
      }
      if (authenticated) {
        setProblemNotesList(tempProblemNotes);
      }
      setProblemStatus(tempProblemStatus);
    } else if (topicName === "DYNAMIC PROGRAMMING") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for (let i = 169; i < 176; i++) {
        if (authenticated) {
          tempProblemStatus += problemStatusResponseJson["problem_status"][i];
          tempProblemNotes.push(problemNotesResponseJson["problems_notes"][i]);
        } else {
          tempProblemStatus += problemStatusCookie[i];
        }
      }
      if (authenticated) {
        setProblemNotesList(tempProblemNotes);
      }
      setProblemStatus(tempProblemStatus);
    } else if (topicName === "DYNAMIC PROGRAMMING 2") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for (let i = 176; i < 184; i++) {
        if (authenticated) {
          tempProblemStatus += problemStatusResponseJson["problem_status"][i];
          tempProblemNotes.push(problemNotesResponseJson["problems_notes"][i]);
        } else {
          tempProblemStatus += problemStatusCookie[i];
        }
      }
      if (authenticated) {
        setProblemNotesList(tempProblemNotes);
      }
      setProblemStatus(tempProblemStatus);
    } else if (topicName === "TRIE") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for (let i = 184; i < 191; i++) {
        if (authenticated) {
          tempProblemStatus += problemStatusResponseJson["problem_status"][i];
          tempProblemNotes.push(problemNotesResponseJson["problems_notes"][i]);
        } else {
          tempProblemStatus += problemStatusCookie[i];
        }
      }
      if (authenticated) {
        setProblemNotesList(tempProblemNotes);
      }
      setProblemStatus(tempProblemStatus);
    } else if (topicName === "OPERATING SYSTEM REVISION") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for (let i = 191; i < 192; i++) {
        if (authenticated) {
          tempProblemStatus += problemStatusResponseJson["problem_status"][i];
          tempProblemNotes.push(problemNotesResponseJson["problems_notes"][i]);
        } else {
          tempProblemStatus += problemStatusCookie[i];
        }
      }
      if (authenticated) {
        setProblemNotesList(tempProblemNotes);
      }
      setProblemStatus(tempProblemStatus);
    } else if (topicName === "DBMS REVISION") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for (let i = 192; i < 193; i++) {
        if (authenticated) {
          tempProblemStatus += problemStatusResponseJson["problem_status"][i];
          tempProblemNotes.push(problemNotesResponseJson["problems_notes"][i]);
        } else {
          tempProblemStatus += problemStatusCookie[i];
        }
      }
      if (authenticated) {
        setProblemNotesList(tempProblemNotes);
      }
      setProblemStatus(tempProblemStatus);
    } else if (topicName === "COMPUTER NETWORK REVISION") {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for (let i = 193; i < 194; i++) {
        if (authenticated) {
          tempProblemStatus += problemStatusResponseJson["problem_status"][i];
          tempProblemNotes.push(problemNotesResponseJson["problems_notes"][i]);
        } else {
          tempProblemStatus += problemStatusCookie[i];
        }
      }
      if (authenticated) {
        setProblemNotesList(tempProblemNotes);
      }
      setProblemStatus(tempProblemStatus);
    } else {
      let tempProblemStatus = "";
      let tempProblemNotes = [];
      for (let i = 194; i < 195; i++) {
        if (authenticated) {
          tempProblemStatus += problemStatusResponseJson["problem_status"][i];
          tempProblemNotes.push(problemNotesResponseJson["problems_notes"][i]);
        } else {
          tempProblemStatus += problemStatusCookie[i];
        }
      }
      if (authenticated) {
        setProblemNotesList(tempProblemNotes);
      }
      setProblemStatus(tempProblemStatus);
    }
    setLoading(false);
  };

  const activateLoading = async () => {
    setLoading(true);
  };

  const deactivateLoading = async () => {
    setLoading(false);
  };
  var count = 0;
  useEffect(() => {
    getProblemStatusAndNotes();
    //eslint-disable-next-line
  }, [count]);

  if (topicName === "ARRAYS 1") {
    for (let i = 0; i < 6; i++) {
      problems.push(allProblems[i]);
    }
  } else if (topicName === "ARRAYS 2") {
    for (let i = 6; i < 12; i++) {
      problems.push(allProblems[i]);
    }
  } else if (topicName === "ARRAYS 3") {
    for (let i = 12; i < 18; i++) {
      problems.push(allProblems[i]);
    }
  } else if (topicName === "ARRAYS 4") {
    for (let i = 18; i < 24; i++) {
      problems.push(allProblems[i]);
    }
  } else if (topicName === "LINKED LIST 1") {
    for (let i = 24; i < 30; i++) {
      problems.push(allProblems[i]);
    }
  } else if (topicName === "LINKED LIST 2") {
    for (let i = 30; i < 36; i++) {
      problems.push(allProblems[i]);
    }
  } else if (topicName === "LINKED LIST AND ARRAYS") {
    for (let i = 36; i < 42; i++) {
      problems.push(allProblems[i]);
    }
  } else if (topicName === "GREEDY ALGORITHM") {
    for (let i = 42; i < 48; i++) {
      problems.push(allProblems[i]);
    }
  } else if (topicName === "RECURSION") {
    for (let i = 48; i < 54; i++) {
      problems.push(allProblems[i]);
    }
  } else if (topicName === "RECURSION AND BACKTRACKING") {
    for (let i = 54; i < 60; i++) {
      problems.push(allProblems[i]);
    }
  } else if (topicName === "BINARY SEARCH") {
    for (let i = 60; i < 68; i++) {
      problems.push(allProblems[i]);
    }
  } else if (topicName === "HEAPS") {
    for (let i = 68; i < 74; i++) {
      problems.push(allProblems[i]);
    }
  } else if (topicName === "STACKS AND QUEUE") {
    for (let i = 74; i < 81; i++) {
      problems.push(allProblems[i]);
    }
  } else if (topicName === "STACKS AND QUEUE 2") {
    for (let i = 81; i < 91; i++) {
      problems.push(allProblems[i]);
    }
  } else if (topicName === "STRING") {
    for (let i = 91; i < 97; i++) {
      problems.push(allProblems[i]);
    }
  } else if (topicName === "STRING 2") {
    for (let i = 97; i < 103; i++) {
      problems.push(allProblems[i]);
    }
  } else if (topicName === "BINARY TREE") {
    for (let i = 103; i < 115; i++) {
      problems.push(allProblems[i]);
    }
  } else if (topicName === "BINARY TREE 2") {
    for (let i = 115; i < 123; i++) {
      problems.push(allProblems[i]);
    }
  } else if (topicName === "BINARY TREE 3") {
    for (let i = 123; i < 130; i++) {
      problems.push(allProblems[i]);
    }
  } else if (topicName === "BINARY SEARCH TREE") {
    for (let i = 130; i < 137; i++) {
      problems.push(allProblems[i]);
    }
  } else if (topicName === "BINARY SEARCH TREE 2") {
    for (let i = 137; i < 145; i++) {
      problems.push(allProblems[i]);
    }
  } else if (topicName === "BINARY SEARCH TREE (MISCELLAEOUS)") {
    for (let i = 145; i < 151; i++) {
      problems.push(allProblems[i]);
    }
  } else if (topicName === "GRAPH") {
    for (let i = 151; i < 163; i++) {
      problems.push(allProblems[i]);
    }
  } else if (topicName === "GRAPH 2") {
    for (let i = 163; i < 169; i++) {
      problems.push(allProblems[i]);
    }
  } else if (topicName === "DYNAMIC PROGRAMMING") {
    for (let i = 169; i < 176; i++) {
      problems.push(allProblems[i]);
    }
  } else if (topicName === "DYNAMIC PROGRAMMING 2") {
    for (let i = 176; i < 184; i++) {
      problems.push(allProblems[i]);
    }
  } else if (topicName === "TRIE") {
    for (let i = 184; i < 191; i++) {
      problems.push(allProblems[i]);
    }
  } else if (topicName === "OPERATING SYSTEM REVISION") {
    for (let i = 191; i < 192; i++) {
      problems.push(allProblems[i]);
    }
  } else if (topicName === "DBMS REVISION") {
    for (let i = 192; i < 193; i++) {
      problems.push(allProblems[i]);
    }
  } else if (topicName === "COMPUTER NETWORK REVISION") {
    for (let i = 193; i < 194; i++) {
      problems.push(allProblems[i]);
    }
  } else {
    for (let i = 194; i < 195; i++) {
      problems.push(allProblems[i]);
    }
  }

  const clearAll = async () => {
    if (authenticated) {
      setClearLoading(true);
      if (topicName === "ARRAYS 1") {
        for (let i = 0; i < 6; i++) {
          await fetch(`${apiBaseURL}/api/problem-status/${i}/0/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + String(accessToken),
            },
          });
        }
        setClear((clear) => clear + 1);
      } else if (topicName === "ARRAYS 2") {
        for (let i = 6; i < 12; i++) {
          await fetch(`${apiBaseURL}/api/problem-status/${i}/0/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + String(accessToken),
            },
          });
        }
        setClear((clear) => clear + 1);
      } else if (topicName === "ARRAYS 3") {
        for (let i = 12; i < 18; i++) {
          await fetch(`${apiBaseURL}/api/problem-status/${i}/0/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + String(accessToken),
            },
          });
        }
        setClear((clear) => clear + 1);
      } else if (topicName === "ARRAYS 4") {
        for (let i = 18; i < 24; i++) {
          await fetch(`${apiBaseURL}/api/problem-status/${i}/0/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + String(accessToken),
            },
          });
        }
        setClear((clear) => clear + 1);
      } else if (topicName === "LINKED LIST 1") {
        for (let i = 24; i < 30; i++) {
          await fetch(`${apiBaseURL}/api/problem-status/${i}/0/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + String(accessToken),
            },
          });
        }
        setClear((clear) => clear + 1);
      } else if (topicName === "LINKED LIST 2") {
        for (let i = 30; i < 36; i++) {
          await fetch(`${apiBaseURL}/api/problem-status/${i}/0/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + String(accessToken),
            },
          });
        }
        setClear((clear) => clear + 1);
      } else if (topicName === "LINKED LIST AND ARRAYS") {
        for (let i = 36; i < 42; i++) {
          await fetch(`${apiBaseURL}/api/problem-status/${i}/0/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + String(accessToken),
            },
          });
        }
        setClear((clear) => clear + 1);
      } else if (topicName === "GREEDY ALGORITHM") {
        for (let i = 42; i < 48; i++) {
          await fetch(`${apiBaseURL}/api/problem-status/${i}/0/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + String(accessToken),
            },
          });
        }
        setClear((clear) => clear + 1);
      } else if (topicName === "RECURSION") {
        for (let i = 48; i < 54; i++) {
          await fetch(`${apiBaseURL}/api/problem-status/${i}/0/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + String(accessToken),
            },
          });
        }
        setClear((clear) => clear + 1);
      } else if (topicName === "RECURSION AND BACKTRACKING") {
        for (let i = 54; i < 60; i++) {
          await fetch(`${apiBaseURL}/api/problem-status/${i}/0/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + String(accessToken),
            },
          });
        }
        setClear((clear) => clear + 1);
      } else if (topicName === "BINARY SEARCH") {
        for (let i = 60; i < 68; i++) {
          await fetch(`${apiBaseURL}/api/problem-status/${i}/0/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + String(accessToken),
            },
          });
        }
        setClear((clear) => clear + 1);
      } else if (topicName === "HEAPS") {
        for (let i = 68; i < 74; i++) {
          await fetch(`${apiBaseURL}/api/problem-status/${i}/0/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + String(accessToken),
            },
          });
        }
        setClear((clear) => clear + 1);
      } else if (topicName === "STACKS AND QUEUE") {
        for (let i = 74; i < 81; i++) {
          await fetch(`${apiBaseURL}/api/problem-status/${i}/0/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + String(accessToken),
            },
          });
        }
        setClear((clear) => clear + 1);
      } else if (topicName === "STACKS AND QUEUE 2") {
        for (let i = 81; i < 91; i++) {
          await fetch(`${apiBaseURL}/api/problem-status/${i}/0/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + String(accessToken),
            },
          });
        }
        setClear((clear) => clear + 1);
      } else if (topicName === "STRING") {
        for (let i = 91; i < 97; i++) {
          await fetch(`${apiBaseURL}/api/problem-status/${i}/0/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + String(accessToken),
            },
          });
        }
        setClear((clear) => clear + 1);
      } else if (topicName === "STRING 2") {
        for (let i = 97; i < 103; i++) {
          await fetch(`${apiBaseURL}/api/problem-status/${i}/0/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + String(accessToken),
            },
          });
        }
        setClear((clear) => clear + 1);
      } else if (topicName === "BINARY TREE") {
        for (let i = 103; i < 115; i++) {
          await fetch(`${apiBaseURL}/api/problem-status/${i}/0/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + String(accessToken),
            },
          });
        }
        setClear((clear) => clear + 1);
      } else if (topicName === "BINARY TREE 2") {
        for (let i = 115; i < 123; i++) {
          await fetch(`${apiBaseURL}/api/problem-status/${i}/0/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + String(accessToken),
            },
          });
        }
        setClear((clear) => clear + 1);
      } else if (topicName === "BINARY TREE 3") {
        for (let i = 123; i < 130; i++) {
          await fetch(`${apiBaseURL}/api/problem-status/${i}/0/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + String(accessToken),
            },
          });
        }
        setClear((clear) => clear + 1);
      } else if (topicName === "BINARY SEARCH TREE") {
        for (let i = 130; i < 137; i++) {
          await fetch(`${apiBaseURL}/api/problem-status/${i}/0/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + String(accessToken),
            },
          });
        }
        setClear((clear) => clear + 1);
      } else if (topicName === "BINARY SEARCH TREE 2") {
        for (let i = 137; i < 145; i++) {
          await fetch(`${apiBaseURL}/api/problem-status/${i}/0/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + String(accessToken),
            },
          });
        }
        setClear((clear) => clear + 1);
      } else if (topicName === "BINARY SEARCH TREE (MISCELLAEOUS)") {
        for (let i = 145; i < 151; i++) {
          await fetch(`${apiBaseURL}/api/problem-status/${i}/0/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + String(accessToken),
            },
          });
        }
        setClear((clear) => clear + 1);
      } else if (topicName === "GRAPH") {
        for (let i = 151; i < 163; i++) {
          await fetch(`${apiBaseURL}/api/problem-status/${i}/0/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + String(accessToken),
            },
          });
        }
        setClear((clear) => clear + 1);
      } else if (topicName === "GRAPH 2") {
        for (let i = 163; i < 169; i++) {
          await fetch(`${apiBaseURL}/api/problem-status/${i}/0/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + String(accessToken),
            },
          });
        }
        setClear((clear) => clear + 1);
      } else if (topicName === "DYNAMIC PROGRAMMING") {
        for (let i = 169; i < 176; i++) {
          let reposen = await fetch(
            `${apiBaseURL}/api/problem-status/${i}/0/`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + String(accessToken),
              },
            }
          );
        }
        setClear((clear) => clear + 1);
      } else if (topicName === "DYNAMIC PROGRAMMING 2") {
        for (let i = 176; i < 184; i++) {
          await fetch(`${apiBaseURL}/api/problem-status/${i}/0/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + String(accessToken),
            },
          });
        }
        setClear((clear) => clear + 1);
      } else if (topicName === "TRIE") {
        for (let i = 184; i < 191; i++) {
          await fetch(`${apiBaseURL}/api/problem-status/${i}/0/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + String(accessToken),
            },
          });
        }
        setClear((clear) => clear + 1);
      } else if (topicName === "OPERATING SYSTEM REVISION") {
        for (let i = 191; i < 192; i++) {
          await fetch(`${apiBaseURL}/api/problem-status/${i}/0/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + String(accessToken),
            },
          });
        }
        setClear((clear) => clear + 1);
      } else if (topicName === "DBMS REVISION") {
        for (let i = 192; i < 193; i++) {
          await fetch(`${apiBaseURL}/api/problem-status/${i}/0/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + String(accessToken),
            },
          });
        }
        setClear((clear) => clear + 1);
      } else if (topicName === "COMPUTER NETWORK REVISION") {
        for (let i = 193; i < 194; i++) {
          await fetch(`${apiBaseURL}/api/problem-status/${i}/0/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + String(accessToken),
            },
          });
        }
        setClear((clear) => clear + 1);
      } else {
        for (let i = 194; i < 195; i++) {
          await fetch(`${apiBaseURL}/api/problem-status/${i}/0/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + String(accessToken),
            },
          });
        }
        setClear((clear) => clear + 1);
      }
      setClearLoading(false);
      swal({
        title: "Done!",
        text: "Cleared All Problems!",
        icon: "error",
        dangerMode: true,
        button: false,
        timer: 800,
      });
    } else {
      alert("Please Login to Clear All :)");
    }
  };

  return (
    <>
      <div>
        <LoadingScreen
          loading={clearLoading}
          bgColor="linear-gradient(to right, #f64f59, #c471ed, #12c2e9);"
          spinnerColor="#9ee5f8"
          textColor="black"
          text="Please Wait"
        >
          <Font family="Secular One">
            <h1
              style={{
                textAlign: "center",
                paddingTop: "30px",
                color: "black",
              }}
            >
              <span style={{ float: "left" }}>
                <Button
                  size="large"
                  style={{
                    backgroundColor: "blue",
                    marginLeft: "2vh",
                    color: "white",
                  }}
                  onClick={() => {
                    logoutUser();
                  }}
                >
                  <b>{authenticated ? "LOGOUT" : "SIGN-IN"}</b>
                </Button>
              </span>
              <span>{topicName}</span>

              <ClipLoader
                css={"margin-left: 10px;"}
                loading={loading}
                size={40}
              />
              <span style={{ float: "right" }}>
                <IconButton
                  aria-label="settings"
                  size="large"
                  style={{
                    backgroundColor: "blue",
                    marginRight: "6vh",
                    color: "white",
                  }}
                  onClick={handleMenuClick}
                >
                  <MenuIcon />
                </IconButton>
                <Popover
                  id={menuId}
                  open={menuOpen}
                  anchorEl={anchorEl}
                  onClose={handleMenuClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <Typography sx={{ p: 2 }}>
                    <a target="_blank" rel="noopener noreferrer" href="/about">
                      About Us
                    </a>
                  </Typography>
                  <Typography sx={{ p: 2 }}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="/feedback"
                    >
                      Feedback
                    </a>
                  </Typography>
                  <Typography sx={{ p: 2 }}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/ObaidKhan625/Striver_Sheet_Tracker"
                    >
                      Contribute
                    </a>
                  </Typography>
                </Popover>
              </span>
            </h1>
          </Font>

          <Box textAlign="center">
            <Button
              size="large"
              sx={{ textAlign: "center", border: 1, borderColor: "text.light" }}
              style={{
                marginLeft: "2vh",
                color: "white",
                background: "transparent",
                boxShadow: "none",
                borderRadius: "5px",
              }}
              onClick={() => {
                clearAll();
              }}
            >
              <b>
                Clear All
                <DeleteIcon />
              </b>
            </Button>
          </Box>
          <Grid
            container
            spacing={4}
            paddingTop={5}
            paddingLeft={5}
            paddingRight={5}
            className="questions__grid"
          >
            {problems.map((problem, index) => (
              <React.Fragment key={index}>
                <Grid item xs={12} md={6} lg={4} className="questions__cards">
                  <>
                    <Problem
                      key={index}
                      problem={problem}
                      currProblemStatus={problemStatus[index]}
                      currProblemNote={problemNotesList[index]}
                      clear={clear}
                      activateLoading={activateLoading}
                      deactivateLoading={deactivateLoading}
                    />
                  </>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </LoadingScreen>
      </div>
      <BackToTop />
    </>
  );
};

export default TopicsQuestionsPage;
