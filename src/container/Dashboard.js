import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {

  let [error, setError] = useState('');
  let {currentUser, logout} = useAuth();
  let history = useHistory();

  let handleLogout = async () => {
    setError('')

    try {
      await logout();
      history.push('/login');
    }catch {
      setError('Failed to log out.');
    }
  }

  return (
    <div className="w-100" style={{maxWidth: "400px"}}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Dashboard</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email: </strong>{currentUser.email}
          <Link to="/update_profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
        </Card.Body>
      </Card>
      <div className="mt-2 text-center w-100">
        <Button variant="link" onClick={handleLogout}>Log Out</Button>
      </div>
    </div>
  )
}

export default Dashboard;
