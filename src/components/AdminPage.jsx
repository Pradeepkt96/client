import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role !== 'admin') {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Full access granted.</p>
    </div>
  );
}

export default AdminPage;