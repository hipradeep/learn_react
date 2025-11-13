import React from 'react';

export default function KeyImportance() {
    const [items, setItems] = React.useState([
        { id: 1, name: 'First Item' },
        { id: 2, name: 'Second Item' },
        { id: 3, name: 'Third Item' }
    ]);

    const addItem = () => {
        const newId = Math.max(...items.map(item => item.id)) + 1;
        setItems([...items, { id: newId, name: `New Item ${newId}` }]);
    };

    const removeFirstItem = () => {
        setItems(items.slice(1));
    };

    return (
        <div>
            <h3>Key Importance Demonstration</h3>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} <small>(ID: {item.id})</small>
                    </li>
                ))}
            </ul>
            <button onClick={addItem}>Add Item</button>
            <button onClick={removeFirstItem}>Remove First Item</button>
            
            <div>
                <h4>Without Proper Keys (for comparison):</h4>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            {item.name} <small>(Index: {index})</small>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}