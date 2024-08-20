import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 8px 0;
  background-color: transparent;
  border: 1px solid #d3d3d3;
  color: #303030;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  margin-top: 10px;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  display: block;
  font-family: 'MaruBuri-extralight', 'Noto Sans KR', sans-serif; 
`;


const KakaoShareButton = () => {
  const sendKakaoMessage = () => {
    if (window.Kakao) {
      window.Kakao.Share.sendCustom({
        templateId: 111107,
        installTalk: false,
      });
    } else {
      console.error("Kakao SDK is not available");
    }
  };

  return (
    <Button onClick={sendKakaoMessage}>
      카카오톡으로 공유하기
    </Button>
  );
};

export default KakaoShareButton;
