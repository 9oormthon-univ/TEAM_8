import Header from '@/components/header';
import FriendCard from '@/components/FriendCard';
import styled from 'styled-components';

import { ChangeEvent, useState, useEffect } from 'react';

const AddFriedn = () => {
  const [friendEmail, setFriendEmail] = useState<string>('');

  const [myEmail, setMyEmail] = useState<string>('');
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('userEmail')) {
      setMyEmail(localStorage.getItem('userEmail') as string);
      setIsAuth(!isAuth);
    } else {
      setIsAuth(false);
    }
  }, []);

  const onChangeFriendEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setFriendEmail(e.target.value);
  };

  return (
    <TotalContainer>
      <Header />
      <TitleText>친구 찾기</TitleText>
      <InputContainer>
        <InputBox>
          <FriendEmail
            type="text"
            placeholder="친구 구글 이메일"
            value={friendEmail}
            onChange={onChangeFriendEmail}
          />
          <SerchBtn></SerchBtn>
        </InputBox>
        <InputBoxDisable>
          <MyEmailInp type="text" placeholder="내 이메일" disabled />
          <MyEmailTxt>{myEmail}</MyEmailTxt>
        </InputBoxDisable>
      </InputContainer>

      <FriendCard />
    </TotalContainer>
  );
};

export default AddFriedn;

const TotalContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  width: calc(100vw - (100vw - scrollbarWidth));
  height: 100vh;

  gap: 6vh;
`;

const TitleText = styled.div`
  font-size: 2vw;
  font-weight: bold;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.3vh;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  width: 40vw;
  height: 2vw;

  padding: 1vw;

  border: 1px solid black;

  &:focus-within {
    border: 2px solid #f1824d;
    ::placeholder {
      color: #f1824d;
    }
  }
`;

const FriendEmail = styled.input`
  all: unset;
  width: 100%;
  height: 100%;

  overflow: hidden;
  white-space: nowrap;
  background: #fff;
  text-align: left;
  font-family: Pretendard;
  font-size: 1.2vw;
`;

const SerchBtn = styled.div`
  width: 2vw;
  height: 2vw;

  border-radius: 50%;

  background-color: #e5e5e5;
`;

const InputBoxDisable = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  width: 40vw;
  height: 2vw;

  padding: 1vw;

  border: 1px solid #f1824d;

  background-color: #fef1de;
`;

const MyEmailInp = styled.input`
  all: unset;
  width: 100%;
  height: 100%;

  overflow: hidden;
  white-space: nowrap;
  background: #fef1de;
  text-align: left;

  &::placeholder {
    color: #f1824d;
    font-family: Pretendard;
    font-size: 1.2vw;
    font-style: normal;
    line-height: normal;
  }
`;

const MyEmailTxt = styled.div`
  color: #f1824d;
  font-family: Pretendard;
  font-size: 1.2vw;
  font-style: normal;
  line-height: normal;
`;
