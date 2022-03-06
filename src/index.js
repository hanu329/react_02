
import React from "react"
import ReactDom from "react-dom"
import "./index.css"
console.log("hello")
let h11 = React.createElement("h2",{className:"cont"},"Mobile Operating System")
let ul1= React.createElement("ul",{className:"ul1"},null,
React.createElement("li",null,"Android"),
React.createElement("li",null,"Blackberry"),
React.createElement("li",null,"iPhone"),
React.createElement("li",null,"Window Phone"))
  let h12= React.createElement("h2",{className:"cont1"},"Mobile Manufacturers")
  let ul2= React.createElement("ul",{className:"ul2"},null,
React.createElement("li",null,"Samsung"),
React.createElement("li",null,"HTC"),
React.createElement("li",null,"Micromax"),
React.createElement("li",null,"Apple"))
ReactDom.render(
    [h11,ul1,h12,ul2],
    document.getElementById("main")
)