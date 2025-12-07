import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    role: 'student',
    password: '',
    confirmPassword: ''
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
    // Logique d'inscription ici
    console.log(formData);
  };

  return (
    <div className="register-container-bg">
      <div className="register-overlay">
        <div className="register-card-bg">
          <div className="register-header-bg">
            <h2>Inscription</h2>
            <p>Plateforme de Gestion de Stage</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group-bg">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Nom d'utilisateur"
                required
              />
            </div>
            
            <div className="form-group-bg">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Numéro de téléphone"
                required
              />
            </div>
            
            <div className="form-group-bg">
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="student">Étudiant</option>
                <option value="supervisor">Superviseur</option>
                <option value="admin">Administrateur</option>
              </select>
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
            
            <div className="form-group-bg">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirmer le mot de passe"
                required
              />
            </div>
            
            <button type="submit" className="register-btn-bg">
              Créer un compte
            </button>
          </form>
          
          <div className="register-footer-bg">
            <p>Vous avez déjà un compte? <a href="/login">Se connecter</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;