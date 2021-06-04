import React from "react";

import { Link } from "react-router-dom";

export default class Main_Menu_Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayITServicesSubMenu: "none",
      underLineColorHome: null,
      underLineColorAboutUs: null,
      underLineColorTechWeUse: null,
      underLineColorIndWeServe: null,
      underLineColorAchieve: null,
      underLineColorSuccess: null,
      underLineColorBlog: null,
      underLineColorFAQs: null,
      underLineColorTerms: null,
      underLineColorContact: null,
      underLineColorCloudAutomation: null,
      underLineColorDataAnalytics: null,
      underLineColorDigiTran: null,
      underLineColorMarkTran: null,
    };
    this.ITServices = this.ITServices.bind(this);
    this.closeSubMenu = this.closeSubMenu.bind(this);
    this.putUnderLineColorHome = this.putUnderLineColorHome.bind(this);
    this.unputUnderLineColorHome = this.unputUnderLineColorHome.bind(this);
    this.putUnderLineColorAboutUs = this.putUnderLineColorAboutUs.bind(this);
    this.unputUnderLineColorAboutUs =
      this.unputUnderLineColorAboutUs.bind(this);
    this.putUnderLineColorTechWeUse =
      this.putUnderLineColorTechWeUse.bind(this);
    this.unputUnderLineColorTechWeUse =
      this.unputUnderLineColorTechWeUse.bind(this);
    this.putUnderLineColorIndWeServe =
      this.putUnderLineColorIndWeServe.bind(this);
    this.unputUnderLineColorIndWeServe =
      this.unputUnderLineColorIndWeServe.bind(this);
    this.putUnderLineColorAchieve = this.putUnderLineColorAchieve.bind(this);
    this.unputUnderLineColorAchieve =
      this.unputUnderLineColorAchieve.bind(this);
    this.putUnderLineColorSuccess = this.putUnderLineColorSuccess.bind(this);
    this.unputUnderLineColorSuccess =
      this.unputUnderLineColorSuccess.bind(this);
    this.putUnderLineColorBlog = this.putUnderLineColorBlog.bind(this);
    this.unputUnderLineColorBlog = this.unputUnderLineColorBlog.bind(this);
    this.putUnderLineColorFAQs = this.putUnderLineColorFAQs.bind(this);
    this.unputUnderLineColorFAQs = this.unputUnderLineColorFAQs.bind(this);
    this.putUnderLineColorTerms = this.putUnderLineColorTerms.bind(this);
    this.unputUnderLineColorTerms = this.unputUnderLineColorTerms.bind(this);
    this.putUnderLineColorContact = this.putUnderLineColorContact.bind(this);
    this.unputUnderLineColorContact =
      this.unputUnderLineColorContact.bind(this);

    this.putUnderLineColorCloudAutomation =
      this.putUnderLineColorCloudAutomation.bind(this);
    this.unputUnderLineColorCloudAutomation =
      this.unputUnderLineColorCloudAutomation.bind(this);
    this.putUnderLineColorDataAnalytics =
      this.putUnderLineColorDataAnalytics.bind(this);
    this.unputUnderLineColorDataAnalytics =
      this.unputUnderLineColorDataAnalytics.bind(this);
    this.putUnderLineColorDigiTran = this.putUnderLineColorDigiTran.bind(this);
    this.unputUnderLineColorDigiTran =
      this.unputUnderLineColorDigiTran.bind(this);
    this.putUnderLineColorMarkTran = this.putUnderLineColorMarkTran.bind(this);
    this.unputUnderLineColorMarkTran =
      this.unputUnderLineColorMarkTran.bind(this);

    this.closeMainMenu = this.closeMainMenu.bind(this);
  }
  putUnderLineColorHome() {
    this.setState({
      underLineColorHome: {
        cursor: "pointer",
        borderBottom: "3px dashed blue",
      },
    });
  }
  unputUnderLineColorHome() {
    this.setState({ underLineColorHome: null });
  }

  putUnderLineColorAboutUs() {
    this.setState({
      underLineColorAboutUs: {
        cursor: "pointer",
        borderBottom: "3px dashed blue",
      },
    });
  }

  unputUnderLineColorAboutUs() {
    this.setState({ underLineColorAboutUs: null });
  }

  putUnderLineColorTechWeUse() {
    this.setState({
      underLineColorTechWeUse: {
        cursor: "pointer",
        borderBottom: "3px dashed blue",
      },
    });
  }
  unputUnderLineColorTechWeUse() {
    this.setState({ underLineColorTechWeUse: null });
  }

  putUnderLineColorIndWeServe() {
    this.setState({
      underLineColorIndWeServe: {
        cursor: "pointer",
        borderBottom: "3px dashed blue",
      },
    });
  }
  unputUnderLineColorIndWeServe() {
    this.setState({ underLineColorIndWeServe: null });
  }

  putUnderLineColorAchieve() {
    this.setState({
      underLineColorAchieve: {
        cursor: "pointer",
        borderBottom: "3px dashed blue",
      },
    });
  }
  unputUnderLineColorAchieve() {
    this.setState({ underLineColorAchieve: null });
  }

  putUnderLineColorSuccess() {
    this.setState({
      underLineColorSuccess: {
        cursor: "pointer",
        borderBottom: "3px dashed blue",
      },
    });
  }
  unputUnderLineColorSuccess() {
    this.setState({ underLineColorSuccess: null });
  }

  putUnderLineColorBlog() {
    this.setState({
      underLineColorBlog: {
        cursor: "pointer",
        borderBottom: "3px dashed blue",
      },
    });
  }
  unputUnderLineColorBlog() {
    this.setState({ underLineColorBlog: null });
  }

  putUnderLineColorFAQs() {
    this.setState({
      underLineColorFAQs: {
        cursor: "pointer",
        borderBottom: "3px dashed blue",
      },
    });
  }
  unputUnderLineColorFAQs() {
    this.setState({ underLineColorFAQs: null });
  }

  putUnderLineColorTerms() {
    this.setState({
      underLineColorTerms: {
        cursor: "pointer",
        borderBottom: "3px dashed blue",
      },
    });
  }
  unputUnderLineColorTerms() {
    this.setState({ underLineColorTerms: null });
  }

  putUnderLineColorContact() {
    this.setState({
      underLineColorContact: {
        cursor: "pointer",
        borderBottom: "3px dashed blue",
      },
    });
  }
  unputUnderLineColorContact() {
    this.setState({ underLineColorContact: null });
  }

  ITServices() {
    console.log(this.state.displayITServicesSubMenu);
    this.setState({ displayITServicesSubMenu: "" });
  }

  putUnderLineColorCloudAutomation() {
    this.setState({
      underLineColorCloudAutomation: {
        cursor: "pointer",
        borderBottom: "3px dashed blue",
      },
    });
  }

  unputUnderLineColorCloudAutomation() {
    this.setState({ underLineColorCloudAutomation: null });
  }

  putUnderLineColorDataAnalytics() {
    this.setState({
      underLineColorDataAnalytics: {
        cursor: "pointer",
        borderBottom: "3px dashed blue",
      },
    });
  }

  unputUnderLineColorDataAnalytics() {
    this.setState({ underLineColorDataAnalytics: null });
  }

  putUnderLineColorDigiTran() {
    this.setState({
      underLineColorDigiTran: {
        cursor: "pointer",
        borderBottom: "3px dashed blue",
      },
    });
  }

  unputUnderLineColorDigiTran() {
    this.setState({ underLineColorDigiTran: null });
  }

  putUnderLineColorMarkTran() {
    this.setState({
      underLineColorMarkTran: {
        cursor: "pointer",
        borderBottom: "3px dashed blue",
      },
    });
  }

  unputUnderLineColorMarkTran() {
    this.setState({ underLineColorMarkTran: null });
  }

  closeSubMenu() {
    this.setState({ displayITServicesSubMenu: "none" });
    console.log("close SubMenu called");
    console.log(this.state.displayITServicesSubMenu);
  }
  closeMainMenu() {
    this.props.closeButtonPressed("true");
    this.setState({ displayITServicesSubMenu: "none" });
  }
  render() {
    return (
      <div
        style={{
          border: "1px solid grey",
          borderRadius: "5px",
          width: "100%",
          height: "100%",
          position: "relative",
          backgroundColor: "white",
        }}
        className="MainMenuModal"
      >
        <img
          onClick={this.closeMainMenu}
          style={{
            cursor: "pointer",
            position: "absolute",
            right: "10px",
            width: "25px",
            height: "25px",
          }}
          src={require("../images/close.png")}
        ></img>
        <img
          onClick={this.closeMainMenu}
          style={{
            position: "absolute",
            left: "10px",
          }}
          src={require("../images/logo_white_background.png")}
        ></img>
        <table
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            width: "90%",
            height: "80%",
            position: "absolute",
            top: "10%",
            left: "2%",
          }}
        >
          <tr>
            <td
              onClick={() => {
                window.location.pathname = "/";
              }}
              onMouseOver={this.putUnderLineColorHome}
              onMouseOut={this.unputUnderLineColorHome}
              style={this.state.underLineColorHome}
            >
              Home
            </td>
          </tr>
          <tr>
            <td
              onClick={() => (window.location.pathname = "/aboutus")}
              onMouseOver={this.putUnderLineColorAboutUs}
              onMouseOut={this.unputUnderLineColorAboutUs}
              style={this.state.underLineColorAboutUs}
            >
              About Us
            </td>
          </tr>
          <tr>
            <td className="ITServices" onClick={this.ITServices}>
              Services
            </td>
            <td></td>
          </tr>
          <tr style={{ display: this.state.displayITServicesSubMenu }}>
            <td style={{ borderTop: "3px dashed blue" }}></td>
            <td style={{ borderTop: "3px dashed blue" }}></td>
            <td style={{ borderTop: "3px dashed blue" }}></td>
            <td style={{ borderTop: "3px dashed blue" }}></td>
            <td style={{ borderTop: "3px dashed blue" }}></td>
            <td
              style={{ borderTop: "3px dashed blue" }}
              className="closeSubMenu"
              onClick={this.closeSubMenu}
            >
              x
            </td>
          </tr>
          <tr style={{ display: this.state.displayITServicesSubMenu }}>
            <td></td>
            <td></td>
          </tr>
          <tr style={{ display: this.state.displayITServicesSubMenu }}>
            <td></td>
            <td></td>
          </tr>
          <tr style={{ display: this.state.displayITServicesSubMenu }}>
            <td></td>
            <td></td>
          </tr>
          <tr style={{ display: this.state.displayITServicesSubMenu }}>
            <td></td>
            <td
              onClick={() => (window.location.pathname = "/cloudautomation")}
              onMouseOver={this.putUnderLineColorCloudAutomation}
              onMouseOut={this.unputUnderLineColorCloudAutomation}
              style={this.state.underLineColorCloudAutomation}
            >
              Cloud
            </td>
          </tr>
          <tr style={{ display: this.state.displayITServicesSubMenu }}>
            <td></td>
            <td
              onClick={() => (window.location.pathname = "/analytics")}
              onMouseOver={this.putUnderLineColorDataAnalytics}
              onMouseOut={this.unputUnderLineColorDataAnalytics}
              style={this.state.underLineColorDataAnalytics}
            >
              Analytics
            </td>
          </tr>
          <tr style={{ display: this.state.displayITServicesSubMenu }}>
            <td></td>
            <td
              onClick={() =>
                (window.location.pathname = "/digitaltransformation")
              }
              onMouseOver={this.putUnderLineColorDigiTran}
              onMouseOut={this.unputUnderLineColorDigiTran}
              style={this.state.underLineColorDigiTran}
            >
              Digital Transformation
            </td>
          </tr>
          <tr style={{ display: this.state.displayITServicesSubMenu }}>
            <td></td>
            <td
              onClick={() =>
                (window.location.pathname = "/marketingautomation")
              }
              onMouseOver={this.putUnderLineColorMarkTran}
              onMouseOut={this.unputUnderLineColorMarkTran}
              style={this.state.underLineColorMarkTran}
            >
              Marketing Automation
            </td>
          </tr>

          {/* <tr>
            <td
              onMouseOver={this.putUnderLineColorTechWeUse}
              onMouseOut={this.unputUnderLineColorTechWeUse}
              style={this.state.underLineColorTechWeUse}
            >
              Technologies We Use
            </td>
          </tr> */}
          <tr>
            <td
              onClick={() => (window.location.pathname = "/industriesweserve")}
              onMouseOver={this.putUnderLineColorIndWeServe}
              onMouseOut={this.unputUnderLineColorIndWeServe}
              style={this.state.underLineColorIndWeServe}
            >
              Industries We Serve
            </td>
          </tr>
          {/* <tr>
            <td
              onMouseOver={this.putUnderLineColorAchieve}
              onMouseOut={this.unputUnderLineColorAchieve}
              style={this.state.underLineColorAchieve}
            >
              What we can help you achieve?
            </td>
          </tr> */}
          <tr>
            <td
              onMouseOver={this.putUnderLineColorSuccess}
              onMouseOut={this.unputUnderLineColorSuccess}
              style={this.state.underLineColorSuccess}
            >
              Customer Success Stories
            </td>
          </tr>
          <tr>
            <td
              onMouseOver={this.putUnderLineColorBlog}
              onMouseOut={this.unputUnderLineColorBlog}
              style={this.state.underLineColorBlog}
            >
              Blog
            </td>
          </tr>
          {/* <tr>
            <td
              onMouseOver={this.putUnderLineColorFAQs}
              onMouseOut={this.unputUnderLineColorFAQs}
              style={this.state.underLineColorFAQs}
            >
              FAQs
            </td>
          </tr> */}
          <tr>
            <td
              onClick={() => (window.location.pathname = "/termsandconditions")}
              onMouseOver={this.putUnderLineColorTerms}
              onMouseOut={this.unputUnderLineColorTerms}
              style={this.state.underLineColorTerms}
            >
              Terms and Conditions
            </td>
          </tr>
          <tr>
            <td
              onClick={() => (window.location.pathname = "/contactus")}
              onMouseOver={this.putUnderLineColorContact}
              onMouseOut={this.unputUnderLineColorContact}
              style={this.state.underLineColorContact}
            >
              Contact Us
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
