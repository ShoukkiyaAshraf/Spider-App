import React from "react";
import backgroundVideo from './background.mp4';
import logoImage from '../../logo.png';
import { useNavigate } from "react-router-dom";


function Home(){

    const history = useNavigate();
    const onClick = () => {
        history('/start');
    }

    return(
    <div className="home-body">
        <video className="background-video" autoPlay loop muted>
            <source src={backgroundVideo} type="video/mp4"></source>
        </video>
        <div className="banner">
            <div>
            <div className="text">
                <h1>Spider</h1>
            </div>
            <div className="logo">
                <img src={logoImage} alt="Logo" />
            </div>
            </div>
            
            <div className="banner-button">
                <button onClick={onClick}>Play</button>
            </div>
       </div>
    </div>
    );
}

export default Home;