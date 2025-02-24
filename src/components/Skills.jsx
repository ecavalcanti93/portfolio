// import "./Skills.css"
import CSS from "../images/css.png";
import HTML from "../images/html.png";
import PS from "../images/photoshop.png";
import AI from "../images/illustrator.png";
import ID from "../images/indesign.png";
import JS from "../images/javascript.png";
import RCT from "../images/react.png";
import VITE from "../images/vite.png";
import MDB from "../images/MDB.png";
import TW from "../images/Tailwind.png";
import BTS from "../images/Bootstrap.png";
import FG from "../images/Figma.png";

const Skills = () => {
  return (
    <section
      className="flex flex-col mx-auto max-w-screen-lg p-5 m-10 items-center gap-2 sm:pl-10 sm:pr-10"
      id="skills"
    >
      <span className="text-4xl  font-bold sm:text-5xl">About Me </span>
      <p className="text-center p-5">
        {" "}
        Hi, I'm Eric Cavalcanti, a Brazilian Junior Full Stack Developer currently based in Barcelona, Spain. With a background in Graphic Design and UX/UI, I’m passionate about merging technology and design to create seamless, user-friendly experiences. I specialize in developing intuitive digital solutions that balance creativity and functionality, always aiming to solve complex problems and deliver meaningful impact.
      </p>
      <div className="flex flex-wrap gap-5 justify-center">
        <div className="pt-6 pb-6 pl-8 pr-8 rounded-lg  bg-blackSpecial">
          <div className="flex flex-col w-35 h-13 items-center justify-center m-6">
            <img src={HTML} alt="html_logo" className="h-12 m-1" />
            <div className="text-xl font-bold">
              <h3>HTML</h3>
            </div>
          </div>
        </div>

        <div className="pt-6 pb-6 pl-8 pr-8 rounded-lg  bg-blackSpecial">
          <div className="flex flex-col w-35 h-13 items-center justify-center m-6">
            <img src={CSS} alt="css_logo" className="h-12" />
            <div className="text-xl font-bold">
              <h3>CSS</h3>
            </div>
          </div>
        </div>

        <div className="pt-6 pb-6 pl-8 pr-8 rounded-lg bg-blackSpecial">
          <div className="flex flex-col w-35 h-13 items-center justify-center m-6">
            <img src={JS} alt="javascript_logo" className="h-12" />
            <div className="text-xl font-bold">
              <h3>Javascript</h3>
            </div>
          </div>
        </div>

        <div className="pt-6 pb-6 pl-8 pr-8 rounded-lg  bg-blackSpecial">
          <div className="flex flex-col w-35 h-13 items-center justify-center m-6">
            <img src={RCT} alt="react_logo" className="h-12" />
            <div className="text-xl font-bold">
              <h3>React</h3>
            </div>
          </div>
        </div>

        <div className="pt-6 pb-6 pl-8 pr-8 rounded-lg  bg-blackSpecial">
          <div className="flex flex-col w-35 h-13 items-center justify-center m-6">
            <img src={TW} alt="tailwind_logo" className="h-12" />
            <div className="text-xl font-bold">
              <h3>Tailwind</h3>
            </div>
          </div>
        </div>

        <div className="pt-6 pb-6 pl-8 pr-8 rounded-lg bg-blackSpecial">
          <div className="flex flex-col w-35 h-13 items-center justify-center m-6">
            <img src={BTS} alt="bootstrap_logo" className="h-12" />
            <div className="text-xl font-bold">
              <h3>Bootstrap</h3>
            </div>
          </div>
        </div>

        <div className="pt-6 pb-6 pl-8 pr-8 rounded-lg  bg-blackSpecial">
          <div className="flex flex-col w-35 h-13 items-center justify-center m-6">
            <img src={FG} alt="figma_logo" className="h-12" />
            <div className="text-xl font-bold">
              <h3>Figma</h3>
            </div>
          </div>
        </div>

        <div className="pt-6 pb-6 pl-8 pr-8 rounded-lg  bg-blackSpecial">
          <div className="flex flex-col w-35 h-13 items-center justify-center m-6">
            <img src={VITE} alt="vite_logo" className="h-12" />
            <div className="text-xl font-bold">
              <h3>Vite</h3>
            </div>
          </div>
        </div>

        <div className="pt-6 pb-6 pl-8 pr-8 rounded-lg bg-blackSpecial">
          <div className="flex flex-col w-35 h-13 items-center justify-center m-6">
            <img src={MDB} alt="mongo_logo" className="h-12" />
            <div className="text-xl font-bold">
              <h3>MongoDB</h3>
            </div>
          </div>
        </div>

        <div className="pt-6 pb-6 pl-8 pr-8 rounded-lg  bg-blackSpecial">
          <div className="flex flex-col w-35 h-13 items-center justify-center m-6">
            <img src={PS} alt="ps_logo" className="h-12" />
            <div className="text-xl font-bold">
              <h3>Photoshop</h3>
            </div>
          </div>
        </div>

        <div className="pt-6 pb-6 pl-8 pr-8 rounded-lg  bg-blackSpecial">
          <div className="flex flex-col w-35 h-13 items-center justify-center m-6">
            <img src={AI} alt="ai_logo" className="h-12" />
            <div className="text-xl font-bold">
              <h3>Illustrator</h3>
            </div>
          </div>
        </div>

        <div className="pt-6 pb-6 pl-8 pr-8 rounded-lg bg-blackSpecial">
          <div className="flex flex-col w-35 h-13 items-center justify-center m-6">
            <img src={ID} alt="id_logo" className="h-12" />
            <div className="text-xl font-bold">
              <h3>Indesign</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
