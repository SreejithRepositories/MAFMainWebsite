import React from 'react'
import react from 'react'
import ReactDOM from 'react-dom'
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
        clearInterval(this.state.timer);
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
        
            
        return(
            <img src = {require(this.state.imgUrlArr[this.state.counter - 1])}></img>
        )
    }

}
ReactDOM.render(<Banner/>, document.getElementById("banner"))