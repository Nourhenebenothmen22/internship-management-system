import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaSignInAlt, FaUserPlus, FaGoogle, FaGithub, FaEye, FaEyeSlash, FaArrowRight, FaRocket, FaCheckCircle } from 'react-icons/fa';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      console.log('Login attempt:', formData);
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
  };

  return (
    <div className="login">
      {/* Background Elements */}
      <div className="login__bg-shape login__bg-shape--1"></div>
      <div className="login__bg-shape login__bg-shape--2"></div>
      
      <div className="login__container">
        {/* Right Panel - Login Form */}
        <div className="login__right">
          <div className="login__card-wrapper">
            <div className="login__card">
              <div className="login__header">
                <h1 className="login__title">
                  Welcome <span className="login__title-highlight">Back</span>
                </h1>
                <p className="login__subtitle">
                  Sign in to access your internship dashboard
                </p>
              </div>

              {/* Quick Login Buttons */}
              <div className="login__quick">
                <button 
                  className="login__quick-btn login__quick-btn--google"
                  onClick={() => handleSocialLogin('google')}
                  type="button"
                >
                  <FaGoogle className="login__quick-icon" />
                  <span>Google</span>
                </button>
                
                <button 
                  className="login__quick-btn login__quick-btn--github"
                  onClick={() => handleSocialLogin('github')}
                  type="button"
                >
                  <FaGithub className="login__quick-icon" />
                  <span>GitHub</span>
                </button>
              </div>

              {/* Divider */}
              <div className="login__divider">
                <span>or continue with</span>
              </div>

              {/* Login Form */}
              <form className="login__form" onSubmit={handleSubmit}>
                <div className="login__input-group">
                  <FaEnvelope className="login__input-icon" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="login__input"
                    required
                  />
                </div>

                <div className="login__input-group">
                  <FaLock className="login__input-icon" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="login__input"
                    required
                  />
                  <button 
                    type="button"
                    className="login__password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                {/* Options */}
                <div className="login__options">
                  <label className="login__checkbox">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                    />
                    <span className="login__checkmark"></span>
                    <span className="login__checkbox-text">Remember me</span>
                  </label>
                  
                  <Link to="/forgot-password" className="login__forgot">
                    Forgot password?
                  </Link>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className={`login__submit ${isLoading ? 'login__submit--loading' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="login__spinner"></span>
                  ) : (
                    <>
                      <span>Sign In</span>
                      <FaArrowRight className="login__submit-icon" />
                    </>
                  )}
                </button>
              </form>

              {/* Sign Up Link */}
              <div className="login__signup">
                <span className="login__signup-text">Don't have an account?</span>
                <Link to="/register" className="login__signup-link">
                  Create Account
                  <FaArrowRight className="login__signup-icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;