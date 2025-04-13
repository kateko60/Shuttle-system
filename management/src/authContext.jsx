import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // save and manage the states
  const logIn = () => setIsLoggedIn(true);
  const logOut = () => setIsLoggedIn(false);
  const register = () => setIsLoggedIn(true);

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut, register }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the AuthContext
export function useAuth() {
  return useContext(AuthContext);
}
