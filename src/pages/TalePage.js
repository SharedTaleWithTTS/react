import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './TalePage.css';

function TalePage() {
  const [pageContent, setPageContent] = useState('');

  useEffect(() => {
    async function fetchPageContent() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/test/test02page/'); // Django의 URL 경로로 요청을 보냄
        setPageContent(response.data); // 가져온 페이지의 내용을 상태에 저장
      } catch (error) {
        console.error('Error fetching page content:', error);
      }
    }

    fetchPageContent();
  }, []);
  // pageContent에 html를 가져옴
  // 일반적으로 코드에서 HTML을 설정하는 것은 사이트 간 스크립팅 공격에 쉽게 노출될 수 있기 때문에 위험
  return (
    <div>
      <h2>이야기 페이지</h2>
      <div dangerouslySetInnerHTML={{ __html: pageContent }} /> {/* 이 방법은 장고 템플릿 문법이 안먹힘 */}
      /
    </div>
  );
}

export default TalePage;


