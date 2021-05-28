// index.js
import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Banner from "./banner_copy copy";
import "../css/landing_page.css";
// import Test from "./test";
// import MainMenuModal from "./main_menu_modal";
import MainMenuModal from "./main_menu_modal copy";
import LandingPageContent from "./landingPageContent";
import CloudAutomation from "./cloudautomation";
import MarketingAutomation from "./marketingautomation";
import DigitalTransformation from "./digitaltransformation";
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
      deactivateScrollBar: false,
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
      this.setState({ displayMenuModal: null, deactivateScrollBar: true });
      document.querySelector("body").style.overflow = "hidden";
    }
  }

  menuCloseButtonPressed(n) {
    if (n) {
      this.setState({ displayMenuModal: "none", deactivateScrollBar: false });
      document.querySelector("body").style.overflow = "visible";
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
              top: "0",
              width: "99%",
              bottom: "0",

              position: "fixed",
              zIndex: "1",
              height: "100vh",
            }}
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
            <Route exact path="/cloudautomation">
              <CloudAutomation />
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/marketingautomation">
              <MarketingAutomation />
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/digitaltransformation">
              <DigitalTransformation />
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/contactus">
              <ContactUs />
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
