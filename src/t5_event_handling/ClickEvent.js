import React from "react";

function ClickEvent() {
    
    function handleClick() {
        alert("Button Clicked!");
    }
    //this fuction overrides the above function, when we click on Click Me3 button, 
    // it actually calls this functioncalled handleClick(arg)
    function handleClick(args) {
        alert("Button 2 Clicked!" + args );
    }
    function handleClickWithArg(arg) {

        alert("Button Clicked! with arg: " + arg);
    }

    return (
        <div>
            <button onClick={() => handleClickWithArg("arg")}>Click 1</button>
            <button onClick={()=>handleClick("name")}>Click Me2</button>
            <button onClick={handleClick}>Click Me3</button>
        </div>
    );
}

export default ClickEvent;
