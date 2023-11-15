import styled from 'styled-components';
import Image from 'next/image';
import BackImg from '@/styles/login.module.css';

import Header from '@/components/header';

const FriendList = () => {
  return (
    <TotalContainer>
      <Header />
      <ExplainContainer>
        <TitleText>Cloud</TitleText>
        <ExplainText>강아지와 친구를 맺고, 구름을 방문해보세요!</ExplainText>
        <FriednBtn> <AddText>+</AddText> 친구 찾기</FriednBtn>
      </ExplainContainer>
      <Image
        className={BackImg.img}
        src={'/LoginBackImg.png'}
        alt={'LoginBackImg'}
        fill
      ></Image>
    </TotalContainer>
  );
};

export default FriendList;

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
const ExplainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.3vh;
`;

const TitleText = styled.div`
  font-size: 2vw;
  font-weight: bold;
`;
const ExplainText = styled.div`
  width: 20.88vw;
  text-align: center;
  font-size: 1vw;
  font-weight: 600;
`;

const FriednBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  width: 8.5vw;
  height: 5vh;

  padding-right: 0.2vw;

  gap: .5vw;

  border: 2px solid black;
  border-radius: 2vw;

  color: white;
  background-color: #F1824D;

  font-size: 1.1vw;
  font-weight: 600;

  transition: 0.2s;
  &:hover {
    cursor: pointer;
  }

  &:active {
    transition: 0.2s;
    transform: translateY(2px);
  }
`;

const AddText = styled.span`
  text-align: center;
  font-size: 2.5vw;
  font-weight: lighter;
  padding-bottom: 0.5vw;
`;
