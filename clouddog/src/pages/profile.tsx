import styled from 'styled-components';
import Header from '../components/header';
import { useState } from 'react';
import { useEffect } from 'react';

const Home = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ProfileText = styled.p`
  color: #000;
  text-align: center;
  font-size: 1.15vw;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
  margin-top: 5.2vw;
  margin-bottom: 5.2vw;
`;

const ProfileSpace = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
`;

const ProfilePicture = styled.div<ProfilePictureProps>`
  position: relative;
  width: 21.4vw;
  height: 21.4vw;
  border-radius: 21.4vw;
  border: 1px solid #000;
  background: ${(props) =>
    `url(${props.backgroundImage}) no-repeat center/cover`};
  margin-right: 5vw;
`;

const EditIcon = styled.img`
  position: absolute;
  bottom: 10px;
  right: 12px;
  width: 4.6vw;
  height: 4.6vw;
  cursor: pointer;
`;

const UserFirst = styled.div`
  gap: 1vw;
  display: flex;
  flex-direction: row;
`;

const ProfileInput = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserNickname = styled.input`
  display: flex;
  width: 17.7vw;
  height: 1.2vw;
  padding: 1.05vw 1.15vw;
  align-items: center;
  border-radius: 0.5vw;
  border: 1px solid #000;
  background: #f3f3f3;

  color: #4e4e4e;

  font-size: 1.15vw;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const UserMind = styled.input`
  display: flex;
  width: 17.7vw;
  height: 1.2vw;
  padding: 1.05vw 1.15vw;
  align-items: center;
  border-radius: 0.5vw;
  border: 1px solid #000;
  background: #f3f3f3;

  font-size: 1.15vw;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const DogName = styled.input`
  margin-top: 1.05vw;
  padding: 1.05vw 1.15vw;
  width: 38.8vw;
  height: 1.2vw;
  border-radius: 0.5vw;
  border: 1px solid #000;
  background: #f3f3f3;
  font-size: 1.15vw;
  margin-bottom: 1.05vw;
`;

const DogEx = styled.textarea`
  border-radius: 0.5vw;
  padding: 1.05vw 1.15vw;
  border: 1px solid #000;
  background: #f3f3f3;
  width: 38.8vw;
  height: 11vw;
  font-size: 1.15vw;
  resize: none;
`;

const ButtonSpace = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.6vw;
  gap: 1vw;
`;

const EditButton = styled.div`
  display: flex;
  width: 12.8vw;
  padding: 1vw 3.6vw;
  justify-content: center;
  align-items: center;
  gap: 0.5vw;
  border-radius: 3vw;
  border: 1px solid #000;
  background: #d0d0d0;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
`;

const SaveButton = styled.div`
  display: flex;
  width: 12.8vw;
  padding: 1vw 3.6vw;
  justify-content: center;
  align-items: center;
  gap: 0.5vw;
  border-radius: 3vw;
  border: 1px solid #000;
  background: #fe8f5a;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
`;

interface ProfileData {
  nickname: string;
  recoveryPeriod: string;
  dogName: string;
  dogDescription: string;
}

//모달관련
interface ModalProps {
  show: boolean;
}

interface ModalProfileProps {
  backgroundImage: string;
}

interface ProfilePictureProps {
  backgroundImage: string;
}

const Modal = styled.div<ModalProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  width: 67.5vw;
  height: 37.35vw;
  background-color: white;

  border-radius: 12px;
  display: flex;
  padding-left: 5vw;
  padding-right: 5vw;
`;

const ModalProfile = styled.div<ModalProfileProps>`
  width: 18.75vw;
  height: 18.75vw;
  border-radius: 21.4vw;
  border: 1px solid #000;
  background: ${(props) =>
    `url(${props.backgroundImage}) no-repeat center/cover`};
  margin-top: 1vw;
`;

const Modaldiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 4vw;
`;

const ModalProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2vw;
  margin-bottom: 4vw;
