import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import home from '../img/home.png';
import styles from '../css/Home.css';

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
           <Button><Link to="/topiclist">GET STARTED</Link></Button> 
        
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