import React from "react";
import Footer from "./footer";
import BackgroundImage from "../images/ball-63527.jpg";
import DataIntegrationBlurb from "../images/dataintegration.jpg";
import DataCube from "../images/datacube.jpg";
import NeutralNetworkBlurb from "../images/neuralnetwork.png";

export default class Analytics extends React.Component {
  render() {
    return (
      <div style={{ marginTop: "6px" }}>
        <title>Analytics</title>

        <div
          style={{
            textAlign: "center",
            backgroundColor: "#131257",
            height: "250px",
          }}
        >
          <img
            src={require("../images/analytics.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              maxHeight: "100%",
            }}
          ></img>
        </div>
        <div
          style={{
            // backgroundImage: `url(${BackgroundImage})`,
            border: "1px solid black",
            position: "relative",
            width: "100%",
          }}
        >
          <h1>Data Analytics</h1>
          <p>
            Organizations' challenges in the ever-changing environment and
            highly competitive landscape increase the pressure to be the best.
            One useful tool that can help organizations stay ahead of the
            competition and meet customer expectations is data analytics that
            helps eliminate the frustration of dealing with bulk data by driving
            value from that data. Data analytics can bring together finance,
            marketing, operational and external data on a single platform.{" "}
          </p>
          <div className="howCanWeHelp">
            <div className="howCanWeHelpFlex1">
              <h1>How Can We Help?</h1>
              <h2>Data Source Evaluation</h2>
              <p>
                We access all the data of your organization and develop an
                understanding of all the information you possess.{" "}
              </p>
              <h2>Quality Assessment</h2>
              <p>
                Our experts do a thorough cleaning of data and eliminate all
                unwanted and non-useful data to reduce the clutter. It ensures
                the availability of correct, consistent, and complete data.{" "}
              </p>
              <h2>Integration and Modelling</h2>
              <p>
                We enable your experts to link data from varied sources and
                create data models to make data reporting easier and make data
                more understandable.{" "}
              </p>
              <h2>Choosing Platform and Technology</h2>
              <p>
                Our experts will analyse your data needs and select the right
                enterprise analytics solution for your organization. They often
                see to its implementation as well.{" "}
              </p>
              <h2>Data Reporting</h2>
              <p>
                The experts will also recommend the right reporting tools,
                metrics, and KPIs and offer help with report creation. They also
                identify data gaps and define use cases.{" "}
              </p>
            </div>
            <div className="howCanWeHelpFlex2">
              <img
                src={DataIntegrationBlurb}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              ></img>
            </div>
            <div className="howCanWeHelpFlex3">
              <h1>Our Expertise</h1>
              <h2>Data Analytics</h2>
              <p>
                To automate data analytics, we will pick the right automation
                platform that suits your business needs, create a strategy that
                works and build an actionable plan. We also set up the needed
                software and ensure its smooth implementation along with
                creating automated workflows that work for your organization.
                You can also trust us to train your team on the same to ensure
                effective operations without outside assistance.{" "}
              </p>
              <h2>Real-Time Analytics</h2>
              <p>
                Our data analytics service helps turn data into insights quickly
                to help save time and effort. Also known as operational
                intelligence, real-time analytics can predict failures and make
                your teams aware of the issue so that the situation can be
                rectified. For instance, real-time analytics can help detect
                credit card fraud even before a transaction is completed and
                help save the end-users' money.{" "}
              </p>
              <h2>NLP- Natural Language Processing</h2>
              <p>
                By using Natural language Processing or NLP, we help you foster
                human and computer interaction. We integrate the business with
                intelligent systems to ensure the perpetual growth of your
                business. Some of the NLP techniques we follow are Information
                Extraction via machine learning, Text Classification to provide
                insights and reduce errors, Named Entity Recognition that helps
                improvise entity extraction by classifying specific words with
                unstructured data, Intent Classification in which text is
                classified into various datasets. You can also trust us for
                Relationship Extraction, Content Clustering, Fact Extraction,
                and Text Generation, and Summarization.
              </p>
              <h2>Machine Learning</h2>
              <p>
                As an independent consultancy that loved data science, we use
                machine learning and statistics to help organizations make the
                most of data and unleash its full potential. We use the latest
                data science and technology to ensure your organization benefits
                from it and explores its potential. Earlier, organizations were
                limited to predictive analysis to make the most of data.
                Predictive analysis meant making assumptions and testing by
                using past data to predict the future or consider what/if
                scenarios. We use AI Machine Learning to extend the concepts
                around predictive analytics so that the AI system can
                makeassumptions, test, and learn autonomously and save human
                time and effort. As CEOs and CMO's need to make decisions
                quickly, we help them by using the power of data analytics,
                predictive analytics, AI, and machine learning. Contact us to
                know more!
              </p>
            </div>
            <div className="howCanWeHelpFlex4">
              <img
                src={NeutralNetworkBlurb}
                style={{
                  maxWidth: "75%",
                  maxHeight: "100%",
                  marginLeft: "15%",
                }}
              ></img>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
