import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; //useHistory -> useNavigate
import { FirebaseContext } from '../context/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import  Form  from '../components/Form';
import  HeaderContainer  from '../container/header';
import  FooterContainer  from '../container/footer';
import * as ROUTES from '../routes/routes';



export default function SignupPage() {
  const navigate = useNavigate();   // history -> navigate
  const { auth } = useContext(FirebaseContext);
    
  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // 이름, 이메일, 비밀번호 미입력시 회원가입 버튼 비활성화
  const isInvalid = firstName === '' || password === '' || emailAddress === '';
  const handleSignup = (event) => {
    event.preventDefault(); 
    
    // 아이디 생성
    return createUserWithEmailAndPassword(auth, emailAddress, password)
      .then((result) =>
        updateProfile(result.user, {    // updateProfile -> 사용자의 프로필을 업데이트
          displayName: firstName,
          photoURL: Math.floor(Math.random() * 5) + 1,  // 랜덤한 숫자로 프로필 사진 설정
        }).then(() => {
            // BrowsePage로 이동시킴 -> 그 전에 이동하려면 로그인이 되어있어야함
          navigate.push(ROUTES.BROWSE); // history -> navigate
        })
      )
      .catch((error) => {   // 에러 발생시 초기화
        setFirstName('');
        setEmailAddress('');
        setPassword('');
        setError(error.message);    // 하고 에러메시지 출력
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>회원가입</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              placeholder="First name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
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
            <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-up">
              회원가입
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            아이디가 있으세요? <Form.Link to="/login">로그인</Form.Link>
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