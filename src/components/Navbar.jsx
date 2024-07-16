import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../images/logo_ec.png"
import message from "../images/message.png"

const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo" onClick={scrollToTop} style={{ cursor: 'pointer' }}/>  
            <div className="desktop">
                <Link activeClass="active" smooth spy to="about_box" className="desktopList" offset={-100}>Home</Link>
                <Link activeClass="active" smooth spy to="skills" className="desktopList" offset={-50}>About</Link>
                <Link activeClass="active" smooth spy to="works" className="desktopList" offset={-50}>Portfolio</Link>
            </div>
            <Link activeClass="active" smooth spy to="contact"><button className="desktopMenuButton">
                <img src={message} alt="message" className="desktopMenuImage" />
                <span>Contact Me</span>
            </button></Link>
        </nav>
    );
};

export default Navbar;
