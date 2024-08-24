import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Criando o contexto de autenticação
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState(null); // Estado para mensagens de erro
  const [registerError, setRegisterError] = useState(null); // Estado para mensagens de erro de registro
  const navigate = useNavigate();

  const login = async (credentials) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setLoginError(errorData.message || 'Usuário não Cadastrado ou senha inválida!');
        throw new Error(errorData.message || 'Failed to login');
      }

      const data = await response.json();
      setUser(data);
      localStorage.setItem('token', data.token);
      setLoginError(null); // Limpa a mensagem de erro em caso de sucesso
      navigate('/tasks');
    } catch (error) {
      console.error('Error:', error);
      // O erro já é tratado e a mensagem é armazenada no estado loginError
    }
  };

  const register = async (credentials) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setRegisterError(errorData.message || 'Failed to register');
        throw new Error(errorData.message || 'Failed to register');
      }

      const data = await response.json();
      // Se desejar, você pode definir o usuário após o registro
      // setUser(data);
      setRegisterError(null); // Limpa a mensagem de erro em caso de sucesso
    } catch (error) {
      console.error('Error:', error);
      // O erro já é tratado e a mensagem é armazenada no estado registerError
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, loginError, registerError }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
