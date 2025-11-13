import React, { useState, useEffect } from 'react';

function UserProfile2({ userId = 3 }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Reset states when userId changes
    setLoading(true);
    setError(null);

    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${userId}`
        );
        if (!response.ok) throw new Error('Failed to fetch user');
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]); // Refetch when userId changes

  if (loading) return <div>Loading user...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <p>
        User Details:
        {user ? (
          <>
            <br /> UserId: {user.userId}
            <br /> Id: {user.id}
            <br /> Title: {user.title}
            <br /> Completed: {user.completed ? 'Yes' : 'No'}
          </>
        ) : (
          <span>No user data</span>
        )}
      </p>
    </div>
  );
}

export default UserProfile2;
