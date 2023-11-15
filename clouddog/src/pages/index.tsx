import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Image from 'next/image';
import Header from '@/components/header';
import { instance } from '@/apis/instance/axios';
import { useEffect } from 'react';

const blink = keyframes`
  50% { opacity: 0; }
`;

interface GliterImageProps {
  animate: boolean;
}

const GliterImage = styled.img<GliterImageProps>`
  position: absolute;
  width: 2.1vw;
  height: 2.1vw;
  animation: ${(props) =>
    props.animate
      ? css`
          ${blink} 1s ease-in-out infinite
        `
      : 'none'};
`;
const CloudContainer = styled.div`
  width: 100%;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3vw;
  margin-bottom: 5vw;
  position: relative;
`;

const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const CommentInputContainer = styled.div`
  width: 83vw;
  position: relative;
  margin-bottom: 2.5vw;
`;

const CommentBox = styled.input`
  width: 100%;
  height: 5.2vw;
  display: flex;
  border-radius: 1vw;
  border: 1.5px solid #000;
  overflow: hidden;
  white-space: nowrap;
  background: #fff;
  text-align: left;
  justify-content: flex-start;
  padding-left: 1vw;
  font-size: 1.2vw;

  &::placeholder {
    color: #000000;
    font-family: Pretendard;
    font-size: 1.2vw;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const SubmitButton = styled.img`
  position: absolute;
  right: 0.5vw;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 3vw;
  height: 3vw;
`;

const Comment = styled.div`
  color: #000;
  font-size: 1.3vw;
  border: 1.5px solid #000;
  padding: 1vw 2.5vw;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  min-width: 5vw;
  max-width: 79vw;

  max-height: 6vw;
  min-height: 4vw;
  border-radius: 5vw;
  background: #fef1de;
  margin-top: 1.5vw;
  text-align: left;
  display: inline-block;
  align-items: flex-start;
  justify-content: flex-start;
  word-break: break-word;
  overflow-wrap: break-word;
  overflow: hidden;
`;

const PostContainer = styled.div`
  width: 87%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: flex-end;
`;

const CommentWithTime = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-end;
  flex-direction: row-reverse;
  width: 90%;
  margin-bottom: 1vw;
`;

const CommentTime = styled.span`
  color: #000;
  font-size: 1vw;
  margin-left: 1vw;
  white-space: nowrap;
`;

const ImageContainer = styled.div`
  width: 48vw;
  height: 20vw;
`;

interface CommentType {
  msgContent: string;
  msgTime: string;
  msgId?: number;
}

export default function Home() {
  const [animate, setAnimate] = useState<boolean>(false);
  const [comments, setComments] = useState<CommentType[]>([]);
  const [commentInput, setCommentInput] = useState<string>('');

  useEffect(() => {
    // const fetchMessages = async () => {
    //   try {
    //     const response = await instance.get("/v1/messages");
    //     console.log(response.data);
    //     setComments(
    //       response.data.map((msg: CommentType) => ({
    //         id: msg.msgId,
    //         text: msg.msgContent,
    //         time: msg.msgTime,
    //       }))
    //     );
    //   } catch (error) {
    //     console.error("메시지를 불러오는 중 오류 발생:", error);
    //   }
    // };
    // fetchMessages();
  }, []);

  const handleAddComment = () => {
    //댓글 추가
    const newComment: CommentType = {
      msgContent: commentInput,
      msgTime: new Date().toISOString().split('T')[0],
    }; //댓글 시간 구현 부분

    setComments([newComment, ...comments]);
    setCommentInput('');
    setAnimate(true);
    setTimeout(() => setAnimate(false), 3000);

    // try {
    //   instance.post("v1/messages", {
    //     msgContent: newComment.msgContent,
    //     msgTime: newComment.msgTime,
    //   });
    //   console.log("댓글 저장 완료");
    // } catch (error) {
    //   console.error("오류 발생:", error);
    // }
  };

  return (
    <div>
      <Header />
      <CloudContainer>
        <Main>
          <GliterImage
            animate={animate}
            src="/Gliter 0.png"
            style={{ width: '2.1vw', height: '2.1vw', top: '5%', left: '23%' }}
          />
          <GliterImage
            animate={animate}
            src="/Gliter 2.png"
            style={{ width: '1.4vw', height: '1.4vw', top: '20%', left: '20%' }}
          />
          <GliterImage
            animate={animate}
            src="/Gliter 3.png"
            style={{
              width: '1.4vw',
              height: '1.4vw',
              top: '10%',
              right: '44%',
            }}
          />
          <GliterImage
            animate={animate}
            src="/Gliter 5.png"
            style={{ width: '1.8vw', height: '1.8vw', top: '5%', right: '25%' }}
          />
          <GliterImage
            animate={animate}
            src="/Gliter 7.png"
            style={{ width: '1vw', height: '1vw', top: '2%', right: '24%' }}
          />
          <ImageContainer>
            <Image
              src="/cloud.png"
              alt="구름"
              width={527}
              height={320}
              layout="responsive"
            />
          </ImageContainer>
          <GliterImage
            animate={animate}
            src="/Gliter 3.png"
            style={{ width: '4vw', height: '4vw', top: '30%', right: '21%' }}
          />
          <GliterImage
            animate={animate}
            src="/Gliter 6.png"
            style={{ width: '2vw', height: '2vw', top: '20%', right: '27%' }}
          />
          <GliterImage
            animate={animate}
            src="/Gliter 4.png"
            style={{ width: '1vw', height: '1vw', top: '80%', left: '25%' }}
          />
          <GliterImage
            animate={animate}
            src="/Gliter 5.png"
            style={{ width: '3.5vw', height: '3.5vw', top: '85%', left: '29%' }}
          />
        </Main>
      </CloudContainer>

      <CommentContainer>
        <CommentInputContainer>
          <CommentBox
            placeholder="댕댕이에게 하고 싶은 말을 입력해보세요"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            maxLength={200}
          />
          <SubmitButton
            src="/comment.png"
            alt="제출"
            onClick={handleAddComment}
          />
        </CommentInputContainer>

        <PostContainer>
          {comments.map((comment, index) => (
            <CommentWithTime key={index}>
              <Comment>{comment.msgContent}</Comment>
              <CommentTime>{comment.msgTime}</CommentTime>
            </CommentWithTime>
          ))}
        </PostContainer>
      </CommentContainer>
    </div>
  );
}
