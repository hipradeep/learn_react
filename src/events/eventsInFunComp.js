import React, { useState } from "react";
import "./events.css"

//evnt component function
 function evnt() {

    const shoot = () => {
        alert("Great Shossst!");
    }
    //handleClick function
    function handleClick(){
        console.log('Button Clicked');
    }
    //handleClick2 function
    function handleClick2(e){
        e.preventDefault();
        console.log('Button Clicked');
    }

    //ancher component
    function Ancher() {
       return <a href="https://www.google.com" onClick={handleClick2}>google</a>;
    }

    return (
        <div className="content">
            <button onClick={shoot}>Take the shot!</button>
            <button onClick={handleClick}>See console</button>
           
          <Ancher/>
        </div>

    );

}


export default evnt;