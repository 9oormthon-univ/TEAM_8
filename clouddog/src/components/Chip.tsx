import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

interface ChipProps {
  label: string;
  selected: boolean;
  onClick: () => void;
  imageSrc: string;
  selectedImageSrc: string;
}

const Chip = ({
  label,
  selected,
  onClick,
  imageSrc,
  selectedImageSrc,
}: ChipProps) => {
  return (
    <ChipButton selected={selected} onClick={onClick}>
      <ImgContainer>
        <Image src={selected ? selectedImageSrc : imageSrc} alt={label} fill />
      </ImgContainer>
      {label}
    </ChipButton>
  );
};

export default Chip;

const ChipButton = styled.button<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 10vw;
  height: 5vh;

  border-radius: 2vw;
  border: 1px solid black;

  background-color: ${(props) => (props.selected ? '#FE8F5A' : 'white')};
  color: ${(props) => (props.selected ? 'white' : 'black')};
`;

const ImgContainer = styled.div`
  position: relative;
  width: 1vw;
  height: 1vw;
  margin-right: 0.5vw;
`;