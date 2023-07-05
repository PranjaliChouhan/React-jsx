import React from "react";
import logo from "./assets/logo.png";
import contact from "./assets/contact.png";


  
const Header=() => (
    <div className="nav-bar">
    <h1 className="topic">header</h1>
    <img src={logo}  alt="logo" className="image-class"/>
    <img src={contact}  alt="contact" className="contact-class"/>
    

    </div>

);



export default Header;