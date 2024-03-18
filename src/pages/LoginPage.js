import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; //useHistory -> useNavigate
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components/Form';
import  HeaderContainer  from '../container/header';
import  FooterContainer  from '../container/footer';
import * as ROUTES from '../routes/routes';
import { signInWithEmailAndPassword } from 'firebase/auth';


export default function LoginPage() {
  const navigate = useNavigate();
  const { auth } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || emailAddress === '';

  const handleLogin = (event) => { 
    event.preventDefault();

    return signInWithEmailAndPassword(auth, emailAddress, password)
      .then(() => {
        navigate(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>로그인</Form.Title>
          {error && <Form.Error data-testid="error">{error}</Form.Error>}

          <Form.Base onSubmit={handleLogin} method="POST">
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit" data-testid="log-in">
              로그인
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            아이디가 없다면? <Form.Link to="/signup">회원 가입</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}