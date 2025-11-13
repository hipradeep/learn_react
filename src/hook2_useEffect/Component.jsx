import React, {useState, useEffect} from "react";


function Component() {
  const [count, setCount] = useState(0);
  //const [name, setName] = useState('');
  const [name, setName] = useState(()=> localStorage.getItem('name'));

  // Effect 1: Document title update
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // Only re-run when count changes
  
  // Effect 2: Local storage sync
  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]); // Only re-run when name changes

  return (
      <div>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      <input value={name} onChange={e => setName(e.target.value)} />
    </div>
  );
}
export default Component;