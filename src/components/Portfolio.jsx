import React from "react";
import "./Portfolio.css";
import GitHub from "../images/GithubLogo.png"
import LinkedIn from "../images/LinkedinLogo.png"
import Instagram from "../images/InstagramLogo.png"
import Behance from "../images/BehanceLogo.png"
import Project1 from "../images/Project1.png";
import Project2 from "../images/Project2.png";
import Project3 from "../images/Project3.png";
// import Project4 from "../images/Project4.png";
// import Project5 from "../images/Project5.png";
// import Project6 from "../images/Project6.png";

const Portfolio = () => {
    return (
        <section id="works">
            <h2 className="worksTitle">My Portfolio</h2>
            <p className="intro"> I'm a Junior Full Stack Developer passionate about the intersection of technology and design.<br /> With a background in Graphic Design and UX/UI Design, I aim to integrate creativity and functionality into all my projects.</p>
            <div className="worksimages">
                <div className="box-images">
                <a href="https://gamersbin.vercel.app/" target="_blank"><img src={Project1} alt="projeto1" className="worksimages"/></a>
                <a href="https://raincheck-smoky.vercel.app" target="_blank"><img src={Project2} alt="projeto2" className="worksimages"/></a>
                <a href="https://secretnumber-pink.vercel.app" target="_blank"><img src={Project3} alt="projeto3" className="worksimages"/></a>
                {/* <img src="" alt="" className="worksimages"/>
                <img src="" alt="" className="worksimages"/>
                <img src="" alt="" className="worksimages"/> */}
                </div>
                <div className="links">
                <a href="https://github.com/ecavalcanti93" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="GitHub" className="logoLink"/></a>
                <a href="https://www.linkedin.com/in/ecavalcanti93/" target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt="LinkedIn" className="logoLink"/></a>
                <a href="https://www.instagram.com/designer.ec/" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="Instagram" className="logoLink"/></a>
                <a href="https://www.behance.net/ecavalcanti" target="_blank" rel="noopener noreferrer"><img src={Behance} alt="Behance" className="logoLink"/></a>
                </div>
            </div>


        </section>
    )
}

export default Portfolio;