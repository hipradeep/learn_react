import React, { useState } from "react";
import "./events.css"

const evnt = function () {

    const shoot = () => {
        alert("Great Shossst!");
    }

    return (

        <div className="content">
            <button onClick={shoot}>Take the shot!</button>
            <button onClick={shoot}>Take the shot!</button>
            <button onClick={shoot}>Take the shot!</button>
            <button onClick={shoot}>Take the shot!</button>
            <button onClick={shoot}>Take the shot!</button>
        </div>

    );

}

export default evnt;