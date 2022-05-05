import React from "react";
import github from "../github-icon.png";
import fb from "../fb-icon.png";
import insta from "../insta-icon.png";
import twitter from "../twitter-icon.png";

export default function About(){
    function openTwitter(){
        window.open("https://twitter.com/Smita_Thakur_");
    }
    function openGithub(){
        window.open("https://github.com/Kumari-Smitha");
    }
    
    return (
        <footer className="footer">
        <img className="github" src={github}  onClick={openGithub} alt="github"/>
        <img className="fb" src={fb} alt="fb"/>
        <img className="insta" src={insta} alt="insta" />
        <img className="twitter" src={twitter}  onClick={openTwitter} alt="twitter"/>
        
        
        </footer>
    )
}