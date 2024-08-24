import React from 'react';
import Login from '../components/Login';
import styles from '../styles/LoginPage.module.css';

const LoginPage = () => {
  const handleLogin = async (credentials) => {
    // Função de login que será passada para o componente Login
  };
  return (
    <div className={styles.page}>
      <h2>Login</h2>
     <Login onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
