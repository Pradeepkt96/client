import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';

function HomePage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    // Redirect to login if token is missing (page refresh case)
    if (!token) {
      navigate('/');
      return;
    }

    // Decode the JWT to extract the username
    const payload = JSON.parse(atob(token.split('.')[1]));
    setUsername(payload.username);

    // Redirect to login after 30 seconds
    const timer = setTimeout(() => {
      localStorage.removeItem('token');
      navigate('/');
    }, 30000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="home-container">
      <h1>Welcome, {username}!</h1>
      <p>You have successfully logged in.</p>
      <p>You will be redirected to the login page.</p>
    </div>
  );
}

export default HomePage;