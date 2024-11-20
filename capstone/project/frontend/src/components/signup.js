import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/students/register', { name, email, password });
      localStorage.setItem('token', res.data.token);
      alert('Registration successful');
    } catch (err) {
      alert('Error registering');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
