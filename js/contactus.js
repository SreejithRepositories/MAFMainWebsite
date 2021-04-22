import React from "react";
import Footer from "./footer";

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
      <React.Fragment>
        <title>Contact Us</title>
        <div style={{ backgroundColor: "#2e2761" }}>
          <img
            style={{
              border: "1px solid blue",
              width: "50%",
              height: "50%",
              display: "block",
              width: "50%",
              marginLeft: "25%",
            }}
            src={require("../images/contactUs.jpg")}
          ></img>
        </div>
      </React.Fragment>
    );
  }
}
