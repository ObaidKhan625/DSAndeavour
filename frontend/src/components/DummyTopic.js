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
// import {AiFillPushpin}  from 'react-icons/fa';

export default function Problem(props) {

  const [AddFavourite, setAddFavorited] = useState(false)





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



  // let {index,name,type}={props}
  console.log({ props });
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
          background={props.topic.type === "light" ? "mb-3" :props.topic.type}
          // background={props.topic.type==='light'?'mb-3': 'text-white mb-3'}
          className={props.topic.type === "light" ? "mb-3" : "text-white mb-3"}
          style={{ maxWidth: "18rem" }}
          // path ='https://externalwebsite.com'
        >
          <MDBCardHeader>
            <p style={styleObjWhite}  >
            <Link to={`/topics/${props.topic.name}`} className="link" ><i>{props.topic.name}</i></Link>
              {/* <Button><AiFillPushpin />?</Button> */}
              </p>
           
              <Button variant="outline-success" onClick={onClickFavorite} > {!AddFavourite ? "Add to Favorites" : "Remove from favorites"}</Button>
            
          </MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>{props.topic.name}</MDBCardTitle>
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
