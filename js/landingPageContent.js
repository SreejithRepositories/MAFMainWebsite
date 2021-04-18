import React from "react";
import Test from "./test";
import "../css/landing_page.css";
import Footer from "./footer";

export default class LandingPageContent extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={{ border: "1px solid black" }}>
        <h1>Our Services</h1>
        <div className="one">
          <div className="oneDotOne">
            <img
              style={{ width: "100%" }}
              src={require("../images/cloud_automation_blurb.png")}
            ></img>
            <p style={{ textAlign: "center" }}>Cloud Automation</p>
          </div>
          <div className="oneDotTwo">
            <img
              style={{ width: "100%" }}
              src={require("../images/data_analytics_blurb.png")}
            ></img>
            <p style={{ textAlign: "center" }}>Data Analytics</p>
          </div>
          <div className="oneDotThree">
            <img
              style={{ width: "100%" }}
              src={require("../images/digital_transformation_blurb.png")}
            ></img>
            <p style={{ textAlign: "center" }}>Digital Transformation</p>
          </div>
        </div>
        <div className="oneDotFour">
          <img
            style={{ width: "100%" }}
            src={require("../images/marketing_automation_blurb.png")}
          ></img>
          <p style={{ textAlign: "center" }}>Marketing Transformation</p>
        </div>
        <div style={{ clear: "both", marginTop: "400px" }}>
          <Footer />
        </div>
      </div>
    );
  }
}
