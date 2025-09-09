import React, { useState } from "react";

function FormExample() {
    // State variables to store form data
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [agree, setAgree] = useState(false); // For checkbox input

    // Handler functions to update state when input changes
    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleAgreeChange(event) {
        setAgree(event.target.checked); // Checkboxes use `checked` instead of `value`
    }

    // Function to handle form submission
    function handleSubmit(event) {
        event.preventDefault(); // Prevents the page from reloading

        // Displaying submitted form data
        alert(`Submitted Data: 
                  Name: ${name} 
                  Email: ${email} 
                  Password: ${password} 
                  Terms Accepted: ${agree ? "Yes" : "No"}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* Input field for name */}
            <label>
                Name:
                <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <br /><br />

            {/* Input field for email */}
            <label>
                Email:
                <input type="email" value={email} onChange={handleEmailChange} />
            </label>
            <br /><br />

            {/* Input field for password */}
            <label>
                Password:
                <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <br /><br />

            {/* Checkbox input */}
            <label>
                <input type="checkbox" checked={agree} onChange={handleAgreeChange} />
                I agree to the terms and conditions
            </label>
            <br /><br />

            {/* Submit button */}
            <button type="submit">Submit</button>
        </form>
    );
}

export default FormExample;
