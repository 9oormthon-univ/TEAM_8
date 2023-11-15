import Header from '@/components/header';
import FriendCard from '@/components/FriendCard';
import styled from 'styled-components';

import { ChangeEvent, useState } from 'react';

const AddFriedn = () => {
  const [friendEmail, setFriendEmail] = useState<string>('');

  const onChangeFriendEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setFriendEmail(e.target.value);
  };

  return (
    <TotalContainer>
      <Header />
      <div>친구 찾기</div>
      <InputContainer>
        <InputBox>
          <FriendEmail
            type="text"
            placeholder="친구 구글 이메일"
            value={friendEmail}
            onChange={onChangeFriendEmail}
          />
        </InputBox>

        <input type="text" placeholder="내 이메일" disabled />
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

  gap: 10vh;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.3vh;
`;

const InputBox = styled.div``;

const FriendEmail = styled.input``;
