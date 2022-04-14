import React from 'react';
import design from "../assets/design.svg";
import "./style.css"

function Footer() {
  return (
    <div className='footer' >
        <a href="https://www.linkedin.com/in/bedirhan-talha-kuzucu-ab3099225/" style={{textDecoration:"none", color:"purple"}}>{`<btk>`}   </a>
        <img src={design} style= {{width: "2rem"}} alt="" /> 
        Design
    </div>
  )
}

export default Footer