import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../images/logo_ec.png"
import message from "../images/message.png"
import menu from "../images/menu.png"

const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo" onClick={scrollToTop} style={{ cursor: 'pointer' }}/>  
            <div className="desktop">
                <Link activeClass="active" smooth spy to="about_box" className="desktopList" offset={-100}>Home</Link>
                <Link activeClass="active" smooth spy to="skills" className="desktopList" offset={-50}>About</Link>
                <Link activeClass="active" smooth spy to="works" className="desktopList" offset={-50}>Portfolio</Link>
            </div>
            <Link activeClass="active" smooth spy to="contact" ><button className="desktopMenuButton">
                <img src={message} alt="message" className="desktopMenuImage" />
                Contact Me
            </button></Link>

            <img src={menu} alt="Menu" className="logoMobile" onClick={() => setMobileMenu(!mobileMenu)}/>  
            <div className="mobileMenu" style={{display: mobileMenu ? "flex" : "none"}}>
                <Link activeClass="active" smooth spy to="about_box" className="mobileList" offset={-100} onClick={() => setMobileMenu(false)}>Home</Link>
                <Link activeClass="active" smooth spy to="skills" className="mobileList" offset={-50} onClick={() => setMobileMenu(false)}>About</Link>
                <Link activeClass="active" smooth spy to="works" className="mobileList" offset={-50} onClick={() => setMobileMenu(false)}>Portfolio</Link>
                <Link activeClass="active" smooth spy to="contact" className="mobileList" offset={-50} onClick={() => setMobileMenu(false)}>Contact Me</Link>
            </div>

        </nav>
    );
};

export default Navbar;
