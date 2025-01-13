// AuthContext.js
import React, { createContext, useState } from 'react';
import Login from './Login';
import Logout from './Logout';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const login = (userData) => {

    setUser(userData);
    console.log(user)
  };

  const logout = () => {
    setUser('')
    console.log(user)
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {/* {children} */}
      <div className="App">
        <Login />
        <Logout />
      </div>
      
      
    </AuthContext.Provider>
  );
};

export default AuthContext;
