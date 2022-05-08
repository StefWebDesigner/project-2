import React, { useState } from 'react';
import './kidportal.css';

                       
    const AvatarSelector = () => {

        const [value, setValue]  = useState("");  

        const options = [
          
          "/img/duck_avatar.png",         
          
          "/img/girl_avatar.png",         
          
          "/img/boy_avatar.png", 
          
        ];

        const handleChange = (e) => {
          setValue(e.target.value);
          console.log(value);
        }

        

    return (
   
        <div className="avatar-selector">
                <img src= {value} className="kid-avatar" alt='kid avatar' />
                
                  <select
                    value={value}
                    onChange={handleChange}
                  >
                    <option value="start">Select Avatar</option>
                    <option value= {options[0]} >Duck</option>
                    <option value= {options[1]}>Girl</option>
                    <option value= {options[2]} >Boy</option>
                  </select>
                
        </div>
      
    );
};

export default AvatarSelector;
