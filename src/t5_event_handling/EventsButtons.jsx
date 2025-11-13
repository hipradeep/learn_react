import React from "react";

function EventsButtons() {

    function handleClick(name) {
        if (name) {
            alert(`Hello, ${name}!`);
        } else {
            alert("Hello!");
        }
    }

    return (
        <div>
            {/* Button 1: Works correctly - passes "name" as string when clicked */}
            <button onClick={() => handleClick("name")}>Click Me1</button><br/>
            
            {/* Button 2: Works correctly - calls function with no parameter when clicked */}
            <button onClick={() => handleClick()}>Click Me2</button><br/>
            
            {/* Button 3: INCORRECT - function is called immediately during render, not on click */}
            <button onClick={handleClick("3")}>Click Me3</button><br/>
            
            {/* Button 4: INCORRECT - function is called immediately during render, not on click */}
            <button onClick={handleClick()}>Click Me4</button><br/>
            
            {/* Button 5: PARTIALLY CORRECT - function is called on click but with event parameter */}
            <button onClick={handleClick}>Click Me5</button><br/>
            
            {/* Button 6: Works correctly - uses bind to pre-configure parameter */}
            <button onClick={handleClick.bind(this, "name")}>Click Me6 (bind)</button><br/>
            
            {/* Button 7: Equivalent to Button 6 using arrow function */}
            <button onClick={() => handleClick("name")}>Click Me7 (equivalent to bind)</button><br/>
        </div>
    );
}

export default EventsButtons;