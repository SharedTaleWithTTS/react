import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// 사용자의 인증 상태 확인, 해당 상태에 따라 사용자 정보 관리

export default function useAuthListener() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
  const { firebase } = useContext(FirebaseContext);
  const auth = getAuth(firebase);

  // 렌더링 될 때
  useEffect(() => {
    // firebase의 인증 상태 변경 감지하는 이벤트 리스너 등록
    const listener = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {   // 사용자가 로그인 상태인 경우(인증된 사용자)
        localStorage.setItem('authUser', JSON.stringify(authUser)); // 로컬 스토리지에 사용자 정보 저장
        setUser(authUser);  // 사용자 정보 상태 업데이트
      } else {
        localStorage.removeItem('authUser'); //로그아웃한 경우 ㄹ로컬 스토리지에서 사용자 정보 제거
        setUser(null);  
      }
    });
    // cleanup 함수를 반환하여 컴포넌트가 언마운트될 때 이벤트 리스너를 해제
    return () => listener();
  }, [auth]);

  return { user };
}