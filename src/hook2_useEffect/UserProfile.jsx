import React, { useState, useEffect } from 'react';

function UserProfile({ userId=3 }) {
  const [user, setUser] = useState(null);

  // Fetch user when component mounts or userId changes
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos//${userId}`)
      .then(response => response.json())
      .then(userData => setUser(userData));
  }, [userId]); // Dependency array

  return (<div>
      <p>
        User Details:
        {user ? (
          <>
            <br /> UserId: {user.userId}
            <br /> Id: {user.id}
            <br /> Title: {user.title}
            <br /> Completed: {user.completed}
          </>
        ) : (
          <span>No user data</span>
        )}
      </p></div>);
}

export default UserProfile;