import React from "react";
import ReactDOM from "react-dom";
import Portal from './KidPortal'


import "./kidportal.css";

class Color extends React.Component{
    //initial state setup

      changeColor(e) {
        this.props.setColor(e.target.value)
      }
    
      render() {
      
    
        return (
        
          <div  className="container" >
            <div className="color-box">
              <p>What is your favorite color?</p>
              <input type='text'
                // value={this.state.color}
                onChange={this.changeColor.bind(this)}
              />
             
            </div>
          </div>
          
        );
      }
    }
    export default Color;

    document.getElementsByClassName("main-page");    

