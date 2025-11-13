import React, { useContext, createContext, useState } from 'react';


// User Context
const UserContext = createContext();
// Settings Context
const SettingsContext = createContext();

function MultipleContext() {
  const [user, setUser] = useState({ name: 'John', id: 1 });
  const [settings, setSettings] = useState({ language: 'en', notifications: true });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <SettingsContext.Provider value={{ settings, setSettings }}>
        <Dashboard />
      </SettingsContext.Provider>
    </UserContext.Provider>
  );
}

function Dashboard() {
  const { user } = useContext(UserContext);
  const { settings } = useContext(SettingsContext);

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <p>Language: {settings.language}</p>
      <Profile />
    </div>
  );
}

function Profile() {
  const { user, setUser } = useContext(UserContext);
  
  const updateName = (name) => {
    setUser(prev => ({ ...prev, name }));
  };

  return (
    <div>
      <input 
        value={user.name} 
        onChange={(e) => updateName(e.target.value)}
      />
    </div>
  );
}

export default MultipleContext;