import React, { createContext, useState, ReactNode } from 'react';

interface AuthContextData {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  cart:any[]
}

export const AuthContext = createContext<AuthContextData>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  cart:[]
});

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const cart =JSON.parse(localStorage.getItem("cart") || "[]")
  const authContextValue: AuthContextData = {
    isAuthenticated,
    setIsAuthenticated,
    cart
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
