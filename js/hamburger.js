import React from 'react';
import react from 'react';
import ReactDOM from 'react-dom'

class Hamburger extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <React.Fragment>
            <img className = "hamburgerIcon" src = {require("../images/hamburgerIcon.png")}></img>
            </React.Fragment>
        )
    }
}
export default Hamburger;