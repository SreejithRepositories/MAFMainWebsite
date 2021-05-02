import React from "react";
import Footer from "./footer";
import NameForm from "./nameform";

export default class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div className="contactUsMain">
        <title>Contact Us</title>
        <div className="contactUsBanner">
          <img
            className="contactUsBannerImage"
            src={require("../images/contactUs.jpg")}
          ></img>
        </div>
        <div className="contactUsAllMethods">
          <NameForm />
          <img className="callImage" src={require("../images/call.jpg")}></img>
          <img className="letters" src={require("../images/letters.png")}></img>
          <img className="mailbox" src={require("../images/mailbox.jpg")}></img>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
