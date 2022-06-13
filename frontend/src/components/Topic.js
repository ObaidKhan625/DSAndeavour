import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader,
} from "mdb-react-ui-kit";
import { Col } from "antd";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import '../css/DummyTopic.css';
import problems from '../assets/problems';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import "aos/dist/aos.css";
import Button from "react-bootstrap/Button";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InfoIcon from '@mui/icons-material/Info';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';

export default function Problem(props) {

  const [AddFavourite, setAddFavorited] = useState(false);

  const onClickFavorite = () => {
    if(!AddFavourite)
    {
      setAddFavorited(true)
    }
    else{
      setAddFavorited(false)
    }
  }

  var upNextProblemIndex = -1;
  if(props.topic.name === "ARRAYS 1") {
    for(let i = 0; i < 6; i++) {
      if(props.problem_status[i] === '0') {
        upNextProblemIndex = i; break;
      }
    }
  }
  else if(props.topic.name === "ARRAYS 2") {
    for(let i = 6; i < 12; i++) {
      if(props.problem_status[i] === '0') {
        upNextProblemIndex = i; break;
      }
    }
  }
  else if(props.topic.name === "ARRAYS 3") {
    for(let i = 12; i < 18; i++) {
      if(props.problem_status[i] === '0') {
        upNextProblemIndex = i; break;
      }
    }
  }
  else if(props.topic.name === "ARRAYS 4") {
    for(let i = 18; i < 24; i++) {
      if(props.problem_status[i] === '0') {
        upNextProblemIndex = i; break;
      }
    }
  }
  else if(props.topic.name === "LINKED LIST 1") {
    for(let i = 24; i < 30; i++) {
      if(props.problem_status[i] === '0') {
        upNextProblemIndex = i; break;
      }
    }
  }
  else if(props.topic.name === "LINKED LIST 2") {
    for(let i = 30; i < 36; i++) {
      if(props.problem_status[i] === '0') {
        upNextProblemIndex = i; break;
      }
    }
  }
  else if(props.topic.name === "LINKED LIST AND ARRAYS") {
    for(let i = 36; i < 42; i++) {
      if(props.problem_status[i] === '0') {
        upNextProblemIndex = i; break;
      }
    }
  }
  else if(props.topic.name === "GREEDY ALGORITHM") {
    for(let i = 42; i < 48; i++) {
      if(props.problem_status[i] === '0') {
        upNextProblemIndex = i; break;
      }
    }
  }
  else if(props.topic.name === "RECURSION") {
    for(let i = 48; i < 54; i++) {
      if(props.problem_status[i] === '0') {
        upNextProblemIndex = i; break;
      }
    }
  }
  else if(props.topic.name === "RECURSION AND BACKTRACKING") {
    for(let i = 54; i < 60; i++) {
      if(props.problem_status[i] === '0') {
        upNextProblemIndex = i; break;
      }
    }
  }
  else {
    for(let i = 0; i < 6; i++) {
      if(props.problem_status[i] === '0') {
        upNextProblemIndex = i; break;
      }
    }
  }

  // let {index,name,type}={props}
  const styleObjWhite = {
    fontSize: 25,
    color:"black",
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: "0px",
    width: "100%",
    height: "100%",
  };
  return (
    <div data-aos="fade-up">
      <Card variant="outlined">
        <Link to={`/topics/${props.topic.name}`} className="link" >
          <CardHeader
            title={props.topic.name}
            sx = {{textAlign: 'center', color: 'black'}}
          />
        </Link>
        <CardContent>
          <b>Up Next</b><br />
          {upNextProblemIndex === -1 ? "All Done!!!" : problems[upNextProblemIndex].name}
        </CardContent>
      </Card>
      {/* <Col lg={4} md={6} xs={24}>
        <MDBCard
          background={props.topic.type === "light" ? "mb-3" :props.topic.type}
          className={props.topic.type === "light" ? "mb-3" : "text-white mb-3"}
          style={{ maxWidth: "18rem" }}
        >
          <MDBCardHeader>
            <p style={styleObjWhite}  >
              <Link to={`/topics/${props.topic.name}`} className="link" ><i>{props.topic.name}</i></Link>
            </p>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>Up Next</MDBCardTitle>
            <MDBCardText>
              {upNextProblemIndex === -1 ? "All Done!!!" : problems[upNextProblemIndex].name}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </Col> */}
    </div>
  );
}
