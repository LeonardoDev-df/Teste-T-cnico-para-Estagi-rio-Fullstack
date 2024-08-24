import React, { createContext, useState, useContext } from 'react';

// Cria o contexto
const AuthContext = createContext();

// Componente Provider
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (token) => {
    // Armazena o token no localStorage e atualiza o estado
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Remove o token do localStorage e atualiza o estado
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar o AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
