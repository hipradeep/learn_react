import React, { useState } from "react";
import "./events.css"

const evnt = function () {

    const shoot = () => {
        alert("Great Shossst!");
    }
    function Ancher() {
       return <a href="https://www.google.com">google</a>;
    }

    return (
        <div className="content">
            <button onClick={shoot}>Take the shot!</button>
            <button onClick={shoot}>Take the shot!</button>
            <button onClick={shoot}>Take the shot!</button>
            <button onClick={shoot}>Take the shot!</button>
            <button onClick={shoot}>Take the shot!</button>  
          <Ancher/>
        </div>

    );

}

export default evnt;