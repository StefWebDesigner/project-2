import React from "react";


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
              <p>What is your favorite color? 
                
              <input type='text'
                // value={this.state.color}
                onChange={this.changeColor.bind(this)}
              />
              </p>
             
            </div>
          </div>
          
        );
      }
    }
    export default Color;

    document.getElementsByClassName("main-page");    

