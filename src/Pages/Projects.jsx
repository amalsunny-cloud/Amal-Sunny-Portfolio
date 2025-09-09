import Footer from "../Components/Footer";
import GymMgmt from "../assets/GYM-MGMT.png"
import WinMediaPlayerIcon from "../assets/Windows-11-Media-Player-Icon.png"
import ProjectFairIcon from "../assets/projecct-fair-icon.png"
import wordleNewIcon from "../assets/wordleNewIcon.png"
import Gemini_language_model_logo from "../assets/Gemini_language_model_logo.png"
import DiscountCcalculatorIcon from "../assets/discount-calculator-icon.jpg"
import Ekart from "../assets/E-kart.png"
import SICalculator from "../assets/simple-interest-calculator.png"
import BMI from "../assets/BMI.png"
import Bank from "../assets/Bank.png"
import BudgetCalculator from "../assets/Budget calculator.png"
import TimHortons from "../assets/tim-hortons-logo.png"
import FitTracker from "../assets/FitTracker.png"
import LandRoverLogo from "../assets/land-rover-logo.png"
import AgainstTheCompass from "../assets/against-the -compass.png"
import LuminarFavLogo from "../assets/LuminarFavLogo.jpg"
import LiveLink from "../assets/live-link.png"
import GitHubSymbol from "../assets/GitHub-Symbol.png"
const Projects = () => {
  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          minHeight: "100vh",
          padding: "20px 0",
          paddingBottom: "0px",
          marginTop: "0px",
          background: "linear-gradient(to bottom,rgb(0, 0, 0), #000222)",
        }}
      >
        <div
          className="card shadow-lg p-4 mb-2"
          style={{
            width: "90%",
            maxWidth: "1200px",
            borderRadius: "15px",
            background: "transparent",
            marginTop: "20px",
          }}
        >
          <div className="text-center py-4">
            <p
              className="main-headings"
              style={{
                fontSize: "28px",
                background: "linear-gradient(90deg, #00C9FF, #92FE9D)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "bold",
                userSelect: "none",
                position: "relative",
                display: "inline-block",
                paddingBottom: "1px",
              }}
            >
              Builds & Designs
            </p>

            <div className="row justify-content-center">
              <div
                className="col-md-3 m-3 p-4 pt-0 rounded-4 text-center shadow-sm card-hover"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "rgba(4, 74, 66, 0.25)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.36)",
                  color: "#fff",
                  minHeight: "100px",
                }}
              >
                {/* project 1 */}
                <div className="blur-hover">
                  <div className="blur-hover-2">
                    <img
                      src={GymMgmt}
                      alt=""
                      width={"140px"}
                      className="mt-4"
                    />
                  </div>
                  <p
                    style={{
                      fontSize: "20px",
                      color: "#00b7c2",
                      marginTop: "10px",
                    }}
                  >
                    FitNavigator
                  </p>
                  <p style={{ height: "146px", marginBottom: "0px" }}>
                    FitNavigator is a Gym Management System that helps to track
                    activites related to gym.There are admin,trainer and user
                    panel for tracking and monitoring datas.
                  </p>
                  <br />
                  <p
                    style={{ marginBottom: "0px" }}
                    className="d-flex flex-column justify-content-center align-items-center"
                  >
                    <span style={{ marginBottom: "7px", fontWeight: "bold" }}>
                      💻 Built with:{" "}
                    </span>
                    <span
                      style={{
                        fontSize: "14px",
                        color: "#00b7c2",
                        padding: "5px",
                      }}
                    >
                      <span
                        style={{
                          color: "white",
                          border: "1px solid rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        HTML
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        CSS
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        Bootstrap
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        MERN
                      </span>
                    </span>
                  </p>
                </div>

                <div className="button-container">
                  <a
                    className="live-link-btn text-decoration-none"
                    href="https://fit-navigator-frontend.vercel.app/"
                    target="_blank"
                  >
                    <img src={LiveLink} alt="" />
                    Live Link
                  </a>
                  <div className="">
                    <a
                      className="view-code-btn d-flex text-decoration-none"
                      href="https://github.com/amalsunny-cloud/fitNavigator-Frontend"
                      target="_blank"
                    >
                      <img src={GitHubSymbol} alt="" /> Frontend
                    </a>

                    <a
                      className="view-code-btn d-flex text-decoration-none"
                      href="https://github.com/amalsunny-cloud/fit-navigator"
                      target="_blank"
                    >
                      <img src={GitHubSymbol} alt="" />
                      Backend{" "}
                    </a>
                  </div>
                </div>
              </div>

              {/* second card */}
              <div
                className="col-md-3 m-3 p-4 pt-0 text-center rounded-4 shadow-sm card-hover d-flex align-items-center justify-content-center"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "rgba(4, 74, 66, 0.25)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.36)",
                  color: "#fff",
                  minHeight: "100px",
                }}
              >
                {/* project 2 */}
                <div style={{ marginTop: "0px" }} className="blur-hover">
                  <div className="blur-hover-2">
                    <img
                      src={WinMediaPlayerIcon}
                      className="mt-4"
                      alt=""
                      width={"120px"}
                      style={{ paddingTop: "5px" }}
                    />
                  </div>
                  <p
                    style={{
                      fontSize: "18px",
                      color: "#00b7c2",
                      marginTop: "10px",
                    }}
                  >
                    Media Player
                  </p>
                  <p style={{ height: "146px", marginBottom: "0px" }}>
                    Media player designed for video playback,track
                    management,and history tracking. It allows users to play
                    media files, add and categorize tracks, and monitor playback
                    history.
                  </p>
                  <br />
                  <p
                    style={{ marginBottom: "0px" }}
                    className="d-flex flex-column justify-content-center align-items-center"
                  >
                    <span style={{ marginBottom: "7px", fontWeight: "bold" }}>
                      💻 Built with:{" "}
                    </span>
                    <span
                      style={{
                        fontSize: "14px",
                        color: "#00b7c2",
                        padding: "5px",
                      }}
                    >
                      <span
                        style={{
                          color: "white",
                          border: "1px solid rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        HTML
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        CSS
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        Bootstrap
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        MERN
                      </span>
                    </span>
                  </p>
                </div>
                <div className="button-container">
                  <a
                    className="live-link-btn text-decoration-none"
                    href="https://media-frontend-six.vercel.app/"
                    target="_blank"
                  >
                    <img src={LiveLink} alt="" />
                    Live Link
                  </a>
                  <div className="">
                    <a
                      className="view-code-btn d-flex text-decoration-none"
                      href="https://github.com/amalsunny-cloud/media-frontend"
                      target="_blank"
                    >
                      <img src={GitHubSymbol} alt="" /> Frontend
                    </a>

                    <a
                      className="view-code-btn d-flex text-decoration-none"
                      href="https://github.com/amalsunny-cloud/media-server"
                      target="_blank"
                    >
                      <img src={GitHubSymbol} alt="" />
                      Backend{" "}
                    </a>
                  </div>
                </div>
              </div>

              {/* third card */}

              <div
                className="col-md-3 m-3 p-4 pt-0 rounded-4 text-center shadow-sm card-hover d-flex align-items-center justify-content-center"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "rgba(4, 74, 66, 0.25)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.36)",
                  color: "#fff",
                  minHeight: "100px",
                }}
              >
                {/* project 3 */}
                <div style={{ marginTop: "0px" }} className="blur-hover">
                  <div className="blur-hover-2">
                    <img
                      src={ProjectFairIcon}
                      className="mt-4 mb-1"
                      alt=""
                      width={"120px"}
                      style={{ marginBottom: "10px" }}
                    />
                  </div>
                  <p
                    style={{
                      fontSize: "18px",
                      color: "#00b7c2",
                      marginTop: "10px",
                    }}
                  >
                    Project Fair
                  </p>
                  <p style={{ height: "146px", marginBottom: "0px" }}>
                    Project Fair designed for project management through secure
                    authorization. Users can add, view,and manage projects and
                    ensuring streamlined experience.
                  </p>
                  <br />
                  <p
                    style={{ marginBottom: "0px" }}
                    className="d-flex flex-column justify-content-center align-items-center"
                  >
                    <span style={{ marginBottom: "7px", fontWeight: "bold" }}>
                      💻 Built with:{" "}
                    </span>
                    <span
                      style={{
                        fontSize: "14px",
                        color: "#00b7c2",
                        padding: "5px",
                      }}
                    >
                      <span
                        style={{
                          color: "white",
                          border: "1px solid rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        HTML
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        CSS
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        Bootstrap
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        MERN
                      </span>
                    </span>
                  </p>
                </div>
                <div className="button-container">
                  <a
                    className="live-link-btn text-decoration-none"
                    href="https://projectfair-app.netlify.app/"
                    target="_blank"
                  >
                    <img src={LiveLink} alt="" />
                    Live Link
                  </a>
                  <div className="">
                    <a
                      className="view-code-btn d-flex text-decoration-none"
                      href="https://github.com/amalsunny-cloud/Project-Fair-Frontend"
                      target="_blank"
                    >
                      <img src={GitHubSymbol} alt="" /> Frontend
                    </a>

                    <a
                      className="view-code-btn d-flex text-decoration-none"
                      href="https://github.com/amalsunny-cloud/pf-server"
                      target="_blank"
                    >
                      <img src={GitHubSymbol} alt="" />
                      Backend{" "}
                    </a>
                  </div>
                </div>
              </div>

              {/* fourth card */}
              <div
                className="col-md-3 m-3 p-4 pt-0 rounded-4 text-center shadow-sm card-hover d-flex align-items-center justify-content-center"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "rgba(4, 74, 66, 0.25)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.36)",
                  color: "#fff",
                  minHeight: "100px",
                }}
              >
                {/* fourth project */}
                <div style={{ marginTop: "20px" }} className="blur-hover">
                  <div className="blur-hover-2 d-flex flex-column justify-content-center align-items-center">
                    <img
                      src={wordleNewIcon}
                      className=""
                      alt=""
                      width={"130px"}
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                  <p
                    style={{
                      fontSize: "18px",
                      color: "#00b7c2",
                    }}
                  >
                    Wordle Game
                  </p>
                  <p style={{ height: "146px", marginBottom: "0px" }}>
                    Wordle is a word puzzle game where players get six chances
                    to guess a hidden five-letter word. It blends strategy,
                    logic, and vocabulary skills.
                  </p>
                  <br />
                  <p
                    style={{ marginBottom: "0px" }}
                    className="d-flex flex-column justify-content-center align-items-center"
                  >
                    <span style={{ marginBottom: "7px", fontWeight: "bold" }}>
                      💻 Built with:{" "}
                    </span>
                    <span
                      style={{
                        fontSize: "14px",
                        color: "#00b7c2",
                        padding: "5px",
                      }}
                    >
                      <span
                        style={{
                          color: "white",
                          border: "1px solid rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        HTML
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        CSS
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        Bootstrap
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        React
                      </span>
                    </span>
                  </p>
                </div>
                <div className="button-container-3">
                  <a
                    className="live-link-btn text-decoration-none"
                    href="https://wordle-game-zeta-nine.vercel.app/"
                    target="_blank"
                  >
                    Live Link
                  </a>
                  <a
                    className="view-code-btn text-decoration-none"
                    href="https://github.com/amalsunny-cloud/wordle-game"
                    target="_blank"
                  >
                    View Code
                  </a>
                </div>
              </div>

              {/* fifth card */}

              <div
                className="col-md-3 m-3 p-4 pt-0 rounded-4 text-center shadow-sm card-hover d-flex align-items-center justify-content-center"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "rgba(4, 74, 66, 0.25)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.36)",
                  color: "#fff",
                  minHeight: "100px",
                }}
              >
                {/* project 5 */}
                <div style={{ marginTop: "-5px" }} className="blur-hover">
                  <div className="blur-hover-2 d-flex justify-content-center align-items-center mb-4">
                    <img
                      src={Gemini_language_model_logo}
                      className="mt-4"
                      alt=""
                      width={"180px"}
                      style={{ marginBottom: "10px", height: "auto" }}
                    />
                  </div>
                  <p
                    style={{
                      fontSize: "18px",
                      color: "#00b7c2",
                    }}
                  >
                    Gemini Clone
                  </p>
                  <p style={{ height: "146px", paddingTop: "15px" }}>
                    Gemini Clone is a react application inspired from Google
                    Gemini where users can interact with AI to improve
                    productivity.
                  </p>
                  <p
                    style={{ marginBottom: "0px" }}
                    className="d-flex flex-column justify-content-center align-items-center"
                  >
                    <span style={{ marginBottom: "7px", fontWeight: "bold" }}>
                      💻 Built with:{" "}
                    </span>
                    <span
                      style={{
                        fontSize: "14px",
                        color: "#00b7c2",
                        padding: "5px",
                      }}
                    >
                      <span
                        style={{
                          color: "white",
                          border: "1px solid rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        HTML
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        CSS
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        Bootstrap
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        React
                      </span>
                    </span>
                  </p>
                </div>
                <div className="button-container-3">
                  <a
                    className="live-link-btn text-decoration-none"
                    href="https://gemini-clone-three-kohl.vercel.app/"
                    target="_blank"
                  >
                    Live Link
                  </a>
                  <a
                    className="view-code-btn text-decoration-none"
                    href="https://github.com/amalsunny-cloud/gemini-clone"
                    target="_blank"
                  >
                    View Code
                  </a>
                </div>
              </div>

              {/* sixth project */}
              <div
                className="col-md-3 m-3 p-4 pt-0 rounded-4 text-center shadow-sm card-hover d-flex align-items-center justify-content-center"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "rgba(4, 74, 66, 0.25)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.36)",
                  color: "#fff",
                  minHeight: "100px",
                }}
              >
                {/* project 6 */}
                <div style={{ marginTop: "-3px" }} className="blur-hover">
                  <div className="blur-hover-2 d-flex flex-column justify-content-center align-items-center">
                    <img
                      src={DiscountCcalculatorIcon}
                      className=""
                      alt=""
                      width={"125px"}
                      style={{ marginTop: "40px" }}
                    />
                  </div>
                  <p
                    style={{
                      fontSize: "18px",
                      color: "#00b7c2",
                      marginTop: "20px",
                    }}
                  >
                    My Discount Calculator
                  </p>
                  <p style={{ height: "146px", marginBottom: "10px" }}>
                    My Discount Calculator designed to calculate discounted
                    prices effortlessly. This project allows users to input a
                    price and discount percentage to instantly view the final
                    price.
                  </p>
                  <p
                    style={{ marginBottom: "0px" }}
                    className="d-flex flex-column justify-content-center align-items-center"
                  >
                    <span style={{ marginBottom: "7px", fontWeight: "bold" }}>
                      💻 Built with:{" "}
                    </span>
                    <span
                      style={{
                        fontSize: "14px",
                        color: "#00b7c2",
                        padding: "5px",
                      }}
                    >
                      <span
                        style={{
                          color: "white",
                          border: "1px solid rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        HTML
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        CSS
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        Bootstrap
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        React
                      </span>
                    </span>
                  </p>
                </div>
                <div className="button-container-3">
                  <a
                    className="live-link-btn text-decoration-none"
                    href="https://my-discount-calculator.netlify.app/"
                    target="_blank"
                  >
                    Live Link
                  </a>
                  <a
                    className="view-code-btn text-decoration-none"
                    href="https://github.com/amalsunny-cloud/discount-calculator"
                    target="_blank"
                  >
                    View Code
                  </a>
                </div>
              </div>

              {/* 7th card */}
              <div
                className="col-md-3 m-3 p-4 pt-0 rounded-4 text-center shadow-sm card-hover d-flex align-items-center justify-content-center"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "rgba(4, 74, 66, 0.25)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.36)",
                  color: "#fff",
                  minHeight: "100px",
                }}
              >
                {/* project 7 */}
                <div style={{ marginBottom: "10px" }} className="blur-hover">
                  <div className="blur-hover-2 d-flex flex-column justify-content-center align-items-center">
                    <img
                      src={Ekart}
                      className=""
                      alt=""
                      width={"110px"}
                      style={{ marginTop: "10px" }}
                    />
                  </div>
                  <p
                    style={{
                      fontSize: "18px",
                      color: "#00b7c2",
                      marginTop: "10px",
                    }}
                  >
                    E-kart
                  </p>
                  <p style={{ height: "auto", marginBottom: "10px" }}>
                    E-kart is a simple website demonstrate the light weight copy
                    of E-commerce websites.Featuring a clean UI, responsive
                    design howcases expertise in frontend development.
                  </p>
                  <p
                    style={{ marginBottom: "0px" }}
                    className="d-flex flex-column justify-content-center align-items-center"
                  >
                    <span style={{ marginBottom: "7px", fontWeight: "bold" }}>
                      💻 Built with:{" "}
                    </span>
                    <span
                      style={{
                        fontSize: "14px",
                        color: "#00b7c2",
                        padding: "5px",
                      }}
                    >
                      <span
                        style={{
                          color: "white",
                          border: "1px solid rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        HTML
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        CSS
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        Bootstrap
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        React
                      </span>
                    </span>
                  </p>
                </div>
                <div className="button-container-2">
                  <a
                    className="live-link-btn text-decoration-none"
                    href="https://e-cart-beige.vercel.app/"
                    target="_blank"
                  >
                    Live Link
                  </a>
                  <a
                    className="view-code-btn text-decoration-none"
                    href="https://github.com/amalsunny-cloud/e-cart"
                    target="_blank"
                  >
                    View Code
                  </a>
                </div>
              </div>

              {/* 8th card */}
              <div
                className="col-md-3 m-3 p-4 rounded-4 text-center shadow-sm card-hover d-flex align-items-center justify-content-center"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "rgba(4, 74, 66, 0.25)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.36)",
                  color: "#fff",
                  minHeight: "100px",
                }}
              >
                {/* project 8 */}
                <div style={{ marginTop: "-20px" }}>
                  <div className="blur-hover-2 d-flex flex-column justify-content-center align-items-center">
                    <img
                      src={SICalculator}
                      alt=""
                      width={"140px"}
                    />
                  </div>
                  <p
                    style={{
                      fontSize: "18px",
                      color: "#00b7c2",
                      marginTop: "10px",
                    }}
                  >
                    Simple Interest Calculator
                  </p>
                  <p style={{ height: "146px", marginBottom: "0px" }}>
                    Simple Interest calculator is designed to compute interest
                    effortlessly. Users can input the amount, interest rate, and
                    time period to determine the total interest accrued.
                  </p>
                  <br />
                  <div
                    style={{
                      marginBottom: "0px",
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "5px",
                    }}
                    className="d-flex flex-column justify-content-center align-items-center"
                  >
                    <span style={{ marginBottom: "7px", fontWeight: "bold" }}>
                      💻 Built with:{" "}
                    </span>
                    <span
                      style={{
                        fontSize: "14px",
                        color: "#00b7c2",
                        padding: "5px",
                      }}
                    >
                      <span
                        style={{
                          color: "white",
                          border: "1px solid rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        HTML
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        CSS
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        Bootstrap
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        React
                      </span>
                    </span>
                  </div>
                </div>

                <div className="button-container-2">
                  <a
                    className="live-link-btn text-decoration-none"
                    href="https://simple-interest-calculator-netlify.netlify.app/"
                    target="_blank"
                  >
                    Live Link
                  </a>
                  <a
                    className="view-code-btn text-decoration-none"
                    href="https://github.com/amalsunny-cloud/si-calculator"
                    target="_blank"
                  >
                    View Code
                  </a>
                </div>
              </div>

              {/* 9th card */}
              <div
                className="col-md-3 m-3 p-4 pt-0 rounded-4 text-center shadow-sm card-hover d-flex align-items-center justify-content-center"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "rgba(4, 74, 66, 0.25)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.36)",
                  color: "#fff",
                  minHeight: "100px",
                }}
              >
                {/* project 9 */}
                <div style={{ marginTop: "10px" }} className="blur-hover">
                  <div className="blur-hover-2 d-flex flex-column justify-content-center align-items-center">
                    <img
                      src={BMI}
                      className="mb-1"
                      alt=""
                      width={"140px"}
                      style={{ marginBottom: "10px" }}
                    />
                  </div>
                  <p
                    style={{
                      fontSize: "18px",
                      color: "#00b7c2",
                      marginTop: "10px",
                    }}
                  >
                    BMI Calculator
                  </p>
                  <p style={{ height: "146px", marginBottom: "0px" }}>
                    A sleek and interactive tool used to calculate BMI
                    effortlessly. Users can input their height and weight to
                    instantly determine their BMI category.
                  </p>
                  <p
                    style={{ marginBottom: "0px" }}
                    className="d-flex flex-column justify-content-center align-items-center"
                  >
                    <span style={{ marginBottom: "7px", fontWeight: "bold" }}>
                      💻 Built with:{" "}
                    </span>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "5px",
                        fontSize: "14px",
                        color: "#00b7c2",
                        padding: "5px",
                      }}
                    >
                      <span
                        style={{
                          color: "white",
                          border: "1px solid rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        HTML
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        CSS
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        Bootstrap
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        Javascript
                      </span>
                    </div>
                  </p>
                </div>
                <div className="button-container-2">
                  <a
                    className="live-link-btn text-decoration-none"
                    href="https://mybmi-bmi-calculator.netlify.app/"
                    target="_blank"
                  >
                    Live Link
                  </a>
                  <a
                    className="view-code-btn text-decoration-none"
                    href="https://github.com/amalsunny-cloud/BMI-Calculator"
                    target="_blank"
                  >
                    View Code
                  </a>
                </div>
              </div>

              {/* 10th card */}
              <div
                className="col-md-3 m-3 p-4 pt-0 rounded-4 text-center shadow-sm card-hover d-flex align-items-center justify-content-center"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "rgba(4, 74, 66, 0.25)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.36)",
                  color: "#fff",
                  minHeight: "100px",
                }}
              >
                {/* project 10 */}
                <div style={{ marginTop: "10px" }} className="blur-hover">
                  <div className="blur-hover-2 d-flex flex-column justify-content-center align-items-center">
                    <img
                      src={Bank}
                      className=""
                      alt=""
                      width={"140px"}
                    />
                  </div>
                  <p
                    style={{
                      fontSize: "18px",
                      color: "#00b7c2",
                      marginTop: "10px",
                    }}
                  >
                    Simple Bank
                  </p>
                  <p style={{ height: "auto", marginBottom: "0px" }}>
                    A lightweight banking simulation designed for local
                    transactions without backend integration. Featuring a clean
                    UI, showcases expertise in JavaScript logic and frontend
                    styling.
                  </p>
                  <br />
                  <p
                    style={{ marginBottom: "0px", flexWrap: "wrap" }}
                    className="d-flex flex-column justify-content-center align-items-center"
                  >
                    <span style={{ marginBottom: "7px", fontWeight: "bold" }}>
                      💻 Built with:{" "}
                    </span>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "#00b7c2",
                        padding: "5px",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <span
                        style={{
                          color: "white",
                          border: "1px solid rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        HTML
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        CSS
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        Bootstrap
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        Javascript
                      </span>
                    </div>
                  </p>
                </div>
                <div className="button-container-4">
                  <a
                    className="live-link-btn text-decoration-none"
                    href="https://banking-system-amal.netlify.app/"
                    target="_blank"
                  >
                    Live Link
                  </a>
                  <a
                    className="view-code-btn text-decoration-none"
                    href="https://github.com/amalsunny-cloud/Banking-System"
                    target="_blank"
                  >
                    View Code
                  </a>
                </div>
              </div>

              {/* 11th card */}
              <div
                className="col-md-3 m-3 p-4 pt-0 rounded-4 text-center shadow-sm card-hover d-flex align-items-center justify-content-center"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "rgba(4, 74, 66, 0.25)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.36)",
                  color: "#fff",
                  minHeight: "100px",
                }}
              >
                {/* project 11 */}
                <div style={{ marginTop: "10px" }} className="blur-hover">
                  <div className="blur-hover-2 d-flex flex-column justify-content-center align-items-center">
                    <img
                      src={BudgetCalculator}
                      className=""
                      alt=""
                      width={"120px"}
                    />
                  </div>
                  <p
                    style={{
                      fontSize: "18px",
                      color: "#00b7c2",
                      marginTop: "10px",
                    }}
                  >
                    BudgetWise Calculator
                  </p>
                  <p style={{ height: "146px", marginBottom: "0px" }}>
                    BudgetWise Calculator website allows to track user
                    expenses,track histories and also provide the charts for the
                    correspondant categories.
                  </p>
                  <br />
                  <p
                    style={{ marginBottom: "0px" }}
                    className="d-flex flex-column justify-content-center align-items-center"
                  >
                    <span style={{ marginBottom: "7px", fontWeight: "bold" }}>
                      💻 Built with:{" "}
                    </span>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "#00b7c2",
                        padding: "5px",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <span
                        style={{
                          color: "white",
                          border: "1px solid rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        HTML
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        CSS
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        Bootstrap
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        Javascript
                      </span>
                    </div>
                  </p>
                </div>
                <div className="button-container-5">
                  <a
                    className="live-link-btn text-decoration-none"
                    href="https://budgetwise-budget-calculator.netlify.app/"
                    target="_blank"
                  >
                    Live Link
                  </a>
                  <a
                    className="view-code-btn text-decoration-none"
                    href="https://github.com/amalsunny-cloud/Budget-Calculator"
                    target="_blank"
                  >
                    View Code
                  </a>
                </div>
              </div>

              {/* 12th card */}
              <div
                className="col-md-3 m-3 p-4 pt-0 rounded-4 text-center shadow-sm card-hover d-flex align-items-center justify-content-center"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "rgba(4, 74, 66, 0.25)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.36)",
                  color: "#fff",
                  minHeight: "100px",
                }}
              >
                {/* project 12 */}
                <div style={{ marginTop: "10px" }}>
                  <div className="blur-hover-2 d-flex flex-column justify-content-center align-items-center">
                    <img
                      src={TimHortons}
                      className=""
                      alt=""
                      width={"140px"}
                      style={{ height: "170px", paddingBottom: "40px" }}
                    />
                  </div>
                  <p
                    style={{
                      fontSize: "18px",
                      color: "#00b7c2",
                      marginTop: "-15px",
                    }}
                  >
                    Tim Hortans
                  </p>
                  <p style={{ height: "146px", marginBottom: "0px" }}>
                    A visually crafted design concept that embodies the warm,
                    inviting, and community-focused essence of Tim Hortons,
                    using a clean and engaging layout.
                  </p>
                  <p
                    style={{ marginBottom: "0px" }}
                    className="d-flex flex-column justify-content-center align-items-center"
                  >
                    <span style={{ marginBottom: "7px", fontWeight: "bold" }}>
                      💻 Built with:{" "}
                    </span>
                    <span
                      style={{
                        fontSize: "14px",
                        color: "#00b7c2",
                        padding: "5px",
                      }}
                    >
                      <span
                        style={{
                          color: "white",
                          border: "1px solid rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        HTML
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        CSS
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        Bootstrap
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        Gsap
                      </span>
                    </span>
                  </p>
                </div>
                <div className="button-container-5">
                  <a
                    className="live-link-btn text-decoration-none"
                    href="https://coffeehouse-gsap.netlify.app/"
                    target="_blank"
                  >
                    Live Link
                  </a>
                  <a
                    className="view-code-btn text-decoration-none"
                    href="https://github.com/amalsunny-cloud/Tim-hortans-gsap"
                    target="_blank"
                  >
                    View Code
                  </a>
                </div>
              </div>

              {/* 13th card */}
              <div
                className="col-md-3 m-3 p-4 pt-0 rounded-4 text-center shadow-sm card-hover d-flex align-items-center justify-content-center"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "rgba(4, 74, 66, 0.25)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.36)",
                  color: "#fff",
                  minHeight: "100px",
                }}
              >
                {/* project 13 */}
                <div style={{ marginTop: "0px" }} className="blur-hover">
                  <div className="blur-hover-2 d-flex flex-column justify-content-center align-items-center">
                    <img
                      src={FitTracker}
                      className=""
                      alt=""
                      width={"120px"}
                      style={{ marginBottom: "0px" }}
                    />
                  </div>
                  <p
                    style={{
                      fontSize: "18px",
                      color: "#00b7c2",
                      marginTop: "10px",
                    }}
                  >
                    FitTracker
                  </p>
                  <p style={{ height: "auto", marginBottom: "10px" }}>
                    A modern fitness tracking platform showcases a visually
                    engaging layout, intuitive navigation, and well-structured
                    sections for workout plans and progress tracking.
                  </p>
                  <p
                    style={{ marginBottom: "0px" }}
                    className="d-flex flex-column justify-content-center align-items-center"
                  >
                    <span style={{ marginBottom: "7px", fontWeight: "bold" }}>
                      💻 Built with:{" "}
                    </span>
                    <span
                      style={{
                        fontSize: "14px",
                        color: "#00b7c2",
                        padding: "5px",
                      }}
                    >
                      <span
                        style={{
                          color: "white",
                          border: "1px solid rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        HTML
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        CSS
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        Bootstrap
                      </span>
                    </span>
                  </p>
                </div>
                <div className="button-container-2">
                  <a
                    className="live-link-btn text-decoration-none"
                    href="https://fit-tracker-workout.netlify.app/"
                    target="_blank"
                  >
                    Live Link
                  </a>
                  <a
                    className="view-code-btn text-decoration-none"
                    href="https://github.com/amalsunny-cloud/fitTracker"
                    target="_blank"
                  >
                    View Code
                  </a>
                </div>
              </div>

              {/* 14th card */}
              <div
                className="col-md-3 m-3 p-4 pt-0 rounded-4 text-center shadow-sm card-hover d-flex align-items-center justify-content-center"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "rgba(4, 74, 66, 0.25)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.36)",
                  color: "#fff",
                  minHeight: "100px",
                }}
              >
                {/* project 14 */}
                <div className="blur-hover">
                  <div className="blur-hover-2 d-flex flex-column justify-content-center align-items-center">
                    <img
                      src={LandRoverLogo}
                      className=""
                      alt=""
                      width={"160px"}
                      style={{ marginBottom: "50px", height: "110px" }}
                    />
                  </div>
                  <p
                    style={{
                      fontSize: "18px",
                      color: "#00b7c2",
                      marginTop: "-18px",
                    }}
                  >
                    Land Rover
                  </p>
                  <p style={{ height: "146px", marginBottom: "0px" }}>
                    A visually immersive design project featuring parallax
                    scrolling to enhance depth and engagement. This captures the
                    bold and adventurous spirit of Land Rover.
                  </p>
                  <p
                    style={{ marginBottom: "0px" }}
                    className="d-flex flex-column justify-content-center align-items-center"
                  >
                    <span
                      style={{
                        marginBottom: "7px",
                        fontWeight: "bold",
                        marginTop: "10px",
                      }}
                    >
                      💻 Built with:{" "}
                    </span>
                    <span
                      style={{
                        fontSize: "14px",
                        color: "#00b7c2",
                        padding: "5px",
                      }}
                    >
                      <span
                        style={{
                          color: "white",
                          border: "1px solid rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        HTML
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        CSS
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        Bootstrap
                      </span>
                    </span>
                  </p>
                </div>
                <div className="button-container-2">
                  <a
                    className="live-link-btn text-decoration-none"
                    href="https://parallax-land-rover.netlify.app/"
                    target="_blank"
                  >
                    Live Link
                  </a>
                  <a
                    className="view-code-btn text-decoration-none"
                    href="https://github.com/amalsunny-cloud/LandRover-parallax"
                    target="_blank"
                  >
                    View Code
                  </a>
                </div>
              </div>

              {/* 15th card */}
              <div
                className="col-md-3 m-3 p-4 rounded-4 text-center shadow-sm card-hover d-flex align-items-center justify-content-center"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "rgba(4, 74, 66, 0.25)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.36)",
                  color: "#fff",
                  minHeight: "100px",
                }}
              >
                {/* project 15 */}
                <div style={{ marginTop: "-30px" }}>
                  <div className="blur-hover-2 d-flex flex-column justify-content-center align-items-center">
                    <img
                      src={AgainstTheCompass}
                      alt=""
                      width={"180px"}
                    />
                  </div>

                  <p
                    style={{
                      fontSize: "18px",
                      color: "#00b7c2",
                      marginTop: "10px",
                    }}
                  >
                    Against the compass Travel Blog
                  </p>
                  <p style={{ height: "auto", marginBottom: "0px" }}>
                    Against the Compass website showcases refined frontend
                    development, custom CSS effects, and a carefully crafted
                    user experience that mirrors professional travel platforms.
                  </p>
                  <br />
                  <p
                    style={{ marginBottom: "0px" }}
                    className="d-flex flex-column justify-content-center align-items-center"
                  >
                    <span style={{ marginBottom: "7px", fontWeight: "bold" }}>
                      💻 Built with:{" "}
                    </span>
                    <span
                      style={{
                        fontSize: "14px",
                        color: "#00b7c2",
                        padding: "5px",
                      }}
                    >
                      <span
                        style={{
                          color: "white",
                          border: "1px solid rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        HTML
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        CSS
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        Bootstrap
                      </span>
                    </span>
                  </p>
                </div>
                <div className="button-container-2">
                  <a
                    className="live-link-btn text-decoration-none"
                    href="https://luminous-travelsite.netlify.app/"
                    target="_blank"
                  >
                    Live Link
                  </a>
                  <a
                    className="view-code-btn text-decoration-none"
                    href="https://github.com/amalsunny-cloud/travel-webclone"
                    target="_blank"
                  >
                    View Code
                  </a>
                </div>
              </div>

              {/* 16th card */}
              <div
                className="col-md-3 m-3 p-4 rounded-4 text-center shadow-sm card-hover d-flex align-items-center justify-content-center"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "rgba(4, 74, 66, 0.25)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.36)",
                  color: "#fff",
                  minHeight: "100px",
                }}
              >
                {/* project 16 */}
                <div style={{ marginTop: "-40px" }}>
                  <div className="blur-hover-2 d-flex flex-column justify-content-center align-items-center">
                    <img
                      src={LuminarFavLogo}
                      alt=""
                      width={"120px"}
                      style={{ borderRadius: "50%" }}
                      className="mt-5"
                    />
                  </div>
                  <p
                    style={{
                      fontSize: "18px",
                      color: "#00b7c2",
                      marginTop: "20px",
                    }}
                  >
                    Luminar Clone
                  </p>
                  <p style={{ height: "auto", marginBottom: "0px" }}>
                    Luminar Clone Website is a visually engaging educational
                    platform designed, inspired by Luminar. This project
                    replicates the sleek UI and structured layout of a learning
                    website and intuitive navigation.
                  </p>
                  <br />
                  <p
                    style={{ marginBottom: "0px" }}
                    className="d-flex flex-column justify-content-center align-items-center"
                  >
                    <span style={{ marginBottom: "7px", fontWeight: "bold" }}>
                      💻 Built with:{" "}
                    </span>
                    <span
                      style={{
                        fontSize: "14px",
                        color: "#00b7c2",
                        padding: "5px",
                      }}
                    >
                      <span
                        style={{
                          color: "white",
                          border: "1px solid rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        HTML
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        CSS
                      </span>
                      <span
                        style={{
                          color: "white",
                          border: "1px solid  rgb(144, 143, 141)",
                          padding: "3px 7px",
                          background:
                            "linear-gradient(to right,#020931,#1e549f)",
                          borderRadius: "10px",
                          marginRight: "5px",
                        }}
                      >
                        Bootstrap
                      </span>
                    </span>
                  </p>
                </div>

                <div className="button-container-6">
                  <a
                    className="live-link-btn text-decoration-none"
                    href="https://clone-luminar-site.netlify.app/"
                    target="_blank"
                  >
                    Live Link
                  </a>
                  <a
                    className="view-code-btn text-decoration-none"
                    href="https://github.com/amalsunny-cloud/Luminar-clone"
                    target="_blank"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
