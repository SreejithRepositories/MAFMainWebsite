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
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <title>Contact Us</title>
        <div style={{ backgroundColor: "#2e2761" }}>
          <img
            style={{
              width: "50%",
              height: "400px",
              display: "block",
              marginLeft: "25%",
            }}
            src={require("../images/contactUs.jpg")}
          ></img>
        </div>
        <div style={{ display: "flex" }}>
          <NameForm />
          <img
            style={{ width: "25%" }}
            src={require("../images/call.jpg")}
          ></img>
          <img
            style={{ width: "25%" }}
            src={require("../images/letters.png")}
          ></img>
          <img
            style={{ width: "25%" }}
            src={require("../images/mailbox.jpg")}
          ></img>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
