import HTMLLogo from "../assets/html-5.png";
import CSSLogo from "../assets/css-3.png";
import TailwindLogo from "../assets/icons8-tailwind-css-256.png";
import BootstrapLogo from "../assets/icons8-bootstrap-256.png";
import ReactLogo from "../assets/science.png";
import FramerLogo from '../assets/framerLogo.png'
import ThreeJSLogo from '../assets/threeJSLogo.png'



const FrontEndCard = () => {
  const skills = [
    { name: "HTML", image: HTMLLogo },
    { name: "CSS", image: CSSLogo },
    { name: "Tailwind", image: TailwindLogo },
    { name: "Bootstrap", image: BootstrapLogo },
    { name: "React", image: ReactLogo },
    { name: "Framer", image: FramerLogo },
    { name: "Three JS", image: ThreeJSLogo },
  ];
  return (
    <>
      <div
        className="card shadow-lg pb-3"
        style={{
          width: "90%",
          maxWidth: "900px",
          borderRadius: "15px",
          backgroundColor: "rgba(161, 180, 254, 0.06)",
          backdropFilter: "blur(10px)",
          border: "0px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.36)",
        }}
      >
        <div className="text-center py-3">
          <p
            style={{
              fontSize: "28px",
              fontWeight: "600",
              userSelect: "none",
              color: "#dbd8e5",
            }}
          >
            Frontend development
          </p>

          <div className="row justify-content-center mt-3 mx-4 card-hover">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="col-md-2 m-2 py-3 pb-4 text-center shadow-sm card-hover-2"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "rgba(4, 74, 66, 0.25)",
                  backdropFilter: "blur(10px)",
                  border: "2px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.36)",
                  color: "#fff",
                  minHeight: "100px",
                }}
              >
                <p style={{ fontSize: "18px", marginBottom: "0px" }}>
                  {skill.name}
                </p>
                <img
                  src={skill.image}
                  alt={skill.name}
                  width={"45px"}
                  style={{ marginTop: "5px" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontEndCard;
