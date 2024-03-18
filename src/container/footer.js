import React from 'react';
import Footer from '../components/Footer';

export default function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>공지사항 </Footer.Title>
      <Footer.Break />
      <Footer.Row>
          <Footer.Link href="#">문의사항</Footer.Link>
          <Footer.Link href="#">개인정보처리방침</Footer.Link>
          <Footer.Link href="#">청소년보호정책</Footer.Link>
          <Footer.Link href="#">서비스 소개</Footer.Link>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>동화tts</Footer.Text>
    </Footer>
  );
}