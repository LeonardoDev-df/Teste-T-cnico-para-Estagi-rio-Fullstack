import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import styles from '../styles/Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loginError } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
      // Se o login falhar, a função login definirá a mensagem de erro e não redirecionará
    } catch (error) {
      // O erro já é tratado pelo AuthProvider
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Login</button>
        {loginError && <p className={styles.error}>{loginError}</p>} {/* Exibir mensagem de erro */}
      </form>
      <p className={styles.redirect}>
        Não tem uma conta? <Link to="/register" className={styles.link}>Cadastre-se</Link>
      </p>
    </div>
  );
};

export default Login;
