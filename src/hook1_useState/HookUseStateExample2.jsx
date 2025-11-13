import React, { useState } from 'react';


function expensiveCalculation() {
  console.log("Running expensive calculation...");
  return {
    name: "Pradeep",
    email: "pradeep@ex.com",
    age: 44
  };
}

function getUserDetailsFromLocalStorage() {
  console.log("Running expensive calculation...");

  const savedUser = localStorage.getItem('user');
  return savedUser ? JSON.parse(savedUser) : {name:"pradeep", email:"pradeep@ex.com", age:23};
}


function HookUseStateExample() {

  // ❌ runs every render
  //const [user, setUser] = useState(expensiveCalculation());

  // ✅ runs only on first render
  // lazy initialization: expensiveCalculation runs only once
  const [user, setUser] = useState(() => getUserDetailsFromLocalStorage());





  // Update only the name and also save to localStorage
  const updateUser = (newName) => {
    setUser(prevUser => {
      const updated = { ...prevUser, name: newName };
      localStorage.setItem('user', JSON.stringify(updated)); // save to localStorage
      return updated;
    });
  };


  return (
    <div>
      <p>
        User Details:
        {user ? (
          <>
            <br /> Name: {user.name}
            <br /> Email: {user.email}
            <br /> Age: {user.age}
          </>
        ) : (
          <span>No user data</span>
        )}
      </p>


      <input type='text' placeholder='Enter Name' value={user? user.name:""} id='nameId'
        onChange={(e) => updateUser(e.target.value)}
      />


      <button onClick={() => updateUser("Pradeep Maurya")}>Change Name</button>


    </div>
  );
}

export default HookUseStateExample;
