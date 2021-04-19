import React from "react";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          border: "1px solid black",
          width: "100%",
          backgroundColor: "#879187",
          height: "100px",
        }}
      >
        <span>
          <b>Services</b>
        </span>{" "}
        <span style={{ marginLeft: "10%" }}>
          <b>Use Cases</b>
        </span>{" "}
        <span style={{ marginLeft: "10%" }}>
          <b>Official Partners</b>
        </span>
        <span style={{ marginLeft: "10%" }}>
          <b>Clients</b>
        </span>
        <span style={{ marginLeft: "10%" }}>
          <b>Careers</b>
        </span>
        <span>
          <img
            style={{
              width: "30px",
              height: "30px",
              marginLeft: "10%",
              marginTop: "3px",
            }}
            src={require("../images/twitter.png")}
          ></img>
        </span>
        <span>
          <img
            style={{ width: "30px", height: "30px", marginLeft: "5%" }}
            src={require("../images/facebook.png")}
          ></img>
        </span>
        <span>
          <img
            style={{ width: "30px", height: "30px", marginLeft: "5%" }}
            src={require("../images/linkedin.png")}
          ></img>
        </span>
        <p style={{ marginLeft: "45%" }}>
          <b>Copyright 2018 www.mafgroup.co.uk</b>
        </p>
      </div>
    );
  }
}
