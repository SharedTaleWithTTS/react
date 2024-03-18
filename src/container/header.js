import React from 'react';
import  Header  from '../components/Header';
import * as ROUTES from '../routes/routes';
import logo from '../logo.svg';

function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="로고오류" />
        <Header.ButtonLink to={ROUTES.LOG_IN}>로그인</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}


export default HeaderContainer;