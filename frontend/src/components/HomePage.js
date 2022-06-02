import React from 'react';
import { Link } from 'react-router-dom';
import home from '../img/home.png';
import styles from '../css/Home.css';
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";


function HomePage() {
    const myStyle={
        // backgroundImage: `url(${Background})`,
                    
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        
        <div className='myStyle'>
            {/* <img src={home} alt=""  width="100%" height="100%"/> */}
        {/* <div
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        
        > */}
           
            <b>WELCOME TO STRIVER SHEET</b>
           <Button><Link to="/topics">GET STARTED</Link></Button> 


           <h3>Normal Buttons</h3>
      <ButtonGroup aria-label="Basic example">
        <Button variant="primary">
            Primary variant Button
        </Button>
        <Button variant="secondary">
            Secondary variant Button
        </Button>
        <Button variant="danger">
            Danger variant Button
        </Button>
        <Button variant="warning">
            Warning variant Button
        </Button>
        <Button variant="info">
            Info variant Button
        </Button>
        <Button variant="success">
            Success variant Button
        </Button>
        <Button variant="light">
            Light variant Button
        </Button>
        <Button variant="dark">
            Dark variant Button
        </Button>
      </ButtonGroup>
  
      <br />
      <br />
      <br />
  
      <h3>Outline Variant Buttons</h3>
  
      <ButtonGroup>
        <Button variant="outline-primary">
          Primary variant outline Button
        </Button>
        <Button variant="outline-secondary">
            Secondary outline Button
        </Button>
        <Button variant="outline-success">
            Success outline Button
        </Button>
        <Button variant="outline-warning">
            Warning outline Button
        </Button>
        <Button variant="outline-danger">
            Danger outline Button
        </Button>
        <Button variant="outline-info">
            Info outline Button
        </Button>
        <Button variant="outline-dark">
            Dark outline Button
        </Button>
      </ButtonGroup>
  
      <br />
      <br />
      <br />
  
      <h3>Size Variant Buttons</h3>
  
      <ButtonGroup>
        <Button variant="primary" size="lg">
          Large variant primary Button
        </Button>
        <Button variant="secondary" size="sm">
          Small variant secondary Button
        </Button>
      </ButtonGroup>
  
      <br />
      <br />
  
      <h3>Disabled Variant Buttons</h3>
  
      <ButtonGroup>
        <Button variant="primary" size="lg" disabled>
          Disabled Large variant primary Button
        </Button>
        <Button variant="secondary" size="sm" disabled>
          Disabled Small variant secondary Button
        </Button>
      </ButtonGroup>






        
        </div>

    //     <header>
    //     <div className = "head-text">
    //       <div className = "head-image">
    //         <img src = {home} alt = "Freedom Blog" />
    //       </div>
    //         <div class='text-on-image'>
    //            <h3> Welcome to my Blog </h3>
    //            <p> FREEEEDOM </p>
    //         </div>
    //     </div>
    //   </header>




      
    );
}

export default HomePage;