import React, { useState, useEffect } from 'react';

// Basic HOC
function withLoading(WrappedComponent) {
  return function WithLoadingComponent11({ isLoading, ...props }) {
    if (isLoading) {
      return (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading data, please wait...</p>
        </div>
      );
    }
    
    return <WrappedComponent {...props} />;
  };
}

// Enhanced HOC with options
function withLoadingEnhanced(WrappedComponent, options = {}) {
  const {
    loadingText = 'Loading...',
    showSpinner = true,
    customLoader: CustomLoader
  } = options;

  return function WithLoadingComponent({ isLoading, loadingMessage, ...props }) {
    if (isLoading) {
      if (CustomLoader) {
        return <CustomLoader message={loadingMessage} />;
      }
      
      return (
        <div className="loading-container">
          {showSpinner && <div className="spinner"></div>}
          <p>{loadingMessage || loadingText}</p>
        </div>
      );
    }
    
    return <WrappedComponent {...props} />;
  };
}

// Custom loader component
function CustomLoader({ message }) {
  return (
    <div className="custom-loader">
      <div className="pulse-animation"></div>
      <p>{message || 'Please wait...'}</p>
    </div>
  );
}


function UserList({ users, onUserClick }) {
  if (!users || users.length === 0) {
    return (
      <div className="user-list">
        <div style={{ textAlign: 'center', color: '#7f8c8d', padding: '2rem' }}>
          No users found.
        </div>
      </div>
    );
  }

  return (
    <div className="user-list">
      <h2>User List ({users.length} users)</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} onClick={() => onUserClick && onUserClick(user)}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}


// Create enhanced components
const UserListWithLoading = withLoading(UserList);
const UserListWithCustomLoading = withLoadingEnhanced(UserList, {
  loadingText: 'Fetching users...',
  showSpinner: true
});
const UserListWithCustomLoader = withLoadingEnhanced(UserList, {
  customLoader: CustomLoader
});

function ListApp() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Mock API response
        const mockUsers = [
          { id: 1, name: 'John Doe', email: 'john@example.com' },
          { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
          { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
          { id: 4, name: 'Alice Brown', email: 'alice@example.com' },
          { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com' },
        ];
        
        setUsers(mockUsers);
      } catch (err) {
        setError('Failed to load users. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleUserClick = (user) => {
    console.log('User clicked:', user);
    alert(`Selected: ${user.name}\nEmail: ${user.email}`);
  };

  const handleRetry = () => {
    setLoading(true);
    setError(null);
    // Simulate refetch
    setTimeout(() => {
      setUsers([
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
      ]);
      setLoading(false);
    }, 1500);
  };

  if (error) {
    return (
      <div className="app">
        <h1>User Management System</h1>
        <div className="error-container">
          <p>Error: {error}</p>
          <button onClick={handleRetry}>Retry Loading</button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <h1>User Management System</h1>
      
      <section>
        <h3>Basic Loading Example</h3>
        <UserListWithLoading 
          isLoading={loading}
          users={users}
          onUserClick={handleUserClick}
        />
      </section>
      
      <section>
        <h3>Custom Loading Message</h3>
        <UserListWithCustomLoading 
          isLoading={loading}
          loadingMessage="Loading user data from server..."
          users={users}
          onUserClick={handleUserClick}
        />
      </section>
      
      <section>
        <h3>Custom Loader Component</h3>
        <UserListWithCustomLoader 
          isLoading={loading}
          loadingMessage="Almost there..."
          users={users}
          onUserClick={handleUserClick}
        />
      </section>
    </div>
  );
}

export default ListApp;