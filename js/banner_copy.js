import React from "react";
import react from "react";
import ReactDOM from "react-dom";

//import react-media
import Media from "react-media";

// import Carousel from "./carousel";
import Carousel from "./carousel copy";

import "../css/landing_page.css";

//importing original banner images
import "../images/banner1.png";
import "../images/banner2.png";
import "../images/banner3.png";
import "../images/banner4.png";
import "../images/banner5.png";

//importing responsive banner images
import "../images/banner1_683_319.png";
import "../images/banner1_424_198.png";
import "../images/banner1_250_116.png";

import "../images/banner2_250_133.png";
import "../images/banner2_424_226.png";
import "../images/banner2_683_365.png";

import "../images/banner3_424_282.jpg";
import "../images/banner3_683_455.jpg";
import "../images/banner3_250_166.jpg";

import "../images/banner5_683_408.png";
import "../images/banner5_424_253.png";
import "../images/banner5_250_149.png";

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
        "../images/banner3.png",
        "../images/banner5.png",
      ],
      carouselDotArr: [
        <img
          style={{
            width: "18px",
            height: "15px",
            display: "inline-block",
          }}
          src={require("../images/carouselDot.png")}
        ></img>,
        <img
          style={{
            width: "18px",
            height: "18px",
            display: "inline-block",
          }}
          src={require("../images/carouselDot.png")}
        ></img>,
        <img
          style={{
            width: "18px",
            height: "18px",
            display: "inline-block",
          }}
          src={require("../images/carouselDot.png")}
        ></img>,
        <img
          style={{
            width: "18px",
            height: "18px",
            display: "inline-block",
          }}
          src={require("../images/carouselDot.png")}
        ></img>,
      ],
      timer: "",
      imgUrlArrMaxWidth800: [
        "../images/banner1_683_319.png",
        "../images/banner2_683_365.png",
        "../images/banner3_683_455.jpg",
        "../images/banner5_683_408.png",
      ],
      imgUrlArrMaxWidth650: [
        "../images/banner1_424_198.png",
        "../images/banner2_424_226.png",
        "../images/banner3_424_282.jpg",
        "../images/banner5_424_253.png",
      ],
      imgUrlArrMaxWidth450: [
        "../images/banner1_250_116.png",
        "../images/banner2_250_133.png",
        "../images/banner3_250_166.jpg",
        "../images/banner5_250_149.png",
      ],
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
    // var arr = [
    //   <img
    //     style={{
    //       width: "18px",
    //       height: "15px",
    //       display: "inline-block",
    //       position: "absolute",
    //       left: "47%",
    //       top: "80%",
    //     }}
    //     src={require("../images/carouselDot.png")}
    //   ></img>,
    //   <img
    //     style={{
    //       width: "18px",
    //       height: "18px",
    //       display: "inline-block",
    //       position: "absolute",
    //       left: "50%",
    //       top: "80%",
    //     }}
    //     src={require("../images/carouselDot.png")}
    //   ></img>,
    //   <img
    //     style={{
    //       width: "18px",
    //       height: "18px",
    //       display: "inline-block",
    //       position: "absolute",
    //       left: "53%",
    //       top: "80%",
    //     }}
    //     src={require("../images/carouselDot.png")}
    //   ></img>,
    //   <img
    //     style={{
    //       width: "18px",
    //       height: "18px",
    //       display: "inline-block",
    //       position: "absolute",
    //       left: "56%",
    //       top: "80%",
    //     }}
    //     src={require("../images/carouselDot.png")}
    //   ></img>,
    // ];

    // if (this.state.counter == 1) {
    //   var arr = [
    //     <img
    //       style={{
    //         width: "20px",
    //         height: "20px",
    //         display: "inline-block",
    //         position: "absolute",
    //         left: "47%",
    //         top: "80%",
    //       }}
    //       src={require("../images/carouselDot_red.png")}
    //     ></img>,
    //     <img
    //       style={{
    //         width: "20px",
    //         height: "20px",
    //         display: "inline-block",
    //         position: "absolute",
    //         left: "50%",
    //         top: "80%",
    //       }}
    //       src={require("../images/carouselDot.png")}
    //     ></img>,
    //     <img
    //       style={{
    //         width: "20px",
    //         height: "20px",
    //         display: "inline-block",
    //         position: "absolute",
    //         left: "53%",
    //         top: "80%",
    //       }}
    //       src={require("../images/carouselDot.png")}
    //     ></img>,
    //     <img
    //       style={{
    //         width: "20px",
    //         height: "20px",
    //         display: "inline-block",
    //         position: "absolute",
    //         left: "56%",
    //         top: "80%",
    //       }}
    //       src={require("../images/carouselDot.png")}
    //     ></img>,
    //   ];
    // } else if (this.state.counter == 2) {
    //   var arr = [
    //     <img
    //       style={{
    //         width: "20px",
    //         height: "20px",
    //         display: "inline-block",
    //         position: "absolute",
    //         left: "47%",
    //         top: "80%",
    //       }}
    //       src={require("../images/carouselDot.png")}
    //     ></img>,
    //     <img
    //       style={{
    //         width: "20px",
    //         height: "20px",
    //         display: "inline-block",
    //         position: "absolute",
    //         left: "50%",
    //         top: "80%",
    //       }}
    //       src={require("../images/carouselDot_red.png")}
    //     ></img>,
    //     <img
    //       style={{
    //         width: "20px",
    //         height: "20px",
    //         display: "inline-block",
    //         position: "absolute",
    //         left: "53%",
    //         top: "80%",
    //       }}
    //       src={require("../images/carouselDot.png")}
    //     ></img>,
    //     <img
    //       style={{
    //         width: "20px",
    //         height: "20px",
    //         display: "inline-block",
    //         position: "absolute",
    //         left: "56%",
    //         top: "80%",
    //       }}
    //       src={require("../images/carouselDot.png")}
    //     ></img>,
    //   ];
    // } else if (this.state.counter == 3) {
    //   var arr = [
    //     <img
    //       style={{
    //         width: "20px",
    //         height: "20px",
    //         display: "inline-block",
    //         position: "absolute",
    //         left: "47%",
    //         top: "80%",
    //       }}
    //       src={require("../images/carouselDot.png")}
    //     ></img>,
    //     <img
    //       style={{
    //         width: "20px",
    //         height: "20px",
    //         display: "inline-block",
    //         position: "absolute",
    //         left: "50%",
    //         top: "80%",
    //       }}
    //       src={require("../images/carouselDot.png")}
    //     ></img>,
    //     <img
    //       style={{
    //         width: "20px",
    //         height: "20px",
    //         display: "inline-block",
    //         position: "absolute",
    //         left: "53%",
    //         top: "80%",
    //       }}
    //       src={require("../images/carouselDot_red.png")}
    //     ></img>,
    //     <img
    //       style={{
    //         width: "20px",
    //         height: "20px",
    //         display: "inline-block",
    //         position: "absolute",
    //         left: "56%",
    //         top: "80%",
    //       }}
    //       src={require("../images/carouselDot.png")}
    //     ></img>,
    //   ];
    // } else if (this.state.counter == 4) {
    //   var arr = [
    //     <img
    //       style={{
    //         width: "20px",
    //         height: "20px",
    //         display: "inline-block",
    //         position: "absolute",
    //         left: "47%",
    //         top: "80%",
    //       }}
    //       src={require("../images/carouselDot.png")}
    //     ></img>,
    //     <img
    //       style={{
    //         width: "20px",
    //         height: "20px",
    //         display: "inline-block",
    //         position: "absolute",
    //         left: "50%",
    //         top: "80%",
    //       }}
    //       src={require("../images/carouselDot.png")}
    //     ></img>,
    //     <img
    //       style={{
    //         width: "20px",
    //         height: "20px",
    //         display: "inline-block",
    //         position: "absolute",
    //         left: "53%",
    //         top: "80%",
    //       }}
    //       src={require("../images/carouselDot.png")}
    //     ></img>,
    //     <img
    //       style={{
    //         width: "20px",
    //         height: "20px",
    //         display: "inline-block",
    //         position: "absolute",
    //         left: "56%",
    //         top: "80%",
    //       }}
    //       src={require("../images/carouselDot_red.png")}
    //     ></img>,
    //   ];
    // }

    if (this.state.counter == 1) {
      var arr = [
        <img
          style={{
            width: "20px",
            height: "20px",
            display: "inline-block",
          }}
          src={require("../images/carouselDot_red.png")}
        ></img>,
        <img
          style={{
            width: "20px",
            height: "20px",
            display: "inline-block",
          }}
          src={require("../images/carouselDot.png")}
        ></img>,
        <img
          style={{
            width: "20px",
            height: "20px",
            display: "inline-block",
          }}
          src={require("../images/carouselDot.png")}
        ></img>,
        <img
          style={{
            width: "20px",
            height: "20px",
            display: "inline-block",
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
            position: "absolute",
            left: "47%",
            top: "80%",
          }}
          src={require("../images/carouselDot.png")}
        ></img>,
        <img
          style={{
            width: "20px",
            height: "20px",
            display: "inline-block",
            position: "absolute",
            left: "50%",
            top: "80%",
          }}
          src={require("../images/carouselDot_red.png")}
        ></img>,
        <img
          style={{
            width: "20px",
            height: "20px",
            display: "inline-block",
            position: "absolute",
            left: "53%",
            top: "80%",
          }}
          src={require("../images/carouselDot.png")}
        ></img>,
        <img
          style={{
            width: "20px",
            height: "20px",
            display: "inline-block",
            position: "absolute",
            left: "56%",
            top: "80%",
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
            position: "absolute",
            left: "47%",
            top: "80%",
          }}
          src={require("../images/carouselDot.png")}
        ></img>,
        <img
          style={{
            width: "20px",
            height: "20px",
            display: "inline-block",
            position: "absolute",
            left: "50%",
            top: "80%",
          }}
          src={require("../images/carouselDot.png")}
        ></img>,
        <img
          style={{
            width: "20px",
            height: "20px",
            display: "inline-block",
            position: "absolute",
            left: "53%",
            top: "80%",
          }}
          src={require("../images/carouselDot_red.png")}
        ></img>,
        <img
          style={{
            width: "20px",
            height: "20px",
            display: "inline-block",
            position: "absolute",
            left: "56%",
            top: "80%",
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
            position: "absolute",
            left: "47%",
            top: "80%",
          }}
          src={require("../images/carouselDot.png")}
        ></img>,
        <img
          style={{
            width: "20px",
            height: "20px",
            display: "inline-block",
            position: "absolute",
            left: "50%",
            top: "80%",
          }}
          src={require("../images/carouselDot.png")}
        ></img>,
        <img
          style={{
            width: "20px",
            height: "20px",
            display: "inline-block",
            position: "absolute",
            left: "53%",
            top: "80%",
          }}
          src={require("../images/carouselDot.png")}
        ></img>,
        <img
          style={{
            width: "20px",
            height: "20px",
            display: "inline-block",
            position: "absolute",
            left: "56%",
            top: "80%",
          }}
          src={require("../images/carouselDot_red.png")}
        ></img>,
      ];
    }

    var disp = this.state.clicked ? "visible" : "hidden";
    return (
      <div>
        <Media
          queries={{
            small: "(max-width: 450px)",
            medium: "(min-width: 450px) and (max-width: 600px)",
            semimedium: "(min-width: 600px) and (max-width: 900px)",
            large: "(min-width: 900px)",
          }}
        >
          {(matches) => (
            <React.Fragment>
              {matches.small && (
                <div>
                  <img
                    onClick={this.click}
                    style={{ width: "100%" }}
                    src={require(this.state.imgUrlArrMaxWidth450[
                      this.state.counter - 1
                    ])}
                  ></img>
                  <Carousel counter={arr} />
                  <img
                    onClick={this.leftArrow}
                    className="leftArrow"
                    style={{
                      visibility: disp,
                      position: "absolute",
                      left: "5px",
                      top: "45%",
                      height: "35px",
                      backgroundColor: "white",
                    }}
                    src={require("../images/arrow_back.png")}
                  ></img>
                  <img
                    onClick={this.rightArrow}
                    className="rightArrow"
                    onClick={this.rightArrow}
                    style={{
                      visibility: disp,
                      position: "absolute",
                      right: "20px",
                      top: "45%",
                      height: "50px",
                      backgroundColor: "white",
                      height: "35px",
                    }}
                    src={require("../images/arrow_forward.png")}
                  ></img>
                  <img
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "87%",
                      height: "50px",
                    }}
                    src={require("../images/chevron.png")}
                  ></img>
                </div>
              )}
              {matches.medium && (
                <div>
                  <img
                    onClick={this.click}
                    style={{ width: "100%" }}
                    src={require(this.state.imgUrlArrMaxWidth650[
                      this.state.counter - 1
                    ])}
                  ></img>
                  <Carousel counter={arr} />
                  <img
                    onClick={this.leftArrow}
                    className="leftArrow"
                    style={{
                      visibility: disp,
                      position: "absolute",
                      left: "5px",
                      top: "45%",
                      height: "35px",
                      backgroundColor: "white",
                    }}
                    src={require("../images/arrow_back.png")}
                  ></img>
                  <img
                    onClick={this.rightArrow}
                    className="rightArrow"
                    onClick={this.rightArrow}
                    style={{
                      visibility: disp,
                      position: "absolute",
                      right: "20px",
                      top: "45%",
                      height: "50px",
                      backgroundColor: "white",
                      height: "35px",
                    }}
                    src={require("../images/arrow_forward.png")}
                  ></img>
                  <img
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "87%",
                      height: "50px",
                    }}
                    src={require("../images/chevron.png")}
                  ></img>
                </div>
              )}
              {matches.semimedium && (
                <div>
                  <img
                    onClick={this.click}
                    style={{ width: "100%" }}
                    src={require(this.state.imgUrlArrMaxWidth800[
                      this.state.counter - 1
                    ])}
                  ></img>
                  <div style={{ border: "1px solid red", width: "15%" }}>
                    <Carousel counter={arr} />
                  </div>
                  <img
                    onClick={this.leftArrow}
                    className="leftArrow"
                    style={{
                      visibility: disp,
                      position: "absolute",
                      left: "5px",
                      top: "45%",
                      height: "35px",
                      backgroundColor: "white",
                    }}
                    src={require("../images/arrow_back.png")}
                  ></img>
                  <img
                    onClick={this.rightArrow}
                    className="rightArrow"
                    onClick={this.rightArrow}
                    style={{
                      visibility: disp,
                      position: "absolute",
                      right: "20px",
                      top: "45%",
                      height: "50px",
                      backgroundColor: "white",
                      height: "35px",
                    }}
                    src={require("../images/arrow_forward.png")}
                  ></img>
                  <img
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "75%",
                      height: "50px",
                    }}
                    src={require("../images/chevron.png")}
                  ></img>
                </div>
              )}
              {matches.large && (
                <div>
                  <img
                    onClick={this.click}
                    style={{ width: "100%" }}
                    src={require(this.state.imgUrlArr[this.state.counter - 1])}
                  ></img>
                  <Carousel counter={arr} />
                  <img
                    onClick={this.leftArrow}
                    className="leftArrow"
                    style={{
                      visibility: disp,
                      position: "absolute",
                      left: "5px",
                      top: "45%",
                      height: "35px",
                      backgroundColor: "white",
                    }}
                    src={require("../images/arrow_back.png")}
                  ></img>
                  <img
                    onClick={this.rightArrow}
                    className="rightArrow"
                    onClick={this.rightArrow}
                    style={{
                      visibility: disp,
                      position: "absolute",
                      right: "20px",
                      top: "45%",
                      height: "50px",
                      backgroundColor: "white",
                      height: "35px",
                    }}
                    src={require("../images/arrow_forward.png")}
                  ></img>
                  <img
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "87%",
                      height: "50px",
                    }}
                    src={require("../images/chevron.png")}
                  ></img>
                </div>
              )}
            </React.Fragment>
          )}
        </Media>
      </div>
    );
  }
}
// ReactDOM.render(<Banner/>, document.getElementById("banner"))
