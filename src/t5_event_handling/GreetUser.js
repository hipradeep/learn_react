import React from "react";

function GreetUser() {
    const [name, setName] = React.useState("");

    function greet(v) {
        alert(`Hello, ${name}! ${v}`);
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder="Enter your name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />  
            <button onClick={()=>greet("Clicked")}>Say Hello</button>
        </div>
    );
}

export default GreetUser;