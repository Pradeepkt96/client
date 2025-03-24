import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/LoginForm.css';

function LoginForm() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/home');
    } catch (error) {
      setMessage('Invalid credentials');
    }
  };

  // Handle Registration
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/register', { username, email, password });
      setMessage('User registered successfully! You can now log in.');
      setIsRegistering(false);
    } catch (error) {
      setMessage('User already exists');
    }
  };

  return (
    <div className="container">
      <form onSubmit={isRegistering ? handleRegister : handleLogin} className="login-form">
        <h2>{isRegistering ? 'Register' : 'Login'}</h2>

        {isRegistering && (
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>

        <p onClick={() => setIsRegistering(!isRegistering)} className="toggle-link">
          {isRegistering ? 'Already have an account? Login' : 'New here? Register'}
        </p>

        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}

export default LoginForm;