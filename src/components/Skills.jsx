import "./Skills.css"
import CSS from "../images/css.png";
import HTML from "../images/html.png";
import PS from "../images/photoshop.png";
import AI from "../images/illustrator.png";
import ID from "../images/indesign.png";
import JS from "../images/javascript.png";
import RCT from "../images/react.png";
import VITE from "../images/vite.png";
import MDB from "../images/MDB.png";

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle"> What I Do? </span>
            <p className="intro"> I'm a Junior Full Stack Developer passionate about the intersection of technology and design.<br /> With a background in Graphic Design and UX/UI Design, I aim to integrate creativity and functionality into all my projects.</p>
        <div className="skillbox">
        <div className="skillBar">
        <div className="skills">
            <img src={HTML} alt="html_logo" className="skillimg"/>
            <div className="skilltxt">
                <h3>HTML</h3>
            </div>
        </div>
        </div>

        <div className="skillBar">
        <div className="skills">
            <img src={CSS} alt="css_logo" className="skillimg"/>
            <div className="skilltxt">
                <h3>CSS</h3>
            </div>
        </div>
        </div>

        <div className="skillBar">
        <div className="skills">
            <img src={JS} alt="javascript_logo" className="skillimg"/>
            <div className="skilltxt">
                <h3>Javascript</h3>
            </div>
        </div>
        </div>

        <div className="skillBar">
        <div className="skills">
            <img src={RCT} alt="react_logo" className="skillimg"/>
            <div className="skilltxt">
                <h3>React</h3>
            </div>
        </div>
        </div>

        <div className="skillBar">
        <div className="skills">
            <img src={VITE} alt="vite_logo" className="skillimg"/>
            <div className="skilltxt">
                <h3>Vite</h3>
            </div>
        </div>
        </div>

        <div className="skillBar">
        <div className="skills">
            <img src={MDB} alt="mongo_logo" className="skillimg"/>
            <div className="skilltxt">
                <h3>MongoDB</h3>
            </div>
        </div>
        </div>

        <div className="skillBar">
        <div className="skills">
            <img src={PS} alt="ps_logo" className="skillimg"/>
            <div className="skilltxt">
                <h3>Photoshop</h3>
            </div>
        </div>
        </div>

        <div className="skillBar">
        <div className="skills">
            <img src={AI} alt="ai_logo" className="skillimg"/>
            <div className="skilltxt">
                <h3>Illustrator</h3>
            </div>
        </div>
        </div>

        <div className="skillBar">
        <div className="skills">
            <img src={ID} alt="id_logo" className="skillimg"/>
            <div className="skilltxt">
                <h3>Indesign</h3>
            </div>
        </div>
        </div>

        </div>
        </section>
    );
}   

export default Skills;