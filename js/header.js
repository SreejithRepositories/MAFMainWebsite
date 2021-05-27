import React from "react";
import ReactDOM from "react-dom";
import Hamburger from "./hamburger.js";
import "../css/landing_page.css";

export default class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <img
          className="logo"
          src={require("../images/logo_white_background.png")}
        ></img>
        <Hamburger clicked={this.props.hamIconClick} />
      </React.Fragment>
    );
  }
}

// ReactDOM.render(<Header />, document.getElementById("main"))
