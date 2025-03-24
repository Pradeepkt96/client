import { useState } from 'react';
import axios from 'axios';
import '../styles/UpdateUserForm.css';

function UpdateUserForm() {
  const [email, setEmail] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newRole, setNewRole] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('http://localhost:5000/update-user', {
        email,
        newUsername,
        newEmail,
        newPassword,
        newRole,
      });
      setMessage(response.data.message);
      // Reset form fields
      setEmail('');
      setNewUsername('');
      setNewEmail('');
      setNewPassword('');
      setNewRole('');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error updating user details');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleUpdateUser} className="update-user-form">
        <h2>Update User Details</h2>
        <input
          type="email"
          placeholder="Current User Email (Required)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="New Username (Optional)"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="New Email (Optional)"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="New Password (Optional)"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <select value={newRole} onChange={(e) => setNewRole(e.target.value)}>
          <option value="">Select Role (Optional)</option>
          <option value="admin">Admin</option>
          <option value="customer">Customer</option>
        </select>
        <button type="submit">Update User</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}

export default UpdateUserForm;