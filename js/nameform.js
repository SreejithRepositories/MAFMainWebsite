import React from "react";
var validator = require("email-validator");
var axios = require("axios");
var qs = require("qs");

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Name: "", Email: "", Subject: "", Message: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    switch (event.target.id) {
      case "Name":
        this.setState({ Name: event.target.value });
        break;
      case "Email":
        this.setState({ Email: event.target.value });
        break;
      case "Subject":
        this.setState({ Subject: event.target.value });
        break;
      case "Message":
        this.setState({ Message: event.target.value });
    }
  }

  handleSubmit(event) {
    // console.log(validator.validate(this.state.Email));

    const data = this.state;
    const options = {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: qs.stringify(data),
      url: "https://formspree.io/f/mqkwpapl",
    };
    axios(options).then((res) => alert("thanks!"));
    this.setState({
      Name: "",
      Email: "",
      Subject: "",
      Message: "",
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="formDiv">
        <h1>Write to us</h1>
        <form
          action="https://formspree.io/f/mqkwpapl"
          onSubmit={this.handleSubmit}
          style={{
            border: "1px solid black",

            backgroundColor: "#555c58",
          }}
        >
          <label>
            Name:
            <input
              type="text"
              id="Name"
              required
              value={this.state.Name}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <br></br>
          <label>
            Email:
            <input
              type="email"
              id="Email"
              required
              value={this.state.Email}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <label>
            Subject:
            <input
              type="text"
              id="Subject"
              required
              value={this.state.Subject}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <br></br>
          <label>
            Message:
            <textarea
              type="text"
              id="Message"
              required
              value={this.state.Message}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <br></br>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
