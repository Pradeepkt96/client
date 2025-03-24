import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginForm.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', response.data.role);
      navigate('/home'); // Redirect to Home Page on successful login
    } catch (error) {
      setMessage('Invalid credentials');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}

export default LoginForm;