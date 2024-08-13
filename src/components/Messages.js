import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const MessageContainer = styled.div`
  padding: 10px;
`;

const Message1 = styled(motion.p)`
  font-size: 13px;
  font-family: 'MaruBuri-extraLight';
  margin-bottom: 100px;
`;

const Highlight = styled.span`
  font-size: 13px;
  font-family: 'MaruBuri-light';
`;

const Message3 = styled(motion.p)`
  font-size: 14px;
  font-family: 'MaruBuri-regular';
  margin-bottom: 150px;
`;

const Message4 = styled(motion.p)`
  color: #111111;
  font-size: 16px;
  font-weight: 550;
  margin-bottom: 20px;
`;

const PlaceImage = styled(motion.img)`
  width: 30%;
  height: auto;
  object-fit: cover;
  margin-bottom: 150px;
`;


const messageVariants = {
  hidden: { opacity: 0, y: 40 },  // 아래에 위치하고 투명
  visible: {
    opacity: 1,
    y: 0,  // 제자리로 이동
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

export const Messages = () => (
  <MessageContainer>
    <Message1
      variants={messageVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      어떤 특별한 사람은 행성 하나보다
      <br />
      더 큰 의미를 가질 때가 있어요.
      <br />
      <br />
      그걸 이해하는 사람이 있고
      못하는 사람이 있겠지만,
      <br />
      저한텐 엄청 분명한 문제에요.
      <br />
      <br />
      <Highlight>&lt;지구에서 한아뿐&gt;, 정세랑 지음</Highlight>
    </Message1>


    <Message3
      variants={messageVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      함께 있을 때,
      <br />
      서로를 더 빛나게 해주는 사람을 만났습니다
      <br />
      두 개의 빛이 하나가 되어
      <br />
      평생을 더욱이 밝혀보려 합니다
      <br />
      <br />
      어떤 가을은 더 낭만적이에요
      <br />
      올해 가을이 그리하여 저희 두 사람, 결혼합니다
      <br />
      예쁜 빛이 두 사람에게 내려앉는 가을날
      <br />
      설레는 첫걸음을 함께 빛내주세요
    </Message3>
    <Message4
      variants={messageVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      류성철·주연희의 차남 류인창
      <br />
      임정임의 장녀 이에스더
      <br />
      2024.09.22 일요일 11:30 빌라드지디 청담
    </Message4>
    <PlaceImage
      src='/photos/wedding_hole_logo.png'
      alt='logo'
      variants={messageVariants}  // 동일한 애니메이션 적용
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    />
  </MessageContainer>
);


/*
어떤 특별한 사람은 행성 하나보다
더 큰 의미를 가질 때가 있어요. 
그걸 이해하는 사람이 있고 못하는 사람이 있겠지만, 저한텐 엄청 분명한 문제에요.
<지구에서 한아뿐>, 정세랑 지음
*/