//로그인해야함. 로그인 해야 이용할 수 있도록 유도하는 페이지
import React from 'react';
import  HeaderContainer  from '../container/header';
import  JumbotronContainer  from '../container/jumbotron';
import  FooterContainer  from '../container/footer';


export default function HomePage(){
    return (
        <>
            <HeaderContainer />
            <JumbotronContainer />
            <FooterContainer />
        </>
    );
}