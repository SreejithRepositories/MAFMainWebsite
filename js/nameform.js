import React from "react";

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Name: "", Email: "", Message: "" };

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
      case "Message":
        this.setState({ Message: event.target.value });
    }
  }

  handleSubmit(event) {
    // alert("A name was submitted: " + this.state.value);

    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div
        style={{
          width: "100%",
          textAlign: "center",
          width: "25%",
        }}
      >
        <h1>Write to us</h1>
        <form
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
              value={this.state.NameValue}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <br></br>
          <label>
            Email:
            <input
              type="text"
              id="Email"
              value={this.state.EmailValue}
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
              value={this.state.MessageValue}
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
