import React, { useState } from "react";
import "./Portfolio.css";
import GitHub from "../images/GithubLogo.png";
import LinkedIn from "../images/LinkedinLogo.png";
import Instagram from "../images/InstagramLogo.png";
import Behance from "../images/BehanceLogo.png";
import GameNumber from "../images/GameNumber.png";
import SecretSanta from "../images/SecretSanta.png";
import QRCode from "../images/QRCode.png";
import GamersBin from "../images/GamersBin.png";
import FindaHero from "../images/FindaHero.png";
import RainCheck from "../images/RainCheck.png";
import Calculator from "../images/Calculator.png";
import Fokus from "../images/Fokus.png";
import CurrencyConverter from "../images/CurrencyConverter.png";
import BlackJack from "../images/BlackJack.png";

const Portfolio = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      className="flex flex-col mx-auto max-w-screen-lg p-5 m-10 items-center gap-2 sm:pl-10 sm:pr-10"
      id="works"
    >
      <h2 className="text-4xl  font-bold sm:text-5xl">My Projects</h2>
      <p className="text-center p-5">
      Curious about my work? Click to explore my academic projects and see what I’ve built! <br/><span className="text-xs text-redSpecial">ATTENTION: Some pages may show an error due to the Vercel server. Try reloading the page!</span>
      </p>
      <div className="worksimages">
        <div className="flex flex-wrap justify-center gap-5">
          <a href="https://gamersbin.vercel.app/" target="_blank">
            <img src={GamersBin} alt="GamersBin" className="rounded-xl" />
          </a>
          <a href="https://findahero.vercel.app" target="_blank">
            <img src={FindaHero} alt="Find a Hero!" className="rounded-xl" />
          </a>
          <a href="https://project-game-lovat.vercel.app" target="_blank">
            <img src={BlackJack} alt="Black Jack" className="rounded-xl" />
          </a>

          {showMore && (
            <>
          <a href="https://raincheck-smoky.vercel.app" target="_blank">
            <img src={RainCheck} alt="Rain Check" className="rounded-xl" />
          </a>
          <a href="https://secretnumber-pink.vercel.app" target="_blank">
            <img src={GameNumber} alt="Game Number" className="rounded-xl" />
          </a>
              <a
                href="https://secret-santa-nine-phi.vercel.app"
                target="_blank"
              >
                <img src={SecretSanta} alt="Secret Santa" className="rounded-xl" />
              </a>
              <a href="https://calculator-mauve-rho.vercel.app" target="_blank">
                <img src={Calculator} alt="Basic Calculator" className="rounded-xl" />
              </a>
              <a href="https://fokus-pomodoro-delta.vercel.app" target="_blank">
                <img src={Fokus} alt="Fokus Pomodoro" className="rounded-xl" />
              </a>
              <a href="https://currency-converter-chi-sepia.vercel.app" target="_blank">
                <img src={CurrencyConverter} alt="Currency Converter" className="rounded-xl" />
              </a>
              <a href="https://qrcode-creator-eight.vercel.app" target="_blank">
                <img src={QRCode} alt="QRCode Creator" className="rounded-xl" />
              </a>
            </>
          )}
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="pt-10">
            <button
              type="button"
              id="btnSee"
              className="pt-2 pb-2 pl-6 pr-6 justify-center items-center rounded-full bg-redSpecial cursor-pointer"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "See Less" : "See More"}
            </button>
          </div>
          <div className="flex pt-10 gap-5">
            <a
              href="https://github.com/ecavalcanti93"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GitHub} alt="GitHub" id="btnSee" className="h-12" />
            </a>
            <a
              href="https://www.linkedin.com/in/ecavalcanti93/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedIn} alt="LinkedIn" id="btnSee" className="h-12" />
            </a>
            <a
              href="https://www.instagram.com/designer.ec/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Instagram}
                alt="Instagram"
                id="btnSee"
                className="h-12"
              />
            </a>
            <a
              href="https://www.behance.net/ecavalcanti"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Behance} alt="Behance" id="btnSee" className="h-12" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
