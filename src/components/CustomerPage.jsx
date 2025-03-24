import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CustomerPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role !== 'customer') {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div>
      <h2>Customer Dashboard</h2>
      <p>Limited access granted.</p>
    </div>
  );
}

export default CustomerPage;