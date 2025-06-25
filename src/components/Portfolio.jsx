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
          <a href="https://gamersbin.vercel.app/" target="_blank" className="project-link">
            <img src={GamersBin} alt="GamersBin" className="rounded-xl" />
            <div className="project-hover-text">
                <h3 className="underline font-bold">GamersBin</h3>
                <span className="mt-4 text-sm">
                  This is the final project of the IronHack bootcamp — a fully responsive FullStack CRUD application built with React, where users can create and manage their own personalized gaming library.
              </span>
            </div>
          </a>

          <a href="https://findahero.vercel.app" target="_blank" className="project-link">
            <img src={FindaHero} alt="Find a Hero!" className="rounded-xl" />
            <div className="project-hover-text">
                <h3 className="underline font-bold">Find a Hero!</h3>
                <span className="mt-4 text-sm">
                  This is the second project of the IronHack bootcamp — a responsive CRUD app using Handlebars and Tailwind, where people in danger can request help from registered heroes.
              </span>
            </div>
          </a>

          <a href="https://project-game-lovat.vercel.app" target="_blank" className="project-link">
            <img src={BlackJack} alt="Black Jack" className="rounded-xl" />
            <div className="project-hover-text">
                <h3 className="underline font-bold">Black Jack</h3>
                <span className="mt-4 text-sm">
                This is the first project of the IronHack bootcamp — built with HTML, CSS, and JS, and inspired by the classic card game Blackjack. The goal is to score more points than the dealer without exceeding 21.
                </span>
            </div>
          </a>

          {showMore && (
            <>
          <a href="https://raincheck-smoky.vercel.app" target="_blank" className="project-link">
            <img src={RainCheck} alt="Rain Check" className="rounded-xl" />
                        <div className="project-hover-text">
                <h3 className="underline font-bold">Rain Check</h3>
                <span className="mt-4 text-sm">
                With Rain Check, you can discover the weather of any city in the world in seconds — all thanks to the integration with a powerful weather API. The app is built with HTML, JS, and CSS.
                </span>
            </div>
          </a>

          <a href="https://secretnumber-pink.vercel.app" target="_blank" className="project-link">
            <img src={GameNumber} alt="Game Number" className="rounded-xl" />
            <div className="project-hover-text">
                <h3 className="underline font-bold">Game Number Game</h3>
                <span className="mt-4 text-sm">
                The Wizard has chosen a secret number! Try to guess what it is. Make your guess and follow the clues to uncover the mysterious number. An app created with HTML, CSS and JS.
                </span>
            </div>
          </a>

              <a
                href="https://secret-santa-nine-phi.vercel.app"
                target="_blank" className="project-link"
              >
                <img src={SecretSanta} alt="Secret Santa" className="rounded-xl" />
                <div className="project-hover-text">
                <h3 className="underline font-bold">Secret Santa</h3>
                <span className="mt-4 text-sm">
                The Secret Santa app allows users to organize gift exchange draws quickly and easily. Built with HTML, CSS, and JavaScript, it runs entirely in the browser with no backend required.
                </span>
            </div>
              </a>
              <a href="https://calculator-mauve-rho.vercel.app" target="_blank" className="project-link">
                <img src={Calculator} alt="Basic Calculator" className="rounded-xl" />
                <div className="project-hover-text">
                <h3 className="underline font-bold">Basic Calculator</h3>
                <span className="mt-4 text-sm">
                The Basic Calculator app allows users to perform simple math operations directly in the browser. Built with HTML, CSS, and JavaScript, it's lightweight, functional, and responsive.
                </span>
            </div>
              </a>
              <a href="https://fokus-pomodoro-delta.vercel.app" target="_blank" className="project-link">
                <img src={Fokus} alt="Fokus Pomodoro" className="rounded-xl" />
                <div className="project-hover-text">
                <h3 className="underline font-bold">Fokus - Pomodoro APP</h3>
                <span className="mt-4 text-sm">
                It is a productivity app based on the Pomodoro technique, designed to help users optimize their study and work time. It breaks tasks into focus and break cycles, promoting concentration and balance.
                </span>
            </div>
              </a>
              <a href="https://currency-converter-chi-sepia.vercel.app" target="_blank" className="project-link">
                <img src={CurrencyConverter} alt="Currency Converter" className="rounded-xl" />
                <div className="project-hover-text">
                <h3 className="underline font-bold">Currency Converter</h3>
                <span className="mt-4 text-sm">
                A simple and fast currency converter built with HTML, CSS, and JavaScript. Convert values between currencies in real time with an easy-to-use interface.
                </span>
            </div>
              </a>
              <a href="https://qrcode-creator-eight.vercel.app" target="_blank" className="project-link">
                <img src={QRCode} alt="QRCode Creator" className="rounded-xl" />
                <div className="project-hover-text">
                <h3 className="underline font-bold">QR Code Creator</h3>
                <span className="mt-4 text-sm">
                This app allows you to quickly and easily generate QR Codes. Enter any text, link, or info , and the app will automatically create the corresponding QR Code, with easy PNG download for sharing and use.
                </span>
            </div>
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
