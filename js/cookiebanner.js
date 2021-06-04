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
    Cookies.get("mafgdpr", "seen")
      ? this.setState({ display: "none" })
      : Cookies.set("mafgdpr", "seen");
  }
  acceptClicked() {
    this.setState({ display: "none" });
  }
  rejectClicked() {
    this.setState({ display: "none" });
  }
  render() {
    return (
      <div style={{ display: this.state.display }} className="cookieBanner">
        <div>
          By accepting our cookie policy you consent to using cookies on your
          site for us to provide you personalized experiences. Read our{" "}
          <a href="/termsandconditions" target="_blank">
            cookie policy
          </a>
          .
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
