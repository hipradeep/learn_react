import React, { useState } from "react";

function TernaryExample() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <h1>{isLoggedIn ? "Welcome, Pradeep!" : "Please log in."}</h1>
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login</button>
        </div>
    );
}

export default TernaryExample;
