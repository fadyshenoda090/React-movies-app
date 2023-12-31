import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { isLoginContext } from '../../contexts/isLogin';

function LogIn() {
  const navigate = useNavigate();
  const { isLogin, setIsLogin } = useContext(isLoginContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogIn = () => {
    // Check your credentials logic here
    if (email && password) {
      setIsLogin(true);
      navigate('/');
    } else {
      alert('Please register first');
    }
  };


  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: '78.8vh', width: '100vw' }}>
      <Form className='text-white' autoComplete='off'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" onClick={handleLogIn}>
          LogIn
        </Button>
      </Form>
    </div>
  );
}

export default LogIn;
