import React from "react";
import { Link } from "react-scroll";
import "./About.css";
import perfil from "../images/perfil.png"
import hire from "../images/hire.png";
import CV from "../images/CV_Eric Cavalcanti.pdf";


const About = () => {

    const handleDownloadCV = () => {
        
        const link = document.createElement('a');
        link.href = CV;
        link.setAttribute('download', 'CV_Eric_Cavalcanti.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="about_box">
            <div className="aboutme">
                <span className="hello">Hello World!</span>
                <span>I'm <span className="name2">Eric</span> <br /> Graphic Designer <span className="plus">+</span> <br/> Web Developer</span>
                {/* <p className="intro"> I'm a Junior Full Stack Developer passionate about the intersection of technology and design.<br /> With a background in Graphic Design UX/UI Design, I aim to integrate creativity and functionality into all my projects.</p> */}
                <Link><button onClick={handleDownloadCV} className="hire_btn"><img src={hire} alt="hireme" className="hirebtn"/> Download CV</button></Link>
            </div>
 
            <img src={perfil} alt="Profile" className="perfil"/>

        </section>
    );
}

export default About;