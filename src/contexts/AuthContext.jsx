import { useState } from 'react';
import { createContext } from 'react'

export const Context = createContext()

export const AuthContext = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
    
    return (
        <Context.Provider value={{isAuthenticated, setIsAuthenticated}}>
            {children}
        </Context.Provider>
    );
}