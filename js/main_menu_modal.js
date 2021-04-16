import React from 'react'


import { 
    Link
   } from 'react-router-dom'

export default class Main_Menu_Modal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayITServicesSubMenu: 'none', underLineColorHome: null
          
        }
      this.ITServices = this.ITServices.bind(this)
      this.closeSubMenu = this.closeSubMenu.bind(this)
      this.putUnderLineColorHome = this.putUnderLineColorHome.bind(this)
      this.unputUnderLineColorHome = this.unputUnderLineColorHome.bind(this)
      this.closeMainMenu = this.closeMainMenu.bind(this)
    
      
    }
  putUnderLineColorHome(){  this.setState({underLineColorHome: {cursor: "pointer", borderBottom:"3px dashed blue"}})
  }
  unputUnderLineColorHome(){
this.setState({underLineColorHome: null})
  }
  ITServices(){
  this.setState({displayITServicesSubMenu: ''})
  }
  
  closeSubMenu(){
     this.setState({displayITServicesSubMenu: 'none'})
  }
  closeMainMenu(){
    this.props.closeButtonPressed('true')
  }
    render(){
   return(
            <div>
<img onClick = {this.closeMainMenu} style={{cursor: "pointer", position: "absolute", right: "10px", width:"25px", height:"25px"}} src = {require('../images/close.png')}></img>
            <table> 
<tr><td onMouseOver = {this.putUnderLineColorHome} onMouseOut = {this.unputUnderLineColorHome} style  = {this.state.underLineColorHome}>Home</td></tr>
<tr><td style  = {this.state.underLineColor}>About Us</td></tr>
<tr><td className = "ITServices" onMouseOver = {this.ITServices}>IT Services</td><td></td></tr>
<tr style = {{display: this.state.displayITServicesSubMenu}}><td style  = {{borderTop:"3px dashed blue"}}></td><td style  = {{borderTop:"3px dashed blue"}}></td><td style  = {{borderTop:"3px dashed blue"}}></td><td style  = {{borderTop:"3px dashed blue"}}></td><td style  = {{borderTop:"3px dashed blue"}}></td><td style  = {{borderTop:"3px dashed blue"}} className = "closeSubMenu" onClick = {this.closeSubMenu}>x</td></tr>
 <tr style = {{display: this.state.displayITServicesSubMenu}}><td></td><td></td></tr>
 <tr style = {{display: this.state.displayITServicesSubMenu}}><td></td><td></td></tr>
 <tr style = {{display: this.state.displayITServicesSubMenu}}><td></td><td></td></tr>
<tr style = {{display: this.state.displayITServicesSubMenu}} className = "subMenu"><td></td><td style = {this.state.underLineColor}>Cloud Automation</td></tr>
<tr style = {{display: this.state.displayITServicesSubMenu}} className = "subMenu"><td></td><td style = {this.state.underLineColor}>Data Analytics</td></tr>
<tr style = {{display: this.state.displayITServicesSubMenu}} className = "subMenu"><td></td><td style = {this.state.underLineColor}>Digital Transformation</td></tr>
<tr style = {{display: this.state.displayITServicesSubMenu}} className = "subMenu"><td></td><td style = {this.state.underLineColor}>Marketing Transformation</td></tr>
           
<tr><td style = {this.state.underLineColor}>Technologies We Use</td></tr>
 <tr><td style = {this.state.underLineColor}>Industries We Serve</td></tr>
 <tr><td style = {this.state.underLineColor}>What we can help you achieve?</td></tr>
 <tr><td style = {this.state.underLineColor}>Customer Success Stories</td></tr>
 <tr><td style = {this.state.underLineColor}>Blog</td></tr>
  <tr><td style = {this.state.underLineColor}>FAQs</td></tr>
  <tr><td style = {this.state.underLineColor}>Terms and Conditions</td></tr>
<tr><td style = {this.state.underLineColor}>Contact Us</td></tr>
 </table>
 </div>
        )
    }
}
