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
import { Button } from "@mui/material";
import '../css/DummyTopic.css';
import problems from '../assets/problems';
// import {AiFillPushpin}  from 'react-icons/fa';

export default function Problem(props) {

  const [AddFavourite, setAddFavorited] = useState(false);

  const onClickFavorite = () => {
    if(!AddFavourite)
    {
      console.log("YES")
      setAddFavorited(true)
    }
    else{
      console.log("NO")
      setAddFavorited(false)
    }
             
              
    // if (user.userData && !user.userData.isAuth) {
    //     return alert('Please Log in first');
    // }

    // if (Favorited) {
    //     //when the movie is favorited 
    //     axios.post('/api/favorite/removeFromFavorite', variables)
    //         .then(response => {
    //             if (response.data.success) {
    //                 setFavoriteNumber(FavoriteNumber - 1)
    //                 setFavorited(!Favorited)
    //             } else {
    //                 alert('Failed to Remove From Favorite')
    //             }
    //         })

    // } else {
    //     // when the movie is not already favorited
    //     axios.post('/api/favorite/addToFavorite', variables)
    //         .then(response => {
    //             if (response.data.success) {
    //                 setFavoriteNumber(FavoriteNumber + 1)
    //                 setFavorited(!Favorited)
    //             } else {
    //                 alert('Failed to Add To Favorite')
    //             }
    //         })
    // }
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
      <Col lg={4} md={6} xs={24}>
        <MDBCard
          background={props.topic.type === "light" ? "mb-3" :props.topic.type}
          className={props.topic.type === "light" ? "mb-3" : "text-white mb-3"}
          style={{ maxWidth: "18rem" }}
        >
          <MDBCardHeader>
            <p style={styleObjWhite}  >
              <Link to={`/topics/${props.topic.name}`} className="link" ><i>{props.topic.name}</i></Link>
            </p>
            <Button variant="outline-success" onClick={onClickFavorite} > {!AddFavourite ? "Add to Favorites" : "Remove from favorites"}</Button>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>Up Next</MDBCardTitle>
            <MDBCardText>
              {upNextProblemIndex === -1 ? "All Done!!!" : problems[upNextProblemIndex].name}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </Col>
    </div>
  );
}
