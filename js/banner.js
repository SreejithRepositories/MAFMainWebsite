import React from 'react'
import react from 'react'
import ReactDOM from 'react-dom'
import Carousel from './carousel'
import '../css/landing_page.css'
import img1 from '../images/banner1.png'
import img2 from '../images/banner2.png'
import img3 from '../images/banner3.png'
import img4 from '../images/banner4.png'


class Banner extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            counter: 1,
            imgArr: [img1, img2, img3, img4],
            imgUrlArr: ['../images/banner1.png','../images/banner2.png','../images/banner3.png','../images/banner4.png'],
          timer: ''
        }
  this.timeOutMethod = this.timeOutMethod.bind(this)    
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
 
    render(){
        
      var arr = [<img style ={{width: "25px", height: "25px", display: "inline-block", position: "absolute", left: "47%", top: "80%"}} src = {require("../images/carouselDot.png")}></img>,
      <img style ={{width: "25px", height: "25px", display: "inline-block", position: "absolute", left: "50%", top: "80%"}} src = {require("../images/carouselDot.png")}></img>,
      <img style ={{width: "25px", height: "25px", display: "inline-block", position: "absolute", left: "53%",top: "80%"}} src = {require("../images/carouselDot.png")}></img>,
      <img style ={{width: "25px", height: "25px", display: "inline-block", position: "absolute", left: "56%",top: "80%"}} src = {require("../images/carouselDot.png")}></img>]
      
      if(this.state.counter == 1){
        var arr = [<img style ={{width: "25px", height: "25px", display: "inline-block", position: "absolute", left: "47%", top: "80%"}} src = {require("../images/carouselDot_red.png")}></img>,
      <img style ={{width: "25px", height: "25px", display: "inline-block", position: "absolute", left: "50%", top: "80%"}} src = {require("../images/carouselDot.png")}></img>,
      <img style ={{width: "25px", height: "25px", display: "inline-block", position: "absolute", left: "53%",top: "80%"}} src = {require("../images/carouselDot.png")}></img>,
      <img style ={{width: "25px", height: "25px", display: "inline-block", position: "absolute", left: "56%",top: "80%"}} src = {require("../images/carouselDot.png")}></img>]
      }
      else if(this.state.counter == 2){
        var arr = [<img style ={{width: "25px", height: "25px", display: "inline-block", position: "absolute", left: "47%", top: "80%"}} src = {require("../images/carouselDot.png")}></img>,
      <img style ={{width: "25px", height: "25px", display: "inline-block", position: "absolute", left: "50%", top: "80%"}} src = {require("../images/carouselDot_red.png")}></img>,
      <img style ={{width: "25px", height: "25px", display: "inline-block", position: "absolute", left: "53%",top: "80%"}} src = {require("../images/carouselDot.png")}></img>,
      <img style ={{width: "25px", height: "25px", display: "inline-block", position: "absolute", left: "56%",top: "80%"}} src = {require("../images/carouselDot.png")}></img>]
      }
      else if(this.state.counter == 3){
        var arr = [<img style ={{width: "25px", height: "25px", display: "inline-block", position: "absolute", left: "47%", top: "80%"}} src = {require("../images/carouselDot.png")}></img>,
        <img style ={{width: "25px", height: "25px", display: "inline-block", position: "absolute", left: "50%", top: "80%"}} src = {require("../images/carouselDot.png")}></img>,
        <img style ={{width: "25px", height: "25px", display: "inline-block", position: "absolute", left: "53%",top: "80%"}} src = {require("../images/carouselDot_red.png")}></img>,
        <img style ={{width: "25px", height: "25px", display: "inline-block", position: "absolute", left: "56%",top: "80%"}} src = {require("../images/carouselDot.png")}></img>]
      }
      else if(this.state.counter == 4){
        var arr = [<img style ={{width: "25px", height: "25px", display: "inline-block", position: "absolute", left: "47%", top: "80%"}} src = {require("../images/carouselDot.png")}></img>,
      <img style ={{width: "25px", height: "25px", display: "inline-block", position: "absolute", left: "50%", top: "80%"}} src = {require("../images/carouselDot.png")}></img>,
      <img style ={{width: "25px", height: "25px", display: "inline-block", position: "absolute", left: "53%",top: "80%"}} src = {require("../images/carouselDot.png")}></img>,
      <img style ={{width: "25px", height: "25px", display: "inline-block", position: "absolute", left: "56%",top: "80%"}} src = {require("../images/carouselDot_red.png")}></img>]
      }

        return(
          <div>
            <img style={{width:"100%", height:"638px"}} src = {require(this.state.imgUrlArr[this.state.counter - 1])}></img>
            <Carousel counter = {arr}/>
            <img style = {{position: "absolute", left: "50%", top: "87%", height: "75px"}} src = {require("../images/chevron.png")}></img>
            
          </div>
        )
    }

}
ReactDOM.render(<Banner/>, document.getElementById("banner"))