import styled from 'styled-components';
import Header from '@/components/header';
import Chip from '@/components/Chip';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { instance } from '@/apis/instance/axios';

interface ArchiveProps {
  memberId: number;
  bdId: number;
  bdTitle: string;
  bdTag: number;
  bdImageUrl: string;
}
interface ArchiveList {
  archiveList: ArchiveProps;
}

const Archive = () => {
  const router = useRouter();

  const chips = [
    {
      label: '산책할 때',
      imageUrl: '/chipImg/pet.png',
      selectedImageUrl: '/chipImg/pet_w.png',
    },
    {
      label: '여행할 때',
      imageUrl: '/chipImg/backpack.png',
      selectedImageUrl: '/chipImg/backpack_w.png',
    },
    {
      label: '훈련할 때',
      imageUrl: '/chipImg/training.png',
      selectedImageUrl: '/chipImg/training_w.png',
    },
    {
      label: '밥먹을 때',
      imageUrl: '/chipImg/eat.png',
      selectedImageUrl: '/chipImg/eat_w.png',
    },
    {
      label: '귀여울 때',
      imageUrl: '/chipImg/cute.png',
      selectedImageUrl: '/chipImg/cute_w.png',
    },
  ];

  const [currentArchive, setCurrentArchive] = useState<ArchiveList[]>([]);
  const [selectedChip, setSelectedChip] = useState(chips[0]);

  const fetchChipData = async (chipLabel: string) => {
    switch (chipLabel) {
      case '산책할 때':
        instance.get('/api/v1/boards/1').then((data) => {
          setCurrentArchive(data.data);
          console.log(data.data);
        });
        break;
      case '여행할 때':
        instance.get('/api/v1/boards/2').then((data) => {
          setCurrentArchive(data.data);
          console.log(data.data);
        });
        break;
      case '훈련할 때':
        instance.get('/api/v1/boards/3').then((data) => {
          setCurrentArchive(data.data);
          console.log(data.data);
        });
        break;
      case '밥먹을 때':
        instance.get('/api/v1/boards/4').then((data) => {
          setCurrentArchive(data.data);
          console.log(data.data);
        });
        break;
      case '귀여울 때':
        instance.get('/api/v1/boards/5').then((data) => {
          setCurrentArchive(data.data);
          console.log(data.data);
        });
        break;
    }
  };

  const handleChipClick = (chip: {
    label: string;
    imageUrl: string;
    selectedImageUrl: string;
  }) => {
    setSelectedChip(chip);
    fetchChipData(chip.label);
  };

  const addPostOnClick = () => {
    router.push('/memory/addPost');
  };

  return (
    <TotalContainer>
      <Header />
      <h1>Archive</h1>
      <ChipsContainer>
        {chips.map((chip) => (
          <Chip
            key={chip.label}
            label={chip.label}
            selected={selectedChip === chip}
            onClick={() => {
              handleChipClick(chip);
            }}
            imageSrc={chip.imageUrl}
            selectedImageSrc={chip.selectedImageUrl}
          />
        ))}
      </ChipsContainer>
      <AddArchiveBtnContainer>
        <AddArchiveBtn onClick={addPostOnClick}>
          <AddArchiveBtnImg>
            <Image src={'/addPost.png'} alt={'addPost'} fill></Image>
          </AddArchiveBtnImg>
          <div>추억 추가하기</div>
        </AddArchiveBtn>
      </AddArchiveBtnContainer>
      <div>
        게시글 리스트 컨테이너
        {currentArchive.map((archive) => (
          <div key={archive.archiveList.bdId}>
            <div>{archive.archiveList.bdImageUrl}</div>
          </div>
        ))}
      </div>
    </TotalContainer>
  );
};

export default Archive;

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

const ChipsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  gap: 2vw;
`;

const AddArchiveBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;

  width: 80%;
`;

const AddArchiveBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 12vw;
  height: 6vh;

  border-radius: 0.7vw;
  border: 1px solid black;
  background-color: #FEF1DE;
`;

const AddArchiveBtnImg = styled.div`
  position: relative;
  width: 2.5vw;
  height: 1.5vw;
  margin-right: 0.5vw;
`;
