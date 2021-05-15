import React from "react";
import react from "react";
import ReactDOM from "react-dom";

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.counter,
    };
  }

  render() {
    //         var arr = [<img style ={{width: "25px", height: "18px", display: "inline-block", position: "absolute", left: "47%", top: "80%"}} src = {require("../images/carouselDot.png")}></img>,
    //  <img style ={{width: "25px", height: "18px", display: "inline-block", position: "absolute", left: "50%", top: "80%"}} src = {require("../images/carouselDot_red.png")}></img>,
    //  <img style ={{width: "25px", height: "18px", display: "inline-block", position: "absolute", left: "53%",top: "80%"}} src = {require("../images/carouselDot.png")}></img>,
    //  <img style ={{width: "25px", height: "18px", display: "inline-block", position: "absolute", left: "56%",top: "80%"}} src = {require("../images/carouselDot.png")}></img>]

    var carouselDiv = (
      <div style={{ width: "100%" }}>{[...this.props.counter]}</div>
    );

    return carouselDiv;
  }
}
