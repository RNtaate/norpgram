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
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Dashboard</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email: </strong>{currentUser.email}
          <Link to="/updateprofile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
        </Card.Body>
      </Card>
      <div className="mt-2 text-center w-100">
        <Button variant="link" onClick={handleLogout}>Log Out</Button>
      </div>
    </>
  )
}

export default Dashboard;
