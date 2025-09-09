import React, { useState } from "react";

function IfElseExample() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    if (isLoggedIn) {
        return <h1>Welcome, Pradeep!</h1>;
    } else {
        return <h1>Please log in.</h1>;
    }
}

export default IfElseExample;
