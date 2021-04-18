// index.js
import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Banner from "./banner";
import "../css/landing_page.css";
import Test from "./test";
import MainMenuModal from "./main_menu_modal";
import LandingPageContent from "./landingPageContent";

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
        <div>
          <div>
            <Header hamIconClick={this.hamburgerIconClicked} />
          </div>
          <div
            style={{
              display: this.state.displayMenuModal,
              borderRadius: "5px",
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
              <Test />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("main"));

ReactDOM.render(
  <LandingPageContent />,
  document.getElementById("landing_page_content")
);
