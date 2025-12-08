import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaUserPlus, FaGoogle, FaGithub, FaEye, FaEyeSlash, FaGraduationCap, FaUserTie, FaBuilding, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student',
    acceptTerms: false
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the terms';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true);
      
      setTimeout(() => {
        console.log('Registration data:', formData);
        setIsLoading(false);
        navigate('/dashboard');
      }, 1500);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleSocialRegister = (provider) => {
    console.log(`Register with ${provider}`);
  };

  const getRoleIcon = (role) => {
    switch(role) {
      case 'student': return <FaGraduationCap />;
      case 'supervisor': return <FaUserTie />;
      case 'admin': return <FaBuilding />;
      default: return <FaUser />;
    }
  };

  const getRoleName = (role) => {
    switch(role) {
      case 'student': return 'Student';
      case 'supervisor': return 'Supervisor';
      case 'admin': return 'Admin';
      default: return '';
    }
  };

  return (
    <div className="register">
      {/* Background Elements */}
      <div className="register__bg-shape register__bg-shape--1"></div>
      <div className="register__bg-shape register__bg-shape--2"></div>
      
      <div className="register__container">
        <div className="register__card">
          <div className="register__header">
            <h1 className="register__title">
              Create <span className="register__title-highlight">Account</span>
            </h1>
            <p className="register__subtitle">
              Join our community
            </p>
          </div>
          {/* Register Form */}
          <form className="register__form" onSubmit={handleSubmit}>
            {/* Username */}
            <div className="register__input-group">
              <FaUser className="register__input-icon" />
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                className={`register__input ${errors.username ? 'register__input--error' : ''}`}
                required
              />
              {errors.username && <span className="register__error">{errors.username}</span>}
            </div>

            {/* Email */}
            <div className="register__input-group">
              <FaEnvelope className="register__input-icon" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className={`register__input ${errors.email ? 'register__input--error' : ''}`}
                required
              />
              {errors.email && <span className="register__error">{errors.email}</span>}
            </div>

            {/* Password */}
            <div className="register__input-group">
              <FaLock className="register__input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className={`register__input ${errors.password ? 'register__input--error' : ''}`}
                required
              />
              <button 
                type="button"
                className="register__password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.password && <span className="register__error">{errors.password}</span>}
            </div>

            {/* Confirm Password */}
            <div className="register__input-group">
              <FaLock className="register__input-icon" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className={`register__input ${errors.confirmPassword ? 'register__input--error' : ''}`}
                required
              />
              <button 
                type="button"
                className="register__password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.confirmPassword && <span className="register__error">{errors.confirmPassword}</span>}
            </div>

            {/* Role Selection - Checkboxes compactes */}
            <div className="register__role-section">
              <label className="register__role-label">Account Type</label>
              <div className="register__role-checkboxes">
                {['student', 'supervisor', 'admin'].map((role) => (
                  <label
                    key={role}
                    className={`register__role-checkbox ${formData.role === role ? 'register__role-checkbox--active' : ''}`}
                  >
                    <input
                      type="radio"
                      name="role"
                      value={role}
                      checked={formData.role === role}
                      onChange={handleChange}
                      hidden
                    />
                    <div className="register__role-checkbox-icon">
                      {getRoleIcon(role)}
                    </div>
                    <div className="register__role-checkbox-content">
                      <span className="register__role-checkbox-title">
                        {getRoleName(role)}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Terms */}
            <div className="register__terms">
              <label className="register__terms-checkbox">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                />
                <span className="register__terms-checkmark"></span>
                <span className="register__terms-text">
                  I agree to terms & privacy
                </span>
              </label>
              {errors.acceptTerms && <span className="register__error">{errors.acceptTerms}</span>}
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className={`register__submit ${isLoading ? 'register__submit--loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="register__spinner"></span>
              ) : (
                <>
                  <span>Create Account</span>
                  <FaArrowRight className="register__submit-icon" />
                </>
              )}
            </button>
          </form>

          {/* Login Link */}
          <div className="register__login">
            <span className="register__login-text">Already have an account?</span>
            <Link to="/login" className="register__login-link">
              Sign In
              <FaArrowRight className="register__login-icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;