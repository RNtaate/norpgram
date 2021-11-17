import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {

  let [error, setError] = useState('')
  let {currentUser, logout} = useAuth();

  let handleLogout = async () => {
    try{
      setError('')
      await logout();
    }catch {
      setError('Failed to log out');
    }
  }

  return (
    <header className="app-title-header w-100 pt-3">
      <nav 
        className="d-flex justify-content-between align-items-center"
      >
        <h2 className="app-title-h2">NorpGram</h2>
        {
          currentUser &&
          <div className="text-secondary">
            <strong>Hi, </strong>
            {currentUser.email}
            <Button size="sm" variant="outline-dark" className="ml-3" onClick={handleLogout}>Log Out</Button>
          </div>
        }
      </nav>
      {error && <Alert variant="danger">{error}</Alert>}
    </header>
  )
}

export default Navbar;
