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
import { withTheme } from "@emotion/react";
import axios from 'axios';
import data from '../assets/data'
import RemoveFavourite from "../hooks/RemoveFavourite";
import {setFpinning,Pinning,getNotes} from "../pages/TopicsListPage";

// import {AiFillPushpin}  from 'react-icons/fa';


export default function Pinned(props) {
  console.log(props)
// console.log(props.key)
  const [AddFavourite, setAddFavorited] = useState(false)
  let [Notes, setNotes] = useState(0)
  let [Pinning, setPinning] = useState([])
 
  let response="";
  let data9="";
  let arr=[];
  let farr=[];
  var count=0;
  

 const onClickRemoveFavorite=value=>()=>{
         console.log(value+" DELETED")
        axios
        .get('http://127.0.0.1:8000/api/pinned-topics/'+value+'/'+0+'/')
        .then(response=>{
           console.log("SUCCESS")
          //  updateList(list.filter(item => item.name !== name))
          // setFpinning(Pinned.filter(value=>))
        getNotes()
        })
        .catch(error=>{
           console.log("Decline")
        })
                    axios.get('http://127.0.0.1:8000/api/pinned-topics/')
                    console.log("HELLO")
      }




  // let {index,name,type}={props}
  //  console.log({ props });
  const styleObjWhite = {
    fontSize: 25,
    color:"black",
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: "0px",
    width: "100%",
    height: "100%",
  };
  // const i= parseInt({props.topic.index}); //number
  // console.log(typeof id);
  return (
    <div data-aos="fade-up">
      <Col lg={4} md={6} xs={24}>
     
        <MDBCard
          background={props.pinnedtopic.type === "light" ? "mb-3" :props.pinnedtopic.type}
          // background={props.topic.type==='light'?'mb-3': 'text-white mb-3'}
          className={props.pinnedtopic.type === "light" ? "mb-3" : "text-white mb-3"}
          style={{ maxWidth: "18rem" }}
          // path ='https://externalwebsite.com'
        >
          <MDBCardHeader>
            <p style={styleObjWhite}  >
            <Link to='/' className="link" ><i>{props.pinnedtopic.name}</i></Link>
              {/* <Button><AiFillPushpin />?</Button> */}
              </p>
           
              <Button variant="outline-success" onClick={onClickRemoveFavorite(props.pinnedtopic.index)} >REMOVE FROM FAVOURITE</Button>
             <Button><RemoveFavourite value={props.pinnedtopic.index}/></Button> 
            
          </MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>{props.pinnedtopic.name}</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
    
      </Col>
    </div>
  );
}
