import styled from 'styled-components';
import Header from '@/components/header';
import Image from 'next/image';
import SideBar from '@/components/SideBar';
import { ChangeEvent, useState } from 'react';

const AddPost = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const img = URL.createObjectURL(e.target.files[0]);
      setImage(img);
    }
  };

  return (
    <TotalContainer>
      <Header />
      <HalfContainer>
        <SideBar />
        <HeaderContainer>
          <FirstContainer>
            <ImageContainer>
              <div>
                <HiddenInput
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  id="fileInput"
                />
                <ImageContainer
                  style={{
                    background: image
                      ? `url(${image}) no-repeat center/cover`
                      : `url(/postDefaltImg.png) no-repeat center/cover`,
                  }}
                  onClick={() => document.getElementById('fileInput')?.click()}
                ></ImageContainer>
              </div>
            </ImageContainer>
            <TextContainer>
              
            </TextContainer>
          </FirstContainer>
        </HeaderContainer>
      </HalfContainer>
    </TotalContainer>
  );
};

export default AddPost;

const TotalContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  width: calc(100vw - (100vw - scrollbarWidth));
  height: 100vh;

  gap: 5vw;
`;

const HalfContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  gap: 1vw;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  background-color: aquamarine;
`;
const HiddenInput = styled.input`
  display: none;
`;

const FirstContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1vw;
`;

const ImageContainer = styled.div`
  position: relative; // 이미지를 중앙에 배치하기 위해 필요

  display: flex;
  align-items: center;
  justify-content: center;

  width: 20vw;
  height: 20vw;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid #000;
  background: var(--4, #f2f2f2);
`;

const TextContainer = styled.div`
  width: 44.4vw;
  height: 20vw;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid #000;
  background: var(--2, #fef1de);
`;
