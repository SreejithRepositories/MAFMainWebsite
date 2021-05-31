import React from "react";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flexContainerFooter">
        <div className="flexOne">
          <div className="Services">
            <b>Services</b>
          </div>
          <div className="UseCases">
            <b>Use Cases</b>
          </div>
          <div className="Partners">
            <b>Partners</b>
          </div>
          <div className="Clients">
            <b>Clients</b>
          </div>
          <div className="Careers">
            <b>Careers</b>
          </div>
          <div className="ContactUs">
            <b>Contact Us</b>
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
