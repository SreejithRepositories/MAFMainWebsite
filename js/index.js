// index.js
import React from "react"
import ReactDOM from "react-dom"

function Welcome() {
    return <h1>Hello</h1>;
  }

// ReactDOM.render(<h1>Hello world!</h1>, document.getElementById("root"))

ReactDOM.render(<Welcome />, document.getElementById("root"))