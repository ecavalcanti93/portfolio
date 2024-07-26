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
                <span className="abouteText">I'm <span className="name2">Eric</span> <br /> Graphic Designer <span className="plus">+</span> <br/> Web Developer</span>
                <Link><button onClick={handleDownloadCV} className="hire_btn"><img src={hire} alt="hireme" className="hirebtn"/> Download CV</button></Link>
            <img src={perfil} alt="Profile" className="perfil"/>
            </div>
 

        </section>
    );
}

export default About;