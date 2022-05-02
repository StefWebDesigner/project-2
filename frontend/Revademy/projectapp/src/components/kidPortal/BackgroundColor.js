import React from "react";
import ReactDOM from "react-dom";
import Portal from './KidPortal'


import "./kidportal.css";

class Color extends React.Component{
    //initial state setup
    constructor(props) {
        super(props);
        this.state = {
          color: "white"
        };
      }
      changeColor(e) {
        this.setState({
          color: e.target.value
        });
      }
    
      render() {
        const stylesPage = {
          background: this.state.color
        };
    
        return (
        
          <div style={stylesPage} className="container" >
            <div className="color-box">
              <p>What is your favorite color?</p>
              <input
                value={this.state.color}
                onChange={this.changeColor.bind(this)}
              />
             
            </div>
          </div>
          
        );
      }
    }
    export default Color;

    document.getElementsByClassName("main-page");    

