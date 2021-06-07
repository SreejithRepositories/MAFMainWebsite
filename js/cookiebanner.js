import React from "react";
import Cookies from "js-cookie";

export default class CookieBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "",
    };
    this.acceptClicked = this.acceptClicked.bind(this);
    this.rejectClicked = this.rejectClicked.bind(this);
  }
  componentDidMount() {
    if (Cookies.get("mafgdpr", "seen")) {
      this.setState({ display: "none" });
    }
  }
  acceptClicked() {
    Cookies.set("mafgdpr", "seen", { expires: 1 });
    this.setState({ display: "none" });
  }
  rejectClicked() {
    Cookies.set("mafgdpr", "seen");
    this.setState({ display: "none" });
  }
  render() {
    return (
      <div style={{ display: this.state.display }} className="cookieBanner">
        <div>
          This website uses cookies to provide you with more personalized and
          responsive service. By continuing to use this website, you agree to
          our Cookie Policy. Please read our{" "}
          <a href="/termsandconditions" target="_blank">
            cookie policy
          </a>{" "}
          for more information.
        </div>
        <div>
          <button className="cookieBannerAccept" onClick={this.acceptClicked}>
            Accept
          </button>
          <button className="cookieBannerReject" onClick={this.rejectClicked}>
            Reject
          </button>
        </div>
      </div>
    );
  }
}
