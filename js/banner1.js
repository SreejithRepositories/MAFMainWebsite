import React from "react";
import react from "react";
import ReactDOM from "react-dom";
import Carousel from "./carousel";
import "../css/landing_page.css";

import "../images/banner2.png";
import "../images/banner3.jpg";
import "../images/banner4.png";
import "../images/banner5.png";
import "../images/digital_transformation.png";
import "../images/businessman_683_600.png";
import "../images/businessman_424_287.png";
import "../images/businessman_250_169.png";

// first banner
import "../images/banner1_683_319.png";
import "../images/banner1_424_198.png";
import "../images/banner1_250_116.png";
import "../images/banner1.png";

// second Banner
import "../images/banner2_683_365.png";
import "../images/banner2_424_226.png";
import "../images/banner2.png";

export default class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      // imgArr: [img1, img2, img3, img4],
      clicked: false,
      imgUrlArr: [
        "../images/banner1.png",
        "../images/banner2.png",
        "../images/banner3.jpg",
        "../images/banner5.png",
      ],
      imgUrlArrMaxWidth800: [
        "../images/banner1_683_319.png",
        "../images/banner2_683_365.png",
        "../images/banner3.jpg",
        "../images/banner5.png",
      ],
      imgUrlArrMaxWidth650: [
        "../images/banner1_424_198.png",
        "../images/banner2_424_226.png",
        "../images/banner3.jpg",
        "../images/banner5.png",
      ],
      timer: "",
    };
    this.timeOutMethod = this.timeOutMethod.bind(this);
    this.click = this.click.bind(this);
    this.leftArrow = this.leftArrow.bind(this);
    this.rightArrow = this.rightArrow.bind(this);
  }
  timeOutMethod() {
    if (this.state.counter == 4) {
      // clearInterval(this.state.timer);
      this.setState({ counter: 1 });

      return;
    }
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  componentDidMount() {
    this.state.timer = setInterval(this.timeOutMethod, 3000);
  }

  click() {
    clearInterval(this.state.timer);
    this.setState({ clicked: true });
  }
  leftArrow() {
    if (this.state.counter == 1) {
      this.setState({ counter: 4 });
    } else {
      this.setState({ counter: this.state.counter - 1 });
    }
  }
  rightArrow() {
    if (this.state.counter == 4) {
      this.setState({ counter: 1 });
    } else {
      this.setState({ counter: this.state.counter + 1 });
    }
  }

  render() {
    var arr = [
      <img
        style={{
          width: "18px",
          height: "15px",
          display: "inline-block",
          // position: "absolute",
          // left: "47%",
          // top: "80%",
        }}
        src={require("../images/carouselDot.png")}
      ></img>,
      <img
        style={{
          width: "18px",
          height: "18px",
          display: "inline-block",
          // position: "absolute",
          // left: "50%",
          // top: "80%",
        }}
        src={require("../images/carouselDot.png")}
      ></img>,
      <img
        style={{
          width: "18px",
          height: "18px",
          display: "inline-block",
          // position: "absolute",
          // left: "53%",
          // top: "80%",
        }}
        src={require("../images/carouselDot.png")}
      ></img>,
      <img
        style={{
          width: "18px",
          height: "18px",
          display: "inline-block",
          // position: "absolute",
          // left: "56%",
          // top: "80%",
        }}
        src={require("../images/carouselDot.png")}
      ></img>,
    ];

    if (this.state.counter == 1) {
      var arr = [
        <img
          style={{
            width: "20px",
            height: "20px",
            display: "inline-block",
            // position: "absolute",
            // left: "47%",
            // top: "80%",
          }}
          src={require("../images/carouselDot_red.png")}
        ></img>,
        <img
          style={{
            width: "20px",
            height: "20px",
            display: "inline-block",
            // position: "absolute",
            // left: "50%",
            // top: "80%",
          }}
          src={require("../images/carouselDot.png")}
        ></img>,
        <img
          style={{
            width: "20px",
            height: "20px",
            display: "inline-block",
            // position: "absolute",
            // left: "53%",
            // top: "80%",
          }}
          src={require("../images/carouselDot.png")}
        ></img>,
        <img
          style={{
            width: "20px",
            height: "20px",
            display: "inline-block",
            // position: "absolute",
            // left: "56%",
            // top: "80%",
          }}
          src={require("../images/carouselDot.png")}
        ></img>,
      ];
    } else if (this.state.counter == 2) {
      var arr = [
        <img
          style={{
            width: "20px",
            height: "20px",
            display: "inline-block",
            // position: "absolute",
            // left: "47%",
            // top: "80%",
          }}
          src={require("../images/carouselDot.png")}
        ></img>,
        <img
          style={{
            width: "20px",
            height: "20px",
            display: "inline-block",
            // position: "absolute",
            // left: "50%",
            // top: "80%",
          }}
          src={require("../images/carouselDot_red.png")}
        ></img>,
        <img
          style={{
            width: "20px",
            height: "20px",
            display: "inline-block",
            // position: "absolute",
            // left: "53%",
            // top: "80%",
          }}
          src={require("../images/carouselDot.png")}
        ></img>,
        <img
          style={{
            width: "20px",
            height: "20px",
            display: "inline-block",
            // position: "absolute",
            // left: "56%",
            // top: "80%",
          }}
          src={require("../images/carouselDot.png")}
        ></img>,
      ];
    } else if (this.state.counter == 3) {
      var arr = [
        <img
          style={{
            width: "20px",
            height: "20px",
            display: "inline-block",
            // position: "absolute",
            // left: "47%",
            // top: "80%",
          }}
          src={require("../images/carouselDot.png")}
        ></img>,
        <img
          style={{
            width: "20px",
            height: "20px",
            display: "inline-block",
            // position: "absolute",
            // left: "50%",
            // top: "80%",
          }}
          src={require("../images/carouselDot.png")}
        ></img>,
        <img
          style={{
            width: "20px",
            height: "20px",
            display: "inline-block",
            // position: "absolute",
            // left: "53%",
            // top: "80%",
          }}
          src={require("../images/carouselDot_red.png")}
        ></img>,
        <img
          style={{
            width: "20px",
            height: "20px",
            display: "inline-block",
            // position: "absolute",
            // left: "56%",
            // top: "80%",
          }}
          src={require("../images/carouselDot.png")}
        ></img>,
      ];
    } else if (this.state.counter == 4) {
      var arr = [
        <img
          style={{
            width: "20px",
            height: "20px",
            display: "inline-block",
            // position: "absolute",
            // left: "47%",
            // top: "80%",
          }}
          src={require("../images/carouselDot.png")}
        ></img>,
        <img
          style={{
            width: "20px",
            height: "20px",
            display: "inline-block",
            // position: "absolute",
            // left: "50%",
            // top: "80%",
          }}
          src={require("../images/carouselDot.png")}
        ></img>,
        <img
          style={{
            width: "20px",
            height: "20px",
            display: "inline-block",
            // position: "absolute",
            // left: "53%",
            // top: "80%",
          }}
          src={require("../images/carouselDot.png")}
        ></img>,
        <img
          style={{
            width: "20px",
            height: "20px",
            display: "inline-block",
            // position: "absolute",
            // left: "56%",
            // top: "80%",
          }}
          src={require("../images/carouselDot_red.png")}
        ></img>,
      ];
    }

    // var disp = this.state.clicked ? "visible" : "hidden";
    // var x = window.matchMedia("(max-width: 848px)");
    // var y = window.matchMedia("(max-width: 650px)");

    if (
      window.matchMedia("screen and (min-width: 450px) and (max-width: 650px)")
        .matches
    ) {
      console.log("848");
      return (
        <React.Fragment>
          <div>
            <img
              onClick={this.click}
              style={{ width: "100%", background: "#75b9c9ff" }}
              src={require(this.state.imgUrlArrMaxWidth800[
                this.state.counter - 1
              ])}
            ></img>
          </div>

          <div className="carouselNChev">
            <Carousel counter={arr} />
            <img
              className="chevron"
              src={require("../images/chevron.png")}
            ></img>
          </div>
          <img
            onClick={this.leftArrow}
            className="leftArrow"
            src={require("../images/arrow_back.png")}
          ></img>
          <img
            className="rightArrow"
            onClick={this.rightArrow}
            src={require("../images/arrow_forward.png")}
          ></img>
        </React.Fragment>
      );
    } else if (
      window.matchMedia("screen and (min-width: 450px) and (max-width: 650px)")
        .matches
    ) {
      console.log("650");
      return (
        <React.Fragment>
          <img
            onClick={this.click}
            style={{ width: "100%", background: "#75b9c9ff" }}
            src={require(this.state.imgUrlArrMaxWidth650[
              this.state.counter - 1
            ])}
          ></img>

          <div className="carouselNChev">
            <Carousel counter={arr} />
            <img
              className="chevron"
              src={require("../images/chevron.png")}
            ></img>
          </div>
          <img
            onClick={this.leftArrow}
            className="leftArrow"
            src={require("../images/arrow_back.png")}
          ></img>
          <img
            onClick={this.rightArrow}
            className="rightArrow"
            onClick={this.rightArrow}
            src={require("../images/arrow_forward.png")}
          ></img>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <img
            onClick={this.click}
            style={{ width: "100%", background: "#75b9c9ff" }}
            src={require(this.state.imgUrlArr[this.state.counter - 1])}
          ></img>

          <div className="carouselNChev">
            <Carousel counter={arr} />
            <img
              className="chevron"
              src={require("../images/chevron.png")}
            ></img>
          </div>
          <img
            onClick={this.leftArrow}
            className="leftArrow"
            src={require("../images/arrow_back.png")}
          ></img>
          <img
            onClick={this.rightArrow}
            className="rightArrow"
            onClick={this.rightArrow}
            src={require("../images/arrow_forward.png")}
          ></img>
        </React.Fragment>
      );
    }
  }
}
// ReactDOM.render(<Banner/>, document.getElementById("banner"))
