import React, { useMemo, useState } from 'react';

const DUMMY_ITEMS = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  name: `Item ${i + 1} - ${['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'][i % 5]}`
}));

function ExpensiveCalculationComponent({ items, filter }) {
  const [count, setCount] = useState(0);
  
  console.log('Component rendered, count:', count);
  
  // ❌ Without useMemo - runs on every render
  // Uncomment this and comment the useMemo version to see the difference
  // const filteredItems = (() => {
  //   console.log('❌ Filtering WITHOUT useMemo - recalculating on EVERY render!');
  //   return items.filter(item => 
  //     item.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // })();
  
  // ✅ With useMemo - only recalculates when items or filter change
  const filteredItems = useMemo(() => {
    console.log('Filtering WITH useMemo - only when dependencies change');
    console.log('Dependencies: items.length =', items.length, ', filter =', filter);
    return items.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);
  
  console.log('Filtered results:', filteredItems.length, 'items');
  
  return (
    <div>
      <h2>useMemo Performance Demo</h2>
      <p>Open the browser console to see when filtering occurs!</p>
      
      <button onClick={() => {
        console.log('\nButton clicked - triggering re-render...');
        setCount(c => c + 1);
      }}>
        Re-render count: {count}
      </button>
      <p>Click this button to re-render. Notice filtering only runs when filter/items change, not on every render!</p>
      
      <p>Showing {filteredItems.length} of {items.length} items</p>
      <ul>
        {filteredItems.slice(0, 10).map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
        {filteredItems.length > 10 && (
          <li>... and {filteredItems.length - 10} more items</li>
        )}
      </ul>
    </div>
  );
}

export default function App() {
  const [filter, setFilter] = useState('');
  
  console.log('App rendered with filter:', filter);
  
  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => {
          console.log('\nFilter changed to:', e.target.value);
          setFilter(e.target.value);
        }}
        placeholder="Type to filter items (e.g., 'Apple', 'Banana')..."
      />
      
      <ExpensiveCalculationComponent items={DUMMY_ITEMS} filter={filter} />
     
    </div>
  );
}