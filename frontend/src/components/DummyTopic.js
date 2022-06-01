import React,{useState,useEffect} from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardHeader } from 'mdb-react-ui-kit';
import { Col } from 'antd';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
export default function Problem(props) {
// let {index,name,type}={props}
 console.log({props})
 const styleObj = {
    fontSize: 25,
    // color: {this.props.topic.type==='light'?'mb-3': 'text-white mb-3'} 
    textAlign: "center",
    fontWeight: 'bold',
    paddingTop: "0px",
     width: '100%', 
    height:'100%',

}
// const i= parseInt({props.topic.index}); //number
// console.log(typeof id);
  return (





    
    <div data-aos="fade-up" >
           <Col lg={4} md={6} xs={24}>
      <MDBCard background={props.topic.type} className={props.topic.type==='light'?'mb-3': 'text-white mb-3'} style={{ maxWidth: '18rem' }}>
        <MDBCardHeader><p style={styleObj}><i>{props.topic.name}</i></p></MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>{props.topic.name}</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      </Col>
      {/* <MDBCard background='secondary' className='text-white mb-3' style={{ maxWidth: '18rem' }}>
        <MDBCardHeader>Header</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Secondary card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard background='success' className='text-white mb-3' style={{ maxWidth: '18rem' }}>
        <MDBCardHeader>Header</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Success card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard background='danger' className='text-white mb-3' style={{ maxWidth: '18rem' }}>
        <MDBCardHeader>Header</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Danger card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard background='warning' className='mb-3' style={{ maxWidth: '18rem' }}>
        <MDBCardHeader>Header</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Warning card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard background='info' className='text-body mb-3' style={{ maxWidth: '18rem' }}>
        <MDBCardHeader>Header</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Info card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard background='light' className='mb-3' style={{ maxWidth: '18rem' }}>
        <MDBCardHeader>Header</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Light card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard background='dark' className='text-white' style={{ maxWidth: '18rem' }}>
        <MDBCardHeader>Header</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Dark card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard> */}
    </div>
  );
}