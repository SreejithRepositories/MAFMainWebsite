import React from "react"
import ReactDOM from "react-dom"
import Hamburger from "./hamburger.js"
import '../css/landing_page.css'

class Header extends React.Component{
    render(){
        return (
        <div>
        <img className = "logo" src = {require("../images/logo.png")}></img>
        <Hamburger/>
        </div>
        )
    }
}


ReactDOM.render(<Header />, document.getElementById("main"))