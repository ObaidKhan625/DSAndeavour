// import React,{useState,useEffect} from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardHeader } from 'mdb-react-ui-kit';
import { Col } from 'antd';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Link } from 'react-router-dom';

export default function Topic(props) {
  // let {index,name,type}={props}
  const styleObj = {
    fontSize: 25,
    // color: {this.props.topic.type==='light'?'mb-3': 'text-white mb-3'} 
    textAlign: "center",
    fontWeight: 'bold',
    paddingTop: "0px",
    width: '100%', 
    height:'100%',
  }
  return (
    <div data-aos="fade-up" >
      <Col lg={4} md={6} xs={24}>
        <Link to={`/topics/${props.topic.name}`}>
          <MDBCard background={props.topic.type} className={props.topic.type==='light'?'mb-3': 'text-white mb-3'} style={{ maxWidth: '18rem' }}>
            <MDBCardHeader><p style={styleObj}><i>{props.topic.name}</i></p></MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>{props.topic.name}</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </Link>
      </Col>
    </div>
  );
}