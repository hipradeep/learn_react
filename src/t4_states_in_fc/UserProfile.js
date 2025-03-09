import React, { useState } from "react";

function UserProfile() {
    // Multiple state variables
    const [name, setName] = useState("Pradeep Maurya");
    const [age, setAge] = useState(25);

    return (
        <div>
            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
            <button onClick={() => setName("Updated Name")}>Change Name</button>
            <button onClick={() => setAge(age + 1)}>Increase Age</button>
        </div>
    );
}

export default UserProfile;
