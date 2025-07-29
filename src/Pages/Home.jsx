import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import profileImg from '../assets/propic-bg-removed.png'
import ContactMe from '../assets/contact-me.jpg'
import ResumeIconVector from '../assets/resume-icon-vector.png'
import { Link } from "react-router-dom";

function Home() {
  const [fadeIn, setFadeIn] = useState(false);
  const [text, setText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const fullText =
    "Fullstack Developer building dynamic and scalable web applications with JavaScript, React, Node.js, and MongoDB bridging the gap between frontend aesthetics and backend efficiency.";

  const handleViewResume = () => {
    window.open("Amal Sunny (Mern).pdf", "_blank");
  };

  useEffect(() => {
    setFadeIn(true);

    // Typewriter effect
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, []);

  const renderColoredText = (text) => {
    const words = text.split(/(\s+)/);

    return words.map((word, index) => {
      if (word.includes("JavaScript")) {
        return (
          <span key={index} style={{ color: "#f0da4d" }}>
            {word}
          </span>
        );
      } else if (word.includes("React")) {
        return (
          <span key={index} style={{ color: "#61dff8" }}>
            {word}
          </span>
        );
      } else if (word.includes("Node.js")) {
        return (
          <span key={index} style={{ color: "#7dba04" }}>
            {word}
          </span>
        );
      } else if (word.includes("MongoDB")) {
        return (
          <span key={index} style={{ color: "#469e47" }}>
            {word}
          </span>
        );
      }
      return word;
    });
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        padding: "20px 0",
        marginTop: "0px",
        background: "linear-gradient(to bottom,rgb(0, 0, 0), #000222)",
        opacity: fadeIn ? 1 : 0,
        transition: "opacity 1.5s ease-in-out",
      }}
    >
      <div
        className="card m-4 w-75 mx-auto my-5"
        style={{
          backgroundColor: "transparent",
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
        }}
      >
        <div className="mt-4">
          <div
            className="d-flex justify-content-center"
            style={{
              opacity: fadeIn ? 1 : 0,
              transition: "opacity 0.8s ease-in-out 0.2s",
            }}
          >
            
            <img
              src={profileImg}
              alt=""
              width={"260px"}
              style={{
                borderRadius: "50%",
                border: "5px solid #5c715e",
                userSelect: "none",
                margin:"25px"
              }}
            />
          </div>

          <div
            className="w-75 mx-auto"
            style={{
              opacity: fadeIn ? 1 : 0,
              transition: "opacity 0.8s ease-in-out 0.4s",
            }}
          >
            <p
              style={{
                fontSize: "38px",
                textAlign: "center",
                fontWeight: "bold",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "#dbd8e3",
              }}
            
            >
              Hi, I'm Amal Sunny
            </p>
            <p
              style={{
                fontSize: "18px",
                color: "white",
                textAlign: "center",
                minHeight: "40px",
              }}
            >
              {renderColoredText(text)}
              {!isTypingComplete && <span className="blinking-cursor">|</span>}
            </p>
          </div>

          <div
            className="d-flex justify-content-center my-2 mb-3"
            style={{
              opacity: fadeIn ? 1 : 0,
              transition: "opacity 0.8s ease-in-out 0.6s",
            }}
          >
            <button
              className="btn mx-2 px-4 py-2 fw-bold"
              onClick={handleViewResume}
              style={{ backgroundColor: "#78abca" }}
            >
              <img
                src={ResumeIconVector}
                alt=""
                width={"20px"}
                className="me-2"
              />
              View Resume
            </button>

            <Link
              to="/contact"
              
              className="btn mx-2 px-4 py-2 fw-bold"
              style={{ backgroundColor: "#97cba9" }}
            >
              <img
                src={ContactMe}
                alt=""
                width={"30px"}
                className="me-2"
              />
              Contact me
            </Link>
          </div>

          <div className="social-icons d-flex justify-content-center">
            <a
              href="https://github.com/amalsunny-cloud"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="icon text-white fs-2 mt-1" />
            </a>
            <a
              href="https://www.linkedin.com/in/amal-sunny-developer/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="icon text-white fs-2 mt-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
