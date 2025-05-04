import React, { useState } from 'react';
import './LoginSignupForm.css';

export default function LoginSignupForm({ onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? 'Login' : 'Register', formData);
  };

  return (
    <div className="auth-modal">
      <button className="close-btn" onClick={onClose}>×</button>
      
      <div className="auth-header">
        <h2>Code Crimping</h2>
        <p>{isLogin ? 'Selamat Datang' : 'Daftar Sekarang'}</p>
      </div>

      <div className="auth-tabs">
        <button 
          className={`tab-btn ${isLogin ? 'active' : ''}`}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button 
          className={`tab-btn ${!isLogin ? 'active' : ''}`}
          onClick={() => setIsLogin(false)}
        >
          Register
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Nama Lengkap"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}
        
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Alamat Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" className="submit-btn">
          {isLogin ? 'Masuk' : 'Daftar'}
        </button>
      </form>

      <div className="auth-footer">
        {isLogin ? (
          <p>Belum punya akun? <span onClick={() => setIsLogin(false)}>Daftar</span></p>
        ) : (
          <p>Sudah punya akun? <span onClick={() => setIsLogin(true)}>Masuk</span></p>
        )}
      </div>
    </div>
  );
}