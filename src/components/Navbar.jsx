import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../images/logo_ec.png";
import message from "../images/message.png";
import menu from "../images/menu.png";
import closeIcon from "../images/closeIcon.svg";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <nav
      className="flex mx-auto max-w-screen-lg justify-between items-center pt-4 pb-4 pr-5 pl-5 sticky top-0 bg-black sm:pr-10 sm:pl-10"
      id="navbar"
    >
      <img
        src={logo}
        alt="logo"
        className="h-12"
        onClick={scrollToTop}
        style={{ cursor: "pointer" }}
      />
      <div className="hidden sm:block">
        <Link
          activeClass="active"
          smooth
          spy
          to="about_box"
          className="mr-5 cursor-pointer hover:text-redSpecial"
          offset={-100}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          smooth
          spy
          to="skills"
          className="mr-5 cursor-pointer hover:text-redSpecial"
          offset={-100}
        >
          About
        </Link>
        <Link
          activeClass="active"
          smooth
          spy
          to="works"
          className="cursor-pointer hover:text-redSpecial"
          offset={-100}
        >
          Portfolio
        </Link>
      </div>
      <Link activeClass="active3" smooth spy to="contact" offset={-100}>
        <button
          id="desktopMenuButton"
          className="hidden p-3 gap-2 justify-center items-center rounded-full  cursor-pointer sm:flex sm:block bg-redSpecial"
        >
          <img src={message} alt="message" className="h-5" />
          {/* Contact Me */}
        </button>
      </Link>

      <img
        src={menu}
        alt="Menu"
        className="h-8 block sm:hidden"
        onClick={() => setMobileMenu(!mobileMenu)}
      />
      <div
        className={`fixed inset-0 flex flex-col justify-between items-center bg-redSpecial text-2xl font-bold text-black transition-transform duration-300 ${
          mobileMenu ? "translate-x-0" : "translate-x-full"
        } sm:hidden z-50 h-full py-10`}
      >
        <Link
          activeClass="active2"
          smooth
          spy
          to="about_box"
          className="cursor-pointer"
          offset={-100}
          onClick={() => setMobileMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active2"
          smooth
          spy
          to="skills"
          className="cursor-pointer"
          offset={-100}
          onClick={() => setMobileMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active2"
          smooth
          spy
          to="works"
          className="cursor-pointer"
          offset={-100}
          onClick={() => setMobileMenu(false)}
        >
          Portfolio
        </Link>
        <Link
          activeClass="active2"
          smooth
          spy
          to="contact"
          className="cursor-pointer"
          offset={-100}
          onClick={() => setMobileMenu(false)}
        >
          Contact Me
        </Link>
        <button onClick={() => setMobileMenu(false)} className="">
          <img
            src={closeIcon}
            alt="Fechar"
            className="h-10 w-10 cursor-pointer"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
