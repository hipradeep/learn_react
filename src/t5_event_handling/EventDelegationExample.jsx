import React from "react";

function EventDelegationExample() {
    const handleClick = (e) => {
        // e.target gives us the actual element that was clicked
        console.log("Clicked element:", e.target);
        console.log("Current target:", e.currentTarget);
        
        if (e.target.tagName === 'BUTTON') {
            alert(`Button clicked: ${e.target.textContent}`);
        }
    };

    return (
        <div onClick={handleClick} style={{ padding: '20px', border: '1px solid #ccc' }}>
            <h3>Click anywhere inside this div</h3>
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
            <p>Even this paragraph will trigger the event</p>
        </div>
    );
}

export default EventDelegationExample;