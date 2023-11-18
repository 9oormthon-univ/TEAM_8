import styled from 'styled-components';
import { instance } from '@/apis/instance/axios';
import { useEffect, useState } from 'react';

interface FriendCard {
  friendId: number;
  friendImg: string;
  friendName: string;
}

interface FriendList {
  friendList: FriendCard[];
}

interface Img {
  imageId: number;
  imageUrl: string;
}

interface ImgList {
  imgList: Img[];
}

const FriendCard = () => {
  const [imgData, setImgData] = useState<ImgList>();

  return (
    <div>
      <h1>Friend Card</h1>
    </div>
  );
};

export default FriendCard;
