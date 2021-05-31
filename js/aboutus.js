import React from "react";
import Footer from "./footer";
import BannerImage from "../images/AboutUsBanner.png";
import BackgroundImage from "../images/AboutUsBanner.png";
import AboutUsBlurb from "../images/AboutUsBlurb.png";
import LeadershipBlurb from "../images/leadership.jpg";
import DoitRightOne from "../images/DoitRightOne.jpg";
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
          <div
            style={{
              width: "100%",
              boxSizing: "borderBox",
              display: "flex",
            }}
          >
            <div
              style={{
                /*border: "1px solid black",*/
                width: "50%",
              }}
            >
              <h1>About Us</h1>
              <p>
                MAF Group is the name you can trust to empower, enrich, and
                enhance your business. You can count on us to design, deploy,
                and deliver technology-enabled, enterprise-grade solutions that
                ensure operational excellence. We design, develop, deploy and
                maintain systems in verticals such as cloud computing, machine
                learning, artificial intelligence, data intelligence, data
                analytics, marketing automation etc. We have helped clients
                realize their short-term and long-term goals cost-effectively
                and maximum ROI.
              </p>
            </div>
            <div
              style={{
                width: "50%",
                boxSizing: "borderBox",
                /*border: "1px solid black",*/
              }}
            >
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
          <div
            style={{
              width: "100%",
              boxSizing: "borderBox",
              display: "flex",
            }}
          >
            <div
              style={{
                /*border: "1px solid black",*/
                width: "50%",
              }}
            >
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

            <div
              style={{
                width: "50%",
                boxSizing: "borderBox",
                /*border: "1px solid black",*/
              }}
            >
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
            <div className="ExpertiseinDiffAreas" style={{ display: "flex" }}>
              <div style={{ width: "50%" }}>
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
              <div style={{ width: "50%" }}>
                <img
                  src={DoitRightOne}
                  style={{ maxWidth: "100%", maxWidth: "100%" }}
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
