import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const MessageContainer = styled.div`
  margin-bottom: 100px;
`;

const Message3 = styled(motion.p)`
  font-size: 14px;
  font-family: "MaruBuri-regular";
  color: #303030;
  margin-top: 100px;
  margin-bottom: 140px;
`;

const Name = styled(motion.p)`
  color: #303030;
  font-family: "MaruBuri-regular";
  font-size: 16px;
  margin-top: 100px;
`;

const HighLight = styled.span`
  color: #272727;
  font-family: "MaruBuri-semibold";
`;


const PlaceName = styled(motion.p)`
  color: #303030;
  font-size: 15px;
  font-family: "MaruBuri-regular";
  margin-top: 20px;
`;

const PlaceImage = styled(motion.img)`
  width: 40%;
  height: auto;
  object-fit: cover;
`;

const LastImage = styled(motion.img)`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-top: 40px;
`;

const messageVariants = {
  hidden: { opacity: 0, y: 100 }, // 아래에 위치하고 투명
  visible: {
    opacity: 1,
    y: 0, // 제자리로 이동
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const Messages = () => (
  <MessageContainer>
        <Name
      variants={messageVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <HighLight>류성철·주연희</HighLight>의 차남 <HighLight>류인창</HighLight>
      <br />
      <HighLight>임정임</HighLight>의 장녀 <HighLight>이에스더</HighLight>
    </Name>



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

    <PlaceName
      variants={messageVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      2024년 9월 22일 일요일 오전 11시 30분
      <br/>
      <HighLight>빌라드지디 청담</HighLight>
    </PlaceName>

    <PlaceImage
      src="/photos/wedding_hole_logo.png"
      alt="logo"
      variants={messageVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    />

    <LastImage      
      src="/photos/profile.jpeg"
      alt="logo"
      variants={messageVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    />



  </MessageContainer>
);


