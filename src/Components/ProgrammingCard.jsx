const ProgrammingCard = () => {
  return (
    <>
      <div
        className="card shadow-lg pb-4"
        style={{
          width: "90%",
          maxWidth: "900px",
          borderRadius: "15px",
          background: "rgba(161, 180, 254, 0.06)",
          backdropFilter: "blur(10px)",
          border: "0px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.36)",
          color: "#fff",
          marginTop: "17px",
        }}
      >
        <div className="text-center pt-3 pb-1 card-hover">
          <p
            style={{
              fontSize: "28px",
              fontWeight: "600",
              userSelect: "none",
              cursor: "default",
              color: "#dbd8e3",
            }}
          >
            Programming Language
          </p>

          <div className="row justify-content-center">
            <div
              className="col-md-2 m-1 pt-2 text-center shadow-sm card-hover-2 mx-3"
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
              <p
                style={{
                  fontSize: "18px",
                  marginBottom: "0px",
                  color: "#dbd8e3",
                }}
              >
                Javascript
              </p>
              <img
                src="src\assets\js.png"
                alt=""
                width={"40px"}
                style={{ marginTop: "5px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgrammingCard;