`;

const SmallCircle = styled.div`
  width: 9vw;
  height: 9vw;
  border-radius: 50%;
  border: 1px solid #000;
  background: #fff;
  cursor: pointer;
  &:hover {
    background: #ececec;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 3vw;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 3.4165vw;
  gap: 2.275vw;
`;

const SaveButton2Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 4vw;
`;

const SaveButton2 = styled.button`
  width: 7.35vw;
  height: 2.5vw;
  border-radius: 3vw;
  border: 1px solid #000;
  background: #fe8f5a;
  color: #fff;

  font-family: Pretendard;
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

function Profiles() {
  const [profileData, setProfileData] = useState<ProfileData>({
    nickname: '',
    recoveryPeriod: '',
    dogName: '',
    dogDescription: '',
  });

  //프로필 이미지 저장 함수
  const [profileImage, setProfileImage] = useState<string>(
    '/default-profile.png'
  );

  //모달 창 관련 로직
  const [isModalOpen, setModalOpen] = useState(false);

  const handleEditIconClick = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const [selectedImage, setSelectedImage] = useState<string>('');

  const imageOptions = [
    '/Dog1.jpeg',
    '/Dog2.jpeg',
    '/Dog3.jpeg',
    '/Dog4.jpeg',
    '/Dog5.jpeg',
    '/Dog6.jpeg',
    '/Dog7.jpeg',
    '/Dog8.png',
  ];

  //프로필 이미지 함수
  const handleImageSelect = (image: string) => {
    setSelectedImage(image);
  };

  const handleProfileImageSave = () => {
    if (selectedImage) {
      setProfileImage(selectedImage);
      localStorage.setItem('profileImage', selectedImage); // 로컬 스토리지에 저장
      setModalOpen(false);
      alert('프로필 이미지가 저장되었습니다.');
    }
  };

  //수정하기 저장하기 관련 로직
  const [isFormEditable, setFormEditable] = useState(false); //폼 활성화, 비활성화

  useEffect(() => {
    loadProfileData();
    const storedProfileImage = localStorage.getItem('profileImage');
    if (storedProfileImage) {
      setProfileImage(storedProfileImage);
    }
    const isEditable = localStorage.getItem('isFormEditable');
    setFormEditable(isEditable !== 'false');
  }, []);

  const loadProfileData = () => {
    const storedData = localStorage.getItem('profileData');
    if (storedData) {
      setProfileData(JSON.parse(storedData));
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEdit = () => {
    setFormEditable(true);
  };

  const handleSave = () => {
    if (
      !profileData.nickname ||
      !profileData.recoveryPeriod ||
      !profileData.dogName ||
      !profileData.dogDescription
    ) {
      alert('모든 칸을 입력해주세요.');
      return;
    }
    localStorage.setItem('profileData', JSON.stringify(profileData));
    setFormEditable(false);
    alert('저장되었습니다.');
  };
  return (
    <>
      <Header />
      <Home>
        <ProfileText>
          강아지와 나의 프로필 입력을 통해
          <br />
          오래도록 기억에 남을 구름을 완성해보세요!
        </ProfileText>

        <ProfileSpace>
          <ProfilePicture backgroundImage={profileImage}>
            <EditIcon src="/edit.png" onClick={handleEditIconClick} />
          </ProfilePicture>
          <ProfileInput>
            <UserFirst>
              <UserNickname
                name="nickname"
                placeholder="사용자 닉네임"
                value={profileData.nickname}
                onChange={handleInputChange}
                disabled={!isFormEditable}
              />
              <UserMind
                name="recoveryPeriod"
                placeholder="마음 회복 기간"
                value={profileData.recoveryPeriod}
                onChange={handleInputChange}
                disabled={!isFormEditable}
              />
            </UserFirst>
            <DogName
              name="dogName"
              placeholder="반려견 이름"
              value={profileData.dogName}
              onChange={handleInputChange}
              disabled={!isFormEditable}
            />
            <DogEx
              name="dogDescription"
              placeholder="반려견 설명"
              value={profileData.dogDescription}
              onChange={handleInputChange}
              disabled={!isFormEditable}
            />

            <ButtonSpace>
              <EditButton onClick={handleEdit}>수정하기</EditButton>
              <SaveButton onClick={handleSave}>저장하기</SaveButton>
            </ButtonSpace>
          </ProfileInput>
        </ProfileSpace>
        {isModalOpen && (
          <ModalBackdrop onClick={handleModalClose}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
              <Modaldiv>
                <ModalProfile
                  backgroundImage={selectedImage || '/default-profile.png'}
                />
                <ModalContent>
                  <Row>
                    {imageOptions.slice(0, 4).map((image, index) => (
                      <SmallCircle
                        key={index}
                        style={{ backgroundImage: `url(${image})` }}
                        onClick={() => handleImageSelect(image)}
                      />
                    ))}
                  </Row>
                  <Row>
                    {imageOptions.slice(4, 8).map((image, index) => (
                      <SmallCircle
                        key={index}
                        style={{ backgroundImage: `url(${image})` }}
                        onClick={() => handleImageSelect(image)}
                      />
                    ))}
                  </Row>
                  <SaveButton2Container>
                    <SaveButton2 onClick={handleProfileImageSave}>
                      저장하기
                    </SaveButton2>
                  </SaveButton2Container>
                </ModalContent>
              </Modaldiv>
            </ModalContainer>
          </ModalBackdrop>
        )}
      </Home>
    </>
  );
}

export default Profiles;
