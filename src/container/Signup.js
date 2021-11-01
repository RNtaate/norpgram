import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const Signup = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h2>Sign Up</h2>
          <Form>
            <Form.Group id="email">
              <Form.Control type="email" required placeholder="Email"/>
            </Form.Group>
            <Form.Group id="password">
              <Form.Control type="password" required placeholder="Password" className="my-4"/>
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Control type="password" required placeholder="Password Confirm"/>
            </Form.Group>
            <Button type="submit" className="w-100 mt-4">Sign Up</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="mt-2 text-center w-100">
        Already have an account? Log in
      </div>
    </>
  )
}

export default Signup;
