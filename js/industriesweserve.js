import React from "react";
import Footer from "./footer";
import IndustriesWeServeBannerImage from "../images/industriesweserve.jpg";
import RetailBlurb from "../images/retail.jpg";
import GamingBlurb from "../images/gaming.jpg";
import eCommerceBlurb from "../images/ecommerce.jpg";
import BankingBlurb from "../images/banking.jpg";
import InsuranceBlurb from "../images/insurance.jpg";
import HospitalityBlurb from "../images/hospitality.jpg";

export default class IndustriesWeServe extends React.Component {
  render() {
    return (
      <div style={{ marginTop: "6px" }}>
        <title>Industries We Serve</title>

        <div
          style={{
            textAlign: "center",
            backgroundColor: "#131257",
            height: "250px",
          }}
        >
          <img
            src={IndustriesWeServeBannerImage}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
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
          <h1>Industries We Serve</h1>
          <div className="industriesWeServe">
            <div className="retail">
              <h2>Retail</h2>
              <p>
                Adapting to changes brought on with time has always been a key
                element in the retail industry. We help retail industry players
                adapt quickly, evolve with time, and stay resilient even when
                external pressure and global disruptions occur.{" "}
              </p>
              <p>
                As a reliable B2B consultancy using advanced technologies, we
                help you adapt to new social, economic, and environmental
                climates, meet the expectations of key stakeholders (employees,
                investors, and customers), and work seamlessly amid rising
                competition by using the latest technological tools and
                beneficial partnerships.{" "}
              </p>
              <p>
                Retail is never simple, and it will not ever be. Let us help you
                by providing deftly handling digital transformation, ensuring
                smooth Data Migration and Digital Analytics Migration, taking
                care of Cloud Ingestion and Data management (with useful tools
                like Google Cloud), and assisting with Data Lab practice.{" "}
              </p>
              <p>
                To know how we helped a leading player in the retail industry,
                Sainsbury's, click here.{" "}
              </p>
            </div>
            <div className="retailImage">
              <img
                src={RetailBlurb}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              ></img>
            </div>
            <div className="gaming">
              <h2>Gaming</h2>
              <p>
                Gaming is a challenging industry where the competition is stiff,
                and the expectations are high. To help the leading players in
                the gaming industry, we offer solutions that lead to
                optimization. Everything is done with one aim, to boost your
                ROI. Whether you need floor optimization or marketing
                consulting, or even help with the content, we are there for you.
                You can focus on the things you do best while our consultants do
                the best for you.{" "}
              </p>
              <p>
                Over the years, we have helped leading brands in the gaming
                industry with digital experimentation, cloud migration, data
                management, Cloud- AI, and real-time segmentation.{" "}
              </p>
              <p>
                To know how we helped players like Rank Group and William Hill,
                click here.{" "}
              </p>
            </div>
            <div className="gamingImage">
              <img
                src={GamingBlurb}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              ></img>
            </div>
            <div className="eCommerce">
              <h2>E-Commerce</h2>
              <p>
                The world of e-commerce is changing thanks to the rise in trends
                like borderless business, cross-border commerce, and
                international online retail growth rapidly. Two years back, the
                sales from online purchases were 13.6 per cent only. It will
                reach 19.5 per cent in 2021 and 21.8 per cent in 2024. All this
                says that an e-commerce company needs to make itself stand out
                if it wants to stay ahead of the competition and make the most
                of the rapid growth in the industry.
              </p>
              <p>
                One of the things that can help greatly is personalization and
                leveraging the content to target specific customers. Mobile App
                integrations, Digital Transformations, Cloud NLP,and Data
                Migration also help greatly. MAF Group can handle it all for you
                and lets you leverage advanced technologies to play a vital role
                in the future of consumerism.{" "}
              </p>
              <p>
                {" "}
                To know how we have helped clients in the banking sector, click
                here.{" "}
              </p>
            </div>
            <div className="eCommerceImage">
              <img
                src={eCommerceBlurb}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              ></img>
            </div>
            <div className="banking">
              <h2>Banking</h2>
              <p>
                Due to the recent changes, the banking industry is witnessing
                more disruption than ever. New, advanced, and innovative
                technologies are changing the way the market is structured. New
                industry players are taking a bite out of the revenues of
                existing banking organizations and challenging them at every
                turn.{" "}
              </p>
              <p>
                So, banking industry players who want to sustain their position
                need to act now. Being digital and offering better online
                service is one thing. Another is to constantly adapt to change
                and be the best versions of themselves. Otherwise, they might be
                at the risk of lagging!
              </p>
              <p>
                That is where MAF Group can help. Whether you want to migrate to
                the cloud or hope to offer a better mobile experience or even
                create cool content that motivates people to connect, our
                experts can deliver perfect solutions to you after delving
                through data-driven insights and using the latest technological
                tools that go with the flow and improve with time.{" "}
              </p>
            </div>
            <div className="bankingImage">
              <img
                src={BankingBlurb}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              ></img>
            </div>
            <div className="insurance">
              <h2>Insurance</h2>
              <p>
                The needs of clients in the insurance industry are dynamic.
                Insurance companies need to align their strategies and offer new
                products/services constantly. So, one challenge this industry
                faces is measuring and meeting clients' expectations via data
                and insights. MAF group allows you to make the most of data,
                cloud, automation, and digitally transform your business to meet
                and exceed customer expectations via innovation.{" "}
              </p>
              <p>
                Our experts have the right knowledge, qualifications, and skills
                required to help insurance industry players cultivate agility to
                meet any challenge head-on and consistently develop new income
                streams.{" "}
              </p>
            </div>
            <div className="insuranceImage">
              <img
                src={InsuranceBlurb}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              ></img>
            </div>
            <div className="hospitality">
              <h2>Hospitality</h2>
              <p>
                The hospitality industry has been going through many changes,
                and the players are trying to offer more holistic experiences to
                customers in the last few years. One of the key tools that are
                helping this industry measure, map, and deliver on customer
                expectations is the use of data. Digitalization is also helping
                the industry players to stay connected with the customers, seek
                their feedback, and improvise accordingly.{" "}
              </p>
              <p>
                Access to marketing automation and customer data is a key factor
                for success in this industry, as customer experience matters a
                lot. If customers get what they expect, they will stay engaged
                with the brand and be more loyal. However, even one
                disappointment can lead to disasters. So, there is no scope for
                an error.{" "}
              </p>
              <p>
                At MAF Group, we help ensure a perfect customer experience using
                the latest tools like cloud, AI, data ingestion, marketing
                automation, and analytics implementation. With achievable goals
                like supporting real-time experience on digital platforms, MAF
                Group has helped countless customers in the hospitality industry
                to get the endcustomers the best-ever experience.{" "}
              </p>
              <p>To know how we helped Bourne Leisure Limited, click here. </p>
            </div>
            <div className="hospitalityImage">
              <img
                src={HospitalityBlurb}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              ></img>
            </div>
            <div className="workInOtherIndustries">
              <h2>Work in Other Industries</h2>
              <p>
                With time, MAF Group is expanding its reach to
                industries/sectors not mentioned here. So, if you belong to any
                of those categories, you can depend on us for seamless
                solutionssuch asDigital Transformation, Data & Analytics
                Implementation [Digital and Legacy], Marketing Automation, Cloud
                practice, Data Engineering & Data Science, Application
                Development, and Management and Digital Lab. Connect with us to
                know how exactly we can help and what we can bring to the table.{" "}
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
