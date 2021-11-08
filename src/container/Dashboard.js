import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import UploadForm from './uploadform/UploadForm';
import ImageGrid from './ImageGrid';

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
    <div 
      className="w-100 dashboard-div d-flex flex-column align-items-center"
    >
      <h2 className="dashboard-heading mb-4">Current Pictures</h2>
      <p 
        className="text-secondary"
        style={{letterSpacing: "1px"}}
      >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <UploadForm />
      <ImageGrid />
    </div>
  )
}

export default Dashboard;
