import React, {useRef, useState} from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import {useAuth} from '../context/AuthContext';

const UpdateProfile = () => {

  let emailRef = useRef();
  let passwordRef = useRef();
  let passwordConfirmRef = useRef();

  let {currentUser, updateUserEmail, updateUserPassword} = useAuth();

  let [error, setError] = useState('');
  let [loading, setLoading] = useState(false);
  let history = useHistory();

  let handleUpdate = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if(passwordRef.current.value !==  passwordConfirmRef.current.value){
      setLoading(false);
      return setError("Passwords do not match");
    }

    let promises = []

    if(emailRef.current.value !== currentUser.email) {
      promises.push(updateUserEmail(emailRef.current.value));
    }

    if(passwordRef.current.value) {
      promises.push(updateUserPassword(passwordRef.current.value));
    }

    Promise.all(promises)
    .then(() => {
      setError('');
      history.push('/');
    }).catch(() => {
      setError('Failed to update profile');
    }).finally(() => {
      setLoading(false);
    })
  }

  return (
    <div className="w-100" style={{maxWidth: "400px"}}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleUpdate}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required placeholder="Email" ref={emailRef} defaultValue={currentUser.email}/>
            </Form.Group>
            <Form.Group id="password" className="my-4">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Leave blank to keep same" ref={passwordRef}/>
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirm</Form.Label>
              <Form.Control type="password" placeholder="Leave blank to keep same" ref={passwordConfirmRef}/>
            </Form.Group>
            <Button type="submit" className="w-100 mt-4" disabled={loading}>Update Account</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="mt-2 text-center w-100">
        <Link to="/">Cancel</Link>
      </div>
    </div>
  )
}

export default UpdateProfile;
