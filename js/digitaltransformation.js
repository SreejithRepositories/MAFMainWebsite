import React from "react";
import Footer from "./footer";
import BackgroundImage from "../images/ball-63527.jpg";

export default class DigitalTransformation extends React.Component {
  render() {
    return (
      <div style={{ marginTop: "7px" }}>
        <title>Digital Transformation</title>

        <div
          style={{
            textAlign: "center",
            backgroundColor: "#131257",
          }}
        >
          <img
            src={require("../images/digital_transformation_banner.jpg")}
            style={{
              height: "250px",
              verticalAlign: "text-bottom",
              marginTop: "2px",
              maxWidth: "100%",
            }}
          ></img>
        </div>
        <div
          style={{
            // backgroundImage: `url(${BackgroundImage})`,
            border: "1px solid black",
            position: "relative",
          }}
        >
          <img
            src={BackgroundImage}
            style={{
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              opacity: "0.2",
              position: "absolute",
            }}
          />
          <h1>Digital Transformation</h1>
          <p>
            CEOs and CIOs need to change their organization's processes and
            systems in line with customer expectations. We can help with the
            digital transformation journey by lending a hand in everything from
            strategy development to ensuring on-time deliveries. You can trust
            our experts to help you master digital transformation, get maximum
            value from digital investments, and reach out to new
            customers/markets via the power of digital.
          </p>
          <h1>Why Digital Transformation is Essential</h1>
          <p>
            Digital transformation is the need of the hour in COVID-19 times as
            people are restricted to their homes and prefer to purchase
            everything online. Businesses that stick to offline/store models
            will lose the benefits they can reap from the digital boom.
          </p>
          <h1>Digital Transformation Services</h1>
          <ul>
            <li>Web</li>
            <p>
              The web services we provide are not limited to redesigning a
              website or building a plug-in. We take things forward by designing
              and delivering bold and innovative solutions that boost business
              growth. Our web solutions keep up with the trends like mobile
              shopping and ensure an enjoyable and engaging end-user experience.
            </p>
            <li>Social</li>
            <p>
              You can trust our experts to make social media work for you. We
              leverage social media's power to initiate interactions, create
              creative campaigns, engage end-users, and simplify the social
              strategy. Brands also depend on us to embrace social media's power
              and use social networks to achieve growth goals.
            </p>
            <li>Mobile</li>
            <p>
              Social media on mobile is not limited to creating shiny apps. It
              is also about ensuring that the mobile solutions become useful to
              the decision-makers and the apps stay relevant to the end-users.
              As we do not undermine the power of design and user-experience, we
              focus on creating innovative interfaces and unique UX.
            </p>
            <li>Cyber Security</li>
            <p>
              Identity theft is a serious concern in the world of digital. We
              help preserve your business identity, retain competitive
              advantage, and keep the clients happy for long. Our team creates
              the best and highly customized cybersecurity solutions that help
              you stay vigilant against digital risks and get better protection.
            </p>
            <li>Optimization</li>
            <p>
              Data is everywhere, from your social media chatter to the
              influencer impact. We help you get more value out of the data by
              offering digital insights that are usually useful. With us, you
              can filter relevant data, understand it, and utilize it to deliver
              an enhanced customer experience. As a part of optimization, you
              can trust us to optimize your website or landing page experience
              by tracking the behaviour of visitors to encourage visitors to
              take desired actions. We can also make your website more appealing
              by making it more user-focused and change it based on end-user
              feedback. Whether it is a change in website design,
              adding/deleting/changing basic functionalities, or migrating
              websites from one platform to another, our competent team can
              handle it all skilfully.
            </p>
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}
