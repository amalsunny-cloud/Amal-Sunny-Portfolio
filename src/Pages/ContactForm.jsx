import { useForm, ValidationError } from "@formspree/react";
import Footer from "../Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import sendIcon from '../assets/send.png';
import { useNavigate } from "react-router-dom";


function ContactForm() {
  const [state, handleSubmit, reset] = useForm("xblonyeg");

  const navigate = useNavigate();
  
  const handleReset = ()=>{
    reset();
    navigate("/contact")
  }
  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(to bottom,rgb(0, 0, 0), #000222)",
          paddingBottom: "0px",
        }}
      >
        <div
          className="card shadow-lg p-4 d-flex justify-content-center align-items-center"
          style={{
            width: "90%",
            maxWidth: "1200px",
            borderRadius: "15px",
            background: "transparent",
            marginTop: "70px",
            marginBottom: "40px",
          }}
        >
          <p
            className="main-headings"
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              textDecoration: "none",
              background: "linear-gradient(190deg, #00C9FF, #92FE9D)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              userSelect: "none",
              marginTop: "-10px",
              position: "relative",
              display: "inline-block",
              paddingBottom: "1px",
            }}
          >
            Let's Connect
          </p>

          <div
            className="card p-4 rounded-4"
            style={{
              width: "100%",
              maxWidth: "600px",
              borderRadius: "15px",
              background: "transparent",
              backdropFilter: "blur(10px)",
              border: "2px solid rgba(255, 255, 255, 0.14)",
              boxShadow: "5px 5px 10px 0px rgba(255, 255, 255, 0.14)",
              color: "#fff",
              marginBottom: "80px",
            }}
          >
            {state.succeeded ? (
              <div className="text-center p-4">
                <p
                  style={{
                    background: "linear-gradient(190deg, #00C9FF, #92FE9D)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: "20px",
                  }}
                >
                  Message Sent Successfully!
                </p>
                <p className="mt-3">
                  Thank you for your message. I'll get back to you soon!
                </p>
                <button
                  className="btn btn-outline-light mt-3"
                  onClick={handleReset}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name :
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="form-control"
                    required
                    style={{
                      background: "transparent",
                      backdropFilter: "blur(10px)",
                      border: "2px solid rgba(255, 255, 255, 0.14)",
                      boxShadow: "5px 5px 10px 0px rgba(255, 255, 255, 0.14)",
                      color: "white",
                    }}
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email :
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-control"
                    required
                    style={{
                      background: "transparent",
                      backdropFilter: "blur(10px)",
                      border: "2px solid rgba(255, 255, 255, 0.14)",
                      boxShadow: "5px 5px 10px 0px rgba(255, 255, 255, 0.14)",
                      color: "white",
                    }}
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label">
                    Your Message :
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="5"
                    required
                    style={{
                      background: "transparent",
                      backdropFilter: "blur(10px)",
                      border: "2px solid rgba(255, 255, 255, 0.14)",
                      boxShadow: "5px 5px 10px 0px rgba(255, 255, 255, 0.14)",
                      color: "white",
                      resize: "none",
                    }}
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <div className="d-grid">
                  <button
                    type="submit"
                    className="send-message text-light"
                    disabled={state.submitting}
                  >
                    <img
                      src={sendIcon}
                      alt="Send Icon"
                      width={"20px"}
                      style={{ filter: "invert(100%)", marginRight: "10px" }}
                    />
                    {state.submitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactForm;
