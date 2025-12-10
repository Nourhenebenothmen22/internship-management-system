import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaSignInAlt, FaUserPlus, FaGoogle, FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa';
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
  };

  const handleSocialLogin = () => {

  };

  return (
    <div className="login">
      {/* Background Elements */}
      <div className="login__bg-shape login__bg-shape--1"></div>
      <div className="login__bg-shape login__bg-shape--2"></div>

      <div className="login__container">
        {/* Right Panel - Login Form */}
        <div className="login__right">
          <div className="login__card">
            <div className="login__header">
              <h1 className="login__title">Welcome Back!</h1>
              <p className="login__subtitle">
                Sign in to continue your internship journey
              </p>
            </div>

            {/* Login Form */}
            <form className="login__form" onSubmit={handleSubmit}>
              <div className="login__form-group">
                <label className="login__label">
                  <FaEnvelope className="login__label-icon" />
                  <span>Email Address</span>
                </label>
                <div className="login__input-wrapper">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="login__input"
                    required
                  />
                </div>
              </div>

              <div className="login__form-group">
                <label className="login__label">
                  <FaLock className="login__label-icon" />
                  <span>Password</span>
                </label>
                <div className="login__input-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
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
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="login__options">
                <label className="login__checkbox">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <span className="login__checkbox-custom"></span>
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
                    <FaSignInAlt className="login__submit-icon" />
                    <span>Sign In</span>
                  </>
                )}
              </button>

            </form>

            {/* Sign Up Link */}
            <div className="login__footer">
              <p className="login__footer-text">
                Don't have an account?
              </p>
              <Link to="/register" className="login__register-link">
                <FaUserPlus className="login__register-icon" />
                <span>Create an account</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;