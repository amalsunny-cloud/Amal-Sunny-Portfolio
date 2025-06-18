import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


const Contact = () => {
  return (
    <div className="text-center card w-50 d-flex  justify-content-center align-items-center mx-auto" style={{marginTop:"70px"}}>
      <div className="social-icons">
        <p className="text-dark mb-4" style={{fontSize:"28px"}}>Contact Me</p>
        <div className="d-flex gap-3 justify-content-center">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="icon-link">Github
            <FaGithub className="display-4 text-white" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="icon-link">LinkedIn
            <FaLinkedin className="display-4 text-white" />
          </a>
          {/* <a href="mailto:example@email.com" className="icon-link">
            <FaEnvelope className="display-4 text-white" />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Contact
