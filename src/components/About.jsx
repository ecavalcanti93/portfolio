import React from "react";
import { Link } from "react-scroll";
import "./About.css";
import perfil from "../images/perfil.png";
import hire from "../images/hire.png";
import CV from "../images/CV_Eric Cavalcanti.pdf";

const About = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.setAttribute("download", "CV_Eric_Cavalcanti.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      className="mx-auto max-w-screen-lg flex flex-col sm:flex-row sm:justify-between sm:items-center sm:mt-5"
      id="about_box"
    >
      <div className="flex flex-col p-5 gap-1 sm:pl-10 sm:pr-10">
        <p className="text-2xl font-thin">Hello World!</p>
        <p className="text-5xl leading-15 mb-3 font-bold sm:text-5xl">
          I'm <span className=" text-redSpecial">Eric</span>
          <br />
          Graphic Designer <span className="text-redSpecial">+</span>
          <br />
          Web Developer
        </p>
        <Link>
          <button
            onClick={handleDownloadCV}
            id="hire_btn"
            className="flex pt-2 pb-2 pl-4 pr-4 gap-2 justify-center items-center rounded-full bg-redSpecial cursor-pointer"
          >
            <img src={hire} alt="hireme" className="h-5" /> Download CV
          </button>
        </Link>
      </div>
      <img src={perfil} alt="Profile" className="w-100 pt-5" />
    </section>
  );
};

export default About;
