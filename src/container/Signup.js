import React, {useRef, useState} from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useAuth} from '../context/AuthContext';

const Signup = () => {

  let emailRef = useRef();
  let passwordRef = useRef();
  let passwordConfirmRef = useRef();

  let {signup} = useAuth();

  let [error, setError] = useState('');
  let [loading, setLoading] = useState(false);

  let handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    if(passwordRef.current.value !==  passwordConfirmRef.current.value){
      setLoading(false);
      return setError("Passwords do not match");
    }

    try {
      setError("");
      await signup(emailRef.current.value, passwordRef.current.value)
    }catch{
       setError("Failed to create new user");
    }finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSignup}>
            <Form.Group id="email">
              <Form.Control type="email" required placeholder="Email" ref={emailRef}/>
            </Form.Group>
            <Form.Group id="password">
              <Form.Control type="password" required placeholder="Password" className="my-4" ref={passwordRef}/>
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Control type="password" required placeholder="Password Confirm" ref={passwordConfirmRef}/>
            </Form.Group>
            <Button type="submit" className="w-100 mt-4" disabled={loading}>Sign Up</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="mt-2 text-center w-100">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  )
}

export default Signup;
