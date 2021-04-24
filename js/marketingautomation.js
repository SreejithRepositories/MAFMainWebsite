import React from "React";
import react from "React";
import Footer from "./footer";
import BackgroundImage from "../images/marketingautomationbackground.jpg";

export default class MarketingAutomation extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <title>Marketing Automation</title>

        <div
          style={{
            boxSizing: "border-box",
            textAlign: "center",
            backgroundColor: "#0b9cb5",
          }}
        >
          <img
            src={require("../images/marketingautomationbanner.png")}
            style={{
              height: "252px",
              verticalAlign: "text-bottom",
            }}
          ></img>
        </div>
        <div
          style={{
            marginTop: "-5px",
            background: `linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2)), url(${BackgroundImage})`,
          }}
        >
          <h1>Marketing Automation</h1>
          <p>
            With time, organizations are learning the importance of using
            technology to market their business, explore new markets and ensure
            minimal manual intervention. Marketing automation helps with all of
            it. More than 55% B2B companies and 49% of companies use marketing
            automation as per stats. Here iswhy you should adopt it too!
          </p>
          <h1>What is Marketing Automation?</h1>
          <p>
            Market• Create a strategy that works and build an actionable
            marketing automation planng automation allows a company to build and
            develop customer relationships using automation tools that reduce
            manual intervention and employee-dependency. A marketing automation
            software would include many aspects like landing pages, lead
            nurturing programs, marketing workflows, list segmentation, social
            media automation, lead scoring, and CRM integration. With effective
            marketing automation in place, you just have to drive visitors to
            your business website, and automation will ensure that those
            visitors convert into sales-ready leads or even sales at times.{" "}
          </p>
          <h1>How Marketing Automation Will Help a Business?</h1>
          <p>
            Business owners and managers who want to enhance their business
            progress need to trust marketing automation to lend them a hand and
            make things smoother. It will help them to:
          </p>
          <ul>
            <li>
              Improve the follow-up process so that they do not miss any leads
            </li>
            <li>
              Boost the conversion rate so that the business keeps on coming
            </li>
            <li>
              Reduce the time taken to convert a lead- reduce wait times of
              customers
            </li>
            <li>Make the salespeople more efficient and productive</li>
            <li>
              Send personalized emails to connect with customers on a large
              scale
            </li>
            <li>
              Offer quicker responses to all existing and potential customers
            </li>
            <li>
              Improve ROI by increasing customer numbers and judging the cost
              efficiency of campaigns
            </li>
          </ul>
          <h1>What Marketing Automation Services We Offer?</h1>
          <p>
            To help you excel at marketing automation, we take care of the
            following
          </p>
          <ul>
            <li>
              Pick the right automation platform that suits your business needs
            </li>
            <li>
              Create a strategy that works and build an actionable marketing
              automation plan
            </li>
            <li>
              Set up the marketing software and ensure its smooth implementation
            </li>
            <li>Create automated workflows that work for your organization</li>
            <li>Implement CRM and train your team on the same</li>
          </ul>
          <h1>What Will We Set Up for You?</h1>
          <p>We automate the following for you:</p>
          <ul>
            <li>Nurturing of prospects and leads</li>
            <li>Upselling</li>
            <li>Cross-selling</li>
            <li>Follow up of leads or prospects</li>
            <li>Reminders for your sales team</li>
            <li>Lead scoring</li>
            <li>Prioritizing the most valuable prospects</li>
            <p>
              Trust us to create all-inclusive marketing automation plans and
              implement them smoothly. These can be customized as per your
              organization needs and ensure your business gets the utmost
              marketing value in short and long term. Call now to talk to an
              expert directly!
            </p>
          </ul>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
