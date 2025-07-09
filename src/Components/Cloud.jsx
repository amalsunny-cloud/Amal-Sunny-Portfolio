import NetlifyLogo from "../assets/icons8-netlify-100.png";
import RenderLogo from "../assets/render-2.png";
import VercelLogo from "../assets/vercel-icon-svgrepo-com.svg";



const Cloud = () => {
  const CloudDeployment = [
    { name: "Netlify", image: NetlifyLogo },
    { name: "Render", image: RenderLogo },
    { name: "Vercel", image: VercelLogo },
  ];
  return (
    <>
      <div
        className="card shadow-lg pb-4"
        style={{
          width: "90%",
          maxWidth: "900px",
          borderRadius: "15px",
          backgroundColor: "rgba(161, 180, 254, 0.06)",
          backdropFilter: "blur(10px)",
          border: "0px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.36)",
          color: "#fff",
        }}
      >
        <div className="text-center pt-4 pb-1 card-hover">
          <p
            style={{
              fontSize: "28px",
              fontWeight: "600",
              userSelect: "none",
              cursor: "default",
              color: "#dbd8e3",
            }}
          >
            Cloud & Deployment
          </p>

          <div className="row justify-content-center mt-3">
            {CloudDeployment.map((skill) => (
              <div
                key={skill.name}
                className="col-md-2 m-2 py-2 text-center shadow-sm card-hover-2"
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

export default Cloud;
