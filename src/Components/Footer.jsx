const Footer = () => {
  return (
    <footer
      className="text-center py-3 text-white"
      style={{
        backgroundColor: "rgb(16, 0, 53)",
        position: "static",
        bottom: 0,
        width: "100%",
        zIndex: 0,
      }}
    >
      <div className="d-flex justify-content-center">
        &copy; {new Date().getFullYear()} Amal Sunny.{" "}
        <span style={{ color: "#7b7098ff", marginLeft: "8px" }}>
          All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
