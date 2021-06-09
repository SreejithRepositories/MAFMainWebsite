import React from "react";
import Footer from "./footer";
import BannerImage from "../images/AboutUsBanner.png";
import BackgroundImage from "../images/AboutUsBanner.png";
import AboutUsBlurb from "../images/AboutUsBlurb.png";
import LeadershipBlurb from "../images/software-development.jpg";
import DoitRightOne from "../images/DoItRightOne.jpg";
// import DoitRightTwo from "..images/DoItRight2.jpg";

export default class AboutUs extends React.Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <title>About Us</title>

        <div style={{ width: "100%", position: "relative" }}>
          <img src={BannerImage} style={{ maxWidth: "100%" }}></img>
          <div
            style={{
              color: "white",
              fontSize: "50px",
              position: "absolute",
              top: "20px",
              left: "35%",
            }}
          >
            About Us
          </div>
        </div>
        <div
          style={{
            // backgroundImage: `url(${BackgroundImage})`,
            border: "1px solid black",
            position: "relative",
            marginTop: "-4px",
          }}
        >
          <div className="AboutUsFlex">
            <div className="AboutUsFlexOne">
              <h1>About Us</h1>
              <p>
                MAF Group is the name you can trust to empower, enrich, and
                enhance your business. You can count on us to design, deploy,
                and deliver technology-enabled, enterprise-grade solutions that
                ensure operational excellence.
              </p>
              <p>
                By leveraging the potential of our key services like Cloud
                Automation, Data Analytics, Digital Transformation, and
                Marketing Automation, we ensure that you eliminate all
                complexities from your business and achieve operational
                excellence, attain business goals, and reach a high business
                growth level.
              </p>
            </div>
            <div className="AboutUsFlexTwo">
              <img
                src={AboutUsBlurb}
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  objectFit: "contain",
                  marginLeft: "-20%",
                }}
              ></img>
            </div>
          </div>
          <div className="StrongLeadershipFlex">
            <div className="StrongLeadershipFlexOne">
              <h1>Strong Leadership</h1>
              <p>
                As our leaders have a stronghold on almost every technology
                present today, the clients can expect avant-garde solutions that
                are reliable, robust, and help with rejuvenating business
                performance. Each project we undertake aims to offer a good ROI,
                visible results, and customized specifications as per your
                requirements.{" "}
              </p>
              <p>
                Passion drives every team member at MAF Group. We work together
                as a unit on learning new technologies and implementing them
                seamlessly to deliver flawless solutions that work for the
                clients. Each MAF Group team member is awe-inspiring, brilliant,
                creative, dynamic, efficient, and fearless.{" "}
              </p>
              <p>
                We grow every minute of every day and ensure client satisfaction
                by delivering better than expected results.{" "}
              </p>
            </div>

            <div className="StrongLeadershipFlexTwo">
              <img
                src={LeadershipBlurb}
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              ></img>
            </div>
          </div>
          <div className="WhyMafGroup">
            <h1>Why MAF Group? - We Do it Right!</h1>
            <div className="ExpertiseinDiffAreas">
              <div className="ExpertiseinDiffAreasFlexOne">
                <h2>Expertise in Different Areas</h2>
                <p>
                  We have been serving organizations from different industries
                  for a few years now. You can count on us to map your needs and
                  ensure your business growth according to your
                  industry-specific needs.{" "}
                </p>
                <h2>Projects Delivered</h2>
                <p>
                  For us, success lies in helping the clients achieve what they
                  want and expect from us. You can check our exceptional track
                  record to see how we have helped businesses streamline their
                  operations and attain better growth.{" "}
                </p>
                <h2>We Aim for Success</h2>
                <p>
                  We take on every project as a challenge and deliver our best
                  time and again. The numbers speak for themselves. Head to our
                  case studies section to know how we have helped brands achieve
                  success.{" "}
                </p>
                <h2>Experienced and Qualified Team </h2>
                <p>
                  Over the years, we have built a strong team by ensuring we
                  hire the best minds, most qualified and experienced
                  professionals, and the top tech enthusiasts who can add value
                  for our clients.{" "}
                </p>
                <p>
                  Talk to us about your pain points and allow us to effectively
                  use our friendly expertise to build solutions that promote and
                  sustain business growth seamlessly. Get in touch to take your
                  business to the next level of success!
                </p>
              </div>
              <div className="ExpertiseinDiffAreasFlexTwo">
                <img
                  src={DoitRightOne}
                  style={{
                    maxWidth: "100%",
                    maxWidth: "100%",
                  }}
                ></img>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
