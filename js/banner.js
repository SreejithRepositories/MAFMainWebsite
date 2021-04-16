import React from 'react'
import react from 'react'
import ReactDOM from 'react-dom'
import Carousel from './carousel'
import '../css/landing_page.css'
import img1 from '../images/banner1.png'
import img2 from '../images/banner2.png'
import img3 from '../images/banner3.png'
import img4 from '../images/banner4.png'

const mouseOver = {
  cursor: "pointer"
}

class Banner extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            counter: 1,
            imgArr: [img1, img2, img3, img4],
            clicked: false,
            imgUrlArr: ['../images/banner1.png','../images/banner2.png','../images/banner3.png','../images/banner4.png'],
          timer: ''
        }
  this.timeOutMethod = this.timeOutMethod.bind(this)    
  this.click = this.click.bind(this)
  this.leftArrow = this.leftArrow.bind(this)
  this.rightArrow = this.rightArrow.bind(this)
    }
    timeOutMethod(){
      if(this.state.counter == 4){
        // clearInterval(this.state.timer);
        this.setState({counter: 1})
        
        return;
      }
        this.setState({
            counter: this.state.counter + 1
        })
    }
  componentDidMount(){
    this.state.timer = setInterval(this.timeOutMethod, 3000)
  }

    click(){
      clearInterval(this.state.timer);
      this.setState({clicked: true})
    }
    leftArrow(){
      if(this.state.counter == 1){
        this.setState({counter: 4})
      }
      else{
        this.setState({counter: this.state.counter - 1})
      }
    }
    rightArrow(){
      if(this.state.counter == 4){
        this.setState({counter: 1})
      }
      else{
        this.setState({counter: this.state.counter + 1})
      }
    }
 
    render(){
        
      var arr = [<img style ={{width: "18px", height: "15px", display: "inline-block", position: "absolute", left: "47%", top: "80%"}} src = {require("../images/carouselDot.png")}></img>,
      <img style ={{width: "18px", height: "18px", display: "inline-block", position: "absolute", left: "50%", top: "80%"}} src = {require("../images/carouselDot.png")}></img>,
      <img style ={{width: "18px", height: "18px", display: "inline-block", position: "absolute", left: "53%",top: "80%"}} src = {require("../images/carouselDot.png")}></img>,
      <img style ={{width: "18px", height: "18px", display: "inline-block", position: "absolute", left: "56%",top: "80%"}} src = {require("../images/carouselDot.png")}></img>]
      
      if(this.state.counter == 1){
        var arr = [<img style ={{width: "20px", height: "20px", display: "inline-block", position: "absolute", left: "47%", top: "80%"}} src = {require("../images/carouselDot_red.png")}></img>,
      <img style ={{width: "20px", height: "20px", display: "inline-block", position: "absolute", left: "50%", top: "80%"}} src = {require("../images/carouselDot.png")}></img>,
      <img style ={{width: "20px", height: "20px", display: "inline-block", position: "absolute", left: "53%",top: "80%"}} src = {require("../images/carouselDot.png")}></img>,
      <img style ={{width: "20px", height: "20px", display: "inline-block", position: "absolute", left: "56%",top: "80%"}} src = {require("../images/carouselDot.png")}></img>]
      }
      else if(this.state.counter == 2){
        var arr = [<img style ={{width: "20px", height: "20px", display: "inline-block", position: "absolute", left: "47%", top: "80%"}} src = {require("../images/carouselDot.png")}></img>,
      <img style ={{width: "20px", height: "20px", display: "inline-block", position: "absolute", left: "50%", top: "80%"}} src = {require("../images/carouselDot_red.png")}></img>,
      <img style ={{width: "20px", height: "20px", display: "inline-block", position: "absolute", left: "53%",top: "80%"}} src = {require("../images/carouselDot.png")}></img>,
      <img style ={{width: "20px", height: "20px", display: "inline-block", position: "absolute", left: "56%",top: "80%"}} src = {require("../images/carouselDot.png")}></img>]
      }
      else if(this.state.counter == 3){
        var arr = [<img style ={{width: "20px", height: "20px", display: "inline-block", position: "absolute", left: "47%", top: "80%"}} src = {require("../images/carouselDot.png")}></img>,
        <img style ={{width: "20px", height: "20px", display: "inline-block", position: "absolute", left: "50%", top: "80%"}} src = {require("../images/carouselDot.png")}></img>,
        <img style ={{width: "20px", height: "20px", display: "inline-block", position: "absolute", left: "53%",top: "80%"}} src = {require("../images/carouselDot_red.png")}></img>,
        <img style ={{width: "20px", height: "20px", display: "inline-block", position: "absolute", left: "56%",top: "80%"}} src = {require("../images/carouselDot.png")}></img>]
      }
      else if(this.state.counter == 4){
        var arr = [<img style ={{width: "20px", height: "20px", display: "inline-block", position: "absolute", left: "47%", top: "80%"}} src = {require("../images/carouselDot.png")}></img>,
      <img style ={{width: "20px", height: "20px", display: "inline-block", position: "absolute", left: "50%", top: "80%"}} src = {require("../images/carouselDot.png")}></img>,
      <img style ={{width: "20px", height: "20px", display: "inline-block", position: "absolute", left: "53%",top: "80%"}} src = {require("../images/carouselDot.png")}></img>,
      <img style ={{width: "20px", height: "20px", display: "inline-block", position: "absolute", left: "56%",top: "80%"}} src = {require("../images/carouselDot_red.png")}></img>]
      }

      var disp = this.state.clicked? "visible": "hidden"

        return(
          <div>
            <img onClick = {this.click} style={{width:"100%", height:"638px"}} src = {require(this.state.imgUrlArr[this.state.counter - 1])}></img>
            <Carousel counter = {arr}/>
            <img onClick = {this.leftArrow} className = "leftArrow" style = {{visibility: disp, position: "absolute", left: "5px", top: "45%", height: "50px"}} src = {require("../images/arrow_back.png")}></img>
            <img onClick = {this.rightArrow} className = "rightArrow" onClick = {this.rightArrow} style = {{visibility: disp, position: "absolute", right: "20px", top: "45%", height: "50px"}} src = {require("../images/arrow_forward.png")}></img>
            <img style = {{position: "absolute", left: "50%", top: "87%", height: "50px"}} src = {require("../images/chevron.png")}></img>
   
          </div>
        )
    }

}
ReactDOM.render(<Banner/>, document.getElementById("banner"))