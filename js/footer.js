import React from "react";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flexContainerFooter">
        <div className="flexOne">
          <div style={{ width: "16.5%" }}>
            <b>Services</b>
          </div>
          <div style={{ width: "16.5%" }}>
            <b>UseCases</b>
          </div>
          <div style={{ width: "16.5%" }}>
            <b>Partners</b>
          </div>
          <div style={{ width: "16.5%" }}>
            <b>Clients</b>
          </div>
          <div style={{ width: "16.5%" }}>
            <b>Careers</b>
          </div>
          <div style={{ width: "16.5%" }}>
            <b>ContactUs</b>
          </div>
        </div>
        <div className="flexTwo">
          <img
            style={{
              width: "45px",
              height: "45px",
            }}
            src={require("../images/twitter.png")}
          ></img>

          <img
            style={{ width: "45px", height: "45px" }}
            src={require("../images/facebook.png")}
          ></img>

          <img
            style={{ width: "45px", height: "45px" }}
            src={require("../images/linkedin.png")}
          ></img>
        </div>
        <div className="flexThree">
          <b>Copyright 2018 www.mafgroup.co.uk</b>
        </div>
      </div>
    );
  }
}
