import React from "react";

function ClickEvent() {
    function handleClick() {
        alert("Button Clicked!");
    }

    return <button onClick={handleClick}>Click Me</button>;
}

export default ClickEvent;
