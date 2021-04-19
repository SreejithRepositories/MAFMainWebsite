import React from "react";
import react from "react";
import ReactDOM from "react-dom";

class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.clicked = this.clicked.bind(this);
  }
  clicked() {
    this.props.clicked("true");
  }

  render() {
    return (
      <React.Fragment>
        <img
          style={{ marginRight: "15px" }}
          onClick={this.clicked}
          className="hamburgerIcon"
          src={require("../images/hamburgerIcon.png")}
        ></img>
      </React.Fragment>
    );
  }
}
export default Hamburger;
