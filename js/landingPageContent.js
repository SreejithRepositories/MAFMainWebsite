import React from "react";
import Test from "./test";
import "../css/landing_page.css";
import Footer from "./footer";

export default class LandingPageContent extends React.Component {
  constructor() {
    super();
  }
  render() {
    if (window.location.pathname == "/") {
      return (
        <div>
          <title>Home</title>

          <h1>Our Services</h1>
          <div className="one">
            <div className="oneDotOne">
              <img
                style={{ width: "100%" }}
                src={require("../images/cloud_automation_blurb.png")}
              ></img>
              <p style={{ textAlign: "center" }}>
                <a href="/cloudautomation" target="_blank">
                  Cloud
                </a>
              </p>
            </div>
            <div className="oneDotTwo">
              <img
                style={{ width: "100%" }}
                src={require("../images/data_analytics_blurb.png")}
              ></img>
              <p style={{ textAlign: "center" }}>
                <a href="/analytics" target="_blank">
                  Analytics
                </a>
              </p>
            </div>
            <div className="oneDotThree">
              <img
                style={{ width: "100%" }}
                src={require("../images/digital_transformation_blurb.png")}
              ></img>
              <p style={{ textAlign: "center" }}>
                {" "}
                <a href="/digitaltransformation" target="_blank">
                  Digital Transformation
                </a>
              </p>
            </div>

            <div className="oneDotFour">
              <img
                style={{ width: "100%" }}
                src={require("../images/marketing_automation_blurb.png")}
              ></img>
              <p style={{ textAlign: "center" }}>
                <a href="/marketingautomation" target="_blank">
                  Marketing Automation
                </a>
              </p>
            </div>
          </div>

          <Footer />
        </div>
      );
    } else {
      return null;
    }
  }
}
