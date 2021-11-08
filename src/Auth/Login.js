import React, {useRef, useState} from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import {useAuth} from '../context/AuthContext';

const Login = () => {

  let emailRef = useRef();
  let passwordRef = useRef();

  let {login} = useAuth();

  let [error, setError] = useState('');
  let [loading, setLoading] = useState(false);
  let history = useHistory();

  let handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      setError("");
      await login(emailRef.current.value, passwordRef.current.value)
      history.push('/');
    }catch{
       setError("Failed to Log in");
       setLoading(false);
    }
  }

  return (
    <div className="w-100" style={{maxWidth: "400px", fontFamily: "'Noto Serif', serif"}}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleLogin}>
            <Form.Group id="email">
              <Form.Control type="email" required placeholder="Email" ref={emailRef}/>
            </Form.Group>
            <Form.Group id="password">
              <Form.Control type="password" required placeholder="Password" className="mt-4" ref={passwordRef}/>
            </Form.Group>
            <Button type="submit" className="w-100 mt-4" disabled={loading} variant="secondary">Log In</Button>
          </Form>

          <div className="mt-3 text-center w-100">
            <Link to="/forgot_password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="mt-2 text-center w-100">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  )
}

export default Login;
