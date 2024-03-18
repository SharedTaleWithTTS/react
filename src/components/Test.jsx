// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const TestApi = () => {
//   const [data, setData] = useState(null);
//   const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수를 가져옵니다.

//   const onClick = async () => {
//     try {
//       const response = await axios.get(
//         'http://127.0.0.1:8000/test/test01page/',
//       );
//       setData(response.data);

//       // 요청이 성공하면 페이지를 이동합니다.
//       navigate('/test/test01page/');
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   return (
//     <div>
//       {/* 버튼을 클릭하면 onClick 함수가 호출되고, 해당 URL로 요청이 보내집니다. */}
//       <button onClick={onClick}>Go to Test01 Page</button>
//     </div>
//   );
// };

// export default TestApi;


// 겹쳐서 나옴

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import TalePage from '../pages/TalePage';

// const TestApi = () => {
//   const [pageContent, setPageContent] = useState('');
//   const [showTalePage, setShowTalePage] = useState(false);

//   useEffect(() => {
//     async function fetchPageContent() {
//       try {
//         const response = await axios.get(
//           'http://127.0.0.1:8000/test/test01page/'
//         );
//         setPageContent(response.data);
//       } catch (error) {
//         console.error('Error fetching page content:', error);
//       }
//     }

//     fetchPageContent();
//   }, []);

//   const handleButtonClick = () => {
//     setShowTalePage(true);
//   };

//   return (
//     <div>
//       {showTalePage ? (
//         <TalePage pageContent={pageContent} />
//       ) : (
//         <button onClick={handleButtonClick}>Go to Test01 Page</button>
//       )}
//     </div>
//   );
// };

// export default TestApi;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const TestApi = () => {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수를 가져옵니다.

//   const onClick = async () => {
//     try {
//       setLoading(true); // 데이터를 받아오는 중임을 표시
//       const response = await axios.get(
//         'http://127.0.0.1:8000/test/test01page/',
//       );
//       // 데이터를 받아온 후 페이지 이동
//       navigate('/test/test01page/');
//     } catch (e) {
//       console.error('Error fetching page content:', e);
//     } finally {
//       setLoading(false); // 요청 완료 후 로딩 상태를 해제
//     }
//   };

//   return (
//     <div>
//       {/* 버튼을 클릭하면 onClick 함수가 호출되고, 해당 URL로 요청이 보내집니다. */}
//       <button onClick={onClick} disabled={loading}>
//         {loading ? 'Loading...' : 'Go to Test01 Page'}
//       </button>
//     </div>
//   );
// };

// export default TestApi;



// 이거 되는 거임


// import React from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const TestApi = () => {
//   const navigate = useNavigate();

//   const onClick = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:8000/test/test01page/');
//       if (response.status === 200) {
//         navigate('/test/test01page/');
//       }
//     } catch (error) {
//       console.error('Error fetching page content:', error);
//     }
//   };

//   return (
//     <div>
//       {/* 버튼을 클릭하면 onClick 함수가 호출되고, 해당 URL로 요청이 보내집니다. */}
//       <button onClick={onClick}>Go to Test01 Page</button>
//     </div>
//   );
// };

// export default TestApi;


import React from 'react';
// import { useNavigate } from 'react-router-dom';

function TestButton() {
  // const navigate = useNavigate();

  const handleClick = () => {
    // 특정 URL로 페이지 이동
    // window.location.href = 'http://127.0.0.1:8000/test/test02page/';
    window.location.href = 'http://127.0.0.1:8000/test/test02page/';
  };

  return (
    <div>
      <button onClick={handleClick}>Go to Test01 Page</button>
    </div>
  );
}

export default TestButton;
