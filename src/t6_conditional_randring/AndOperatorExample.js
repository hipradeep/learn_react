import React, { useState } from "react";

function AndOperatorExample() {
    const [isAdmin, setIsAdmin] = useState(false);

    return (
        <div>
            <h1>Welcome User</h1>
            {isAdmin && <h2>You have admin privileges.</h2>}
            <button onClick={() => setIsAdmin(!isAdmin)}>Toggle Admin</button>
        </div>
    );
}

export default AndOperatorExample;
