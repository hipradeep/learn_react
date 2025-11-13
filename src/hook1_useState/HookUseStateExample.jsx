import React, { useState, useRef } from 'react';

function HookUseStateExample() {
  // state to keep track of counter
  const [count, setCount] = useState(0);

  // ref to access input value (uncontrolled input)
  const nameInputRef = useRef();

  // state to store a list of numbers
  const [nums, setNums] = useState([10, 20, 30]);

  // state to store user details (object state)
  const [user, setUser] = useState({
    name: 'pradeep',
    email: 'pradeep@ex.com',
    age: 770
  });

  // update only the 'name' property of user object
  const updateUser = (newName) => {
    setUser(prevUser => ({ ...prevUser, name: newName }));
  };

  // add a new number in the list, increasing by +10 each time
  const addNumber = () => {
    if (nums.length === 0) { 
      setNums([10]); // if list empty, start from 10
      return;
    }
    const newNum = nums[nums.length - 1] + 10; // get last number + 10
    setNums(prevNums => [...prevNums, newNum]); // append to list
  };

  // remove the last number from the list
  const removeNumber = () => {
    if (nums.length === 0) return; // nothing to remove
    setNums(prevNums => prevNums.slice(0, -1));
  };

  return (
    <div>
      {/* Counter state display */}
      <p>You clicked {count} times</p>

      {/* User details display */}
      <p>
        User Details:
        <br /> Name: {user.name}
        <br /> Email: {user.email}
        <br /> Age: {user.age}
      </p>

      {/* Counter update buttons */}
      {/* Direct update → may cause stale state if multiple updates are batched */}
      <button onClick={() => setCount(count + 1)}>Click me</button>

      {/* Functional update → always uses the latest state (safe for multiple/async updates) */}
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Click me</button>
      <br />

      {/* Input field for entering a new name (uncontrolled with ref) */}
      <input 
        type='text' 
        placeholder='Enter Name' 
        defaultValue={user.name} 
        id='nameId'
        ref={nameInputRef}
      />

      {/* Button updates user name with value from input */}
      <button onClick={() => updateUser(nameInputRef.current.value)}>Change Name</button>

      {/* Numbers list display */}
      <p>{nums.join(", ")}</p>

      {/* List manipulation buttons */}
      <button onClick={addNumber}>Add number In List</button>
      <button onClick={removeNumber}>Remove Last Number From List</button>
    </div>
  );
}

export default HookUseStateExample;
