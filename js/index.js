// index.js
import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Banner from "./banner";
import "../css/landing_page.css";
import Test from "./test";
import MainMenuModal from "./main_menu_modal";
import LandingPageContent from "./landingPageContent";
import CloudAutomation from "./cloudautomation";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMenuModal: "none",
    };
    this.hamburgerIconClicked = this.hamburgerIconClicked.bind(this);
    this.menuCloseButtonPressed = this.menuCloseButtonPressed.bind(this);
  }
  hamburgerIconClicked(n) {
    if (n) {
      this.setState({ displayMenuModal: null });
    }
  }

  menuCloseButtonPressed(n) {
    if (n) {
      this.setState({ displayMenuModal: "none" });
    }
  }

  render() {
    var b = document.getElementById("bannerImage");
    // console.log(b.getAttribute(src))
    return (
      <Router>
        <div
          className="mainDivInIndexJS"
          style={{ width: "100%", margin: "0px" }}
        >
          <div style={{ width: "100%" }}>
            <Header hamIconClick={this.hamburgerIconClicked} />
          </div>
          <div
            style={{
              display: this.state.displayMenuModal,
              borderRadius: "5px",
              position: "absolute",
              top: "5%",
            }}
            className="MainMenuModal"
          >
            <MainMenuModal closeButtonPressed={this.menuCloseButtonPressed} />
          </div>
          <Switch>
            <Route exact path="/">
              <div className="banner">
                <Banner />
              </div>
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/test">
              <div style={{ position: "absolute", top: "15%" }}>
                <Test />
              </div>
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/cloudautomation">
              <div style={{ position: "absolute", top: "15%", zIndex: "-1" }}>
                <CloudAutomation />
              </div>
            </Route>
          </Switch>

          <LandingPageContent />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("main"));

// ReactDOM.render(
//   <LandingPageContent />,
//   document.getElementById("landing_page_content")
// );
