import React, {useRef, useState} from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import {useAuth} from '../context/AuthContext';

const ForgotPassword = () => {

  let emailRef = useRef();

  let {resetPassword} = useAuth();

  let [error, setError] = useState('');
  let [message, setMessage] = useState('');
  let [loading, setLoading] = useState(false);

  let handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      setMessage('');
      setError("");
      await resetPassword(emailRef.current.value);
      setMessage('Check your inbox for further instructions');
    }catch{
       setError("Failed to reset password, Please check your email and internet and try again later");
    }finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-100 auth-form-div" style={{maxWidth: "400px", fontFamily: "'Noto Serif', serif"}}>
      <Card className="auth-form-card">
        <Card.Body>
          <h2 className="text-center mb-4 text-secondary">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleLogin}>
            <Form.Group id="email">
              <Form.Control type="email" required placeholder="Email" ref={emailRef}/>
            </Form.Group>
            <Button type="submit" className="w-100 mt-4" disabled={loading} variant="secondary">Reset</Button>
          </Form>

          <div className="mt-3 text-center w-100">
            <Link to="/login">Login</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="mt-2 text-center w-100 text-secondary">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  )
}

export default ForgotPassword;
