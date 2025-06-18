import React, { useState, useEffect } from "react";
import ProgrammingCard from "../Components/ProgrammingCard";
import FrontEndCard from "../Components/FrontEndCard";
import BackendCard from "../Components/BackendCard";
import DevTools from "../Components/DevTools";
import Design from "../Components/Design";
import Cloud from "../Components/Cloud";
import Payment from "../Components/Payment";
import Footer from "../Components/Footer";

const Skills = () => {
  const [visibleCards, setVisibleCards] = useState(Array(7).fill(false));

  useEffect(() => {
    const timers = visibleCards.map((_, index) => {
      return setTimeout(() => {
        setVisibleCards((prev) => {
          const newArr = [...prev];
          newArr[index] = true;
          return newArr;
        });
      }, index * 200);
    });

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          minHeight: "100vh",
          padding: "20px 0",
          paddingBottom: "0px",
          marginTop: "0px",
          background: "linear-gradient(to bottom,rgb(0, 0, 0),rgb(5, 1, 18))",
        }}
      >
        <div>
          <p
            className="main-headings"
            style={{
              marginTop: "70px",
              color: "white",
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
            Expertise & Capabilities
          </p>
        </div>

        {/* Programming Skills Card */}
        <div
          style={{
            opacity: visibleCards[0] ? 1 : 0,
            transform: visibleCards[0] ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease-in-out, transform 1.8s ease-in-out",
            width: "100%",
            display: "flex",
            justifyContent: "center",

            marginBottom: "20px",
          }}
        >
          <ProgrammingCard />
        </div>

        {/* Frontend Skills Card */}
        <div
          style={{
            opacity: visibleCards[1] ? 1 : 0,
            transform: visibleCards[1] ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease-in-out, transform 1.8s ease-in-out",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <FrontEndCard />
        </div>

        {/* Backend section */}
        <div
          style={{
            opacity: visibleCards[2] ? 1 : 0,
            transform: visibleCards[2] ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease-in-out, transform 1.8s ease-in-out",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <BackendCard />
        </div>

        {/* Dev Tools & Libraries */}
        <div
          style={{
            opacity: visibleCards[3] ? 1 : 0,
            transform: visibleCards[3] ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease-in-out, transform 1.8s ease-in-out",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <DevTools />
        </div>

        {/* Cloud Deployment */}
        <div
          style={{
            opacity: visibleCards[4] ? 1 : 0,
            transform: visibleCards[4] ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease-in-out, transform 1.8s ease-in-out",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <Cloud />
        </div>

        {/* Design & Content */}
        <div
          style={{
            opacity: visibleCards[5] ? 1 : 0,
            transform: visibleCards[5] ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease-in-out, transform 1.8s ease-in-out",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <Design />
        </div>

        {/* Payment Gateways */}
        <div
          style={{
            opacity: visibleCards[6] ? 1 : 0,
            transform: visibleCards[6] ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease-in-out, transform 1.8s ease-in-out",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <Payment />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Skills;
