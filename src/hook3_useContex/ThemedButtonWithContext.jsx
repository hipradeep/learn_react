import React, { useContext, createContext, useState } from 'react';

// Create Context
const ThemeContext = createContext();

// Context Provider Component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Component using Context
function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '10px 20px',
        border: '1px solid #ccc'
      }}
    >
      Current Theme: {theme}
    </button>
  );
}

// App Component
function ThemedButtonWithContext() {
  return (
    <ThemeProvider>
      <div>
        <ThemedButton />
      </div>
    </ThemeProvider>
  );
}

export default ThemedButtonWithContext;