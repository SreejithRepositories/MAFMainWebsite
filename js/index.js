// index.js
import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Banner from "./banner_copy";
import "../css/landing_page.css";
// import Test from "./test";
import MainMenuModal from "./main_menu_modal";
import LandingPageContent from "./landingPageContent";
import CloudAutomation from "./cloudautomation";
import MarketingAutomation from "./marketingautomation";
import ContactUs from "./contactus";
import NameForm from "./nameform";
import axios from "axios";
import qs from "qs";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMenuModal: "none",
    };
    this.hamburgerIconClicked = this.hamburgerIconClicked.bind(this);
    this.menuCloseButtonPressed = this.menuCloseButtonPressed.bind(this);
    this.testClick = this.testClick.bind(this);
  }

  testClick() {
    const data = { bar: 123 };
    const options = {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: qs.stringify(data),
      url: "/mail",
    };
    axios(options);
    // axios({
    //   method: "post",
    //   url: ,
    //   data: {
    //     firstName: "Finn",
    //     lastName: "Williams",
    //   },
    // }).then(
    //   (response) => {
    //     console.log(response);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
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
          <div style={{ display: this.state.displayMenuModal }}>
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
            <Route exact path="/cloudautomation">
              <div style={{ position: "absolute", top: "15%", zIndex: "-1" }}>
                <CloudAutomation />
              </div>
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/marketingautomation">
              <div style={{ position: "absolute", top: "15%", zIndex: "-1" }}>
                <MarketingAutomation />
              </div>
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/contactus">
              <div style={{ width: "100%" }}>
                <ContactUs />
              </div>
            </Route>
          </Switch>

          <LandingPageContent />
        </div>
        {/* <button
          onClick={this.testClick}
          style={{ position: "absolute", top: "750px" }}
        >
          <Test />
        </button> */}
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("main"));

// ReactDOM.render(
//   <LandingPageContent />,
//   document.getElementById("landing_page_content")
// );
