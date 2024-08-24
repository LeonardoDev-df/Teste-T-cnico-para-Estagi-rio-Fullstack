import React from 'react';
import Login from '../components/Login';
import styles from '../styles/LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={styles.page}>
      <h2>Login</h2>
      <Login />
    </div>
  );
};

export default LoginPage;
