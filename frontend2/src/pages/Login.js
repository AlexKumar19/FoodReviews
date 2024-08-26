// src/pages/Login.js
import React, { useState } from 'react';
import { loginUser } from '../services/api';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);
      console.log('Logged in successfully:', response.data);
      // Redirect to home or another page after login
    } catch (err) {
      console.error('Login error:', err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="Email"
          required
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="Password"
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
