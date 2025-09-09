import React from "react";

function GreetUser() {
    function greet(name) {
        alert(`Hello, ${name}!`);
    }

    return <button onClick={() => greet("Pradeep")}>Say Hello</button>;
}

export default GreetUser;
