import styled from 'styled-components';
import LocalStorage from '@/constants/LocalStorage';
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

const onClick = () => {};

const FriendCard = () => {
  /*
  useEffect(() => {
    if (localStorage.getItem('userEmail')) {
      setMyEmail(localStorage.getItem('userEmail') as string);
      setIsAuth(!isAuth);
    } else {
      setIsAuth(false);
    }
  }, []);
  */

  const [imgData, setImgData] = useState<ImgList>();

  useEffect(() => {
    instance.get('/api/v1/success').then((data) => {
      setImgData(data.data);
      console.log(data);
    });
  }, []);

  return (
    <div>
      <h1>Friend Card</h1>
    </div>
  );
};

export default FriendCard;
