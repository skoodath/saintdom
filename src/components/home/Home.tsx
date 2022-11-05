import React from "react";
import "../style/home.style.scss";
import underwork from "../../assets/underwork.png";

const container: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  overflow: "hidden",
  backgroundImage: "linear-gradient(#A5F1E9, #a5f1e9c5)",
  padding: "5%",
  margin: "0 auto",
};
const image_wrapper: React.CSSProperties = {
  width: 200,
  height: 200,
  display: "flex",
};

const image: React.CSSProperties = {
  margin: "auto",
  width: "80%",
};
const header: React.CSSProperties = {
  textTransform: "uppercase",
  fontSize: "3rem",
  textAlign: "center",
};
const para: React.CSSProperties = {
  letterSpacing: 1.5,
  textAlign: "center",
  marginBottom: 16,
};
const Home = () => {
  return (
    <div style={container}>
      <h1 style={header}>saintdom services</h1>
      <div style={image_wrapper}>
        <img src={underwork} alt="under works" style={image} />
      </div>
      <p style={para}>
        We will be live soon. <br />
        <span style={{ fontSize: 32 }}>Please email us to find out more</span>
      </p>
      <a href="email: preeti@saintdomservices.com" style={{ fontSize: 22 }}>
        preeti@saintdomservices.com
      </a>
    </div>
  );
};

export default Home;
