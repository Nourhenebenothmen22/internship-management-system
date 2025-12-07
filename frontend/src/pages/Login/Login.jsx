import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de connexion ici
    console.log(formData);
  };

  return (
    <div className="login-container-bg">
      <div className="login-overlay">
        <div className="login-card-bg">
          <div className="login-header-bg">
            <h2>Connexion</h2>
            <p>Plateforme de Gestion de Stage</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group-bg">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email d'utilisateur"
                required
              />
            </div>
            
            <div className="form-group-bg">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Mot de passe"
                required
              />
            </div>
            
            <button type="submit" className="login-btn-bg">
              Se connecter
            </button>
          </form>
          
          <div className="login-footer-bg">
            <p>Vous n'avez pas de compte? <a href="/register">S'inscrire</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;