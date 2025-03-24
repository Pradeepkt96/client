import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className="home-container">
      <h1>Welcome to the Home Page!</h1>
      <p>Access granted. Enjoy your session.</p>
    </div>
  );
}

export default HomePage;