import styled from 'styled-components';
import { auth } from '@/apis/instance/firebase';
import { useRouter } from 'next/router';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Login = () => {
  // 라우터
  const router = useRouter();

  // Popup형식의 구글로그인 함수
  const googleLogin = async () => {
    // Google 제공업체 객체의 인스턴스를 생성합니다
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account',
    });

    // 팝업 사용
    await signInWithPopup(auth, provider);

    // accessToken 넣기
    const accessToken = await auth.currentUser?.getIdToken().then((token) => {
      localStorage.setItem('accessToken', token);
      localStorage.setItem('userName', auth.currentUser?.displayName as string);
    });

    // 로그인 후 페이지 이동
    if (auth.currentUser !== null) {
      router.push('/');
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <button onClick={googleLogin}>구글 로그인</button>
    </div>
  );
};

export default Login;