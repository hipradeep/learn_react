import React, {useState,useContext,createContext} from 'react';

// Create Context
const ThemeContext = createContext();
const UserContext = createContext();




// Consumer
function Header() {
  const { user } = useContext(UserContext);
  return <header>Welcome, {user.name}!</header>;
}

function ToolbarWithContext() {

    const [user, setUser] = useState({ name: 'John' });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Header />
    </UserContext.Provider>
  );
}
export default ToolbarWithContext;