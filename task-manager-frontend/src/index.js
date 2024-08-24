import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from './context/AuthContext'; // Ajuste o caminho conforme necessário
import './index.css'; // Se você estiver usando um arquivo de estilo global

ReactDOM.render(
  <Router>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>,
  document.getElementById('root')
);
