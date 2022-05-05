import React from "react";
import pic from "../pic.jpg";

export default function Info(){
    function sendEmail(){
        window.open('mailto:kumarismitha.dev@gmail.com');
    }
    
    function openLinkedin(){
        window.open('https://www.linkedin.com/in/kumari-smitha/');
    }
    return (
        <div>
        <img src={pic} className="image" alt="my pic"/>
        <h3 className="name">Kumari Smitha </h3>
        <h4 className="role">Frontend Developer </h4>
        <div>
        
        <button className="email" onClick={sendEmail}>Email</button>
        
        <button className="linkedin" onClick={openLinkedin}>LinkedIn</button>
        </div>
        </div>
    )
}