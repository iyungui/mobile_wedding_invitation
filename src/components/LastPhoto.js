import React from "react";
import styled from "styled-components";

const PhotoContainer = styled.div`
`;

const LastImage = styled.img`
  width: 100%;
  height: auto; /* 이미지 비율을 유지하면서 세로 길이를 자동으로 조정 */
  object-fit: cover; /* 이미지가 컨테이너를 가득 채우도록 */
`;


const LastPhoto = () => (
  <PhotoContainer>
    <LastImage src="/photos/lastPhoto.jpeg" alt="Bride" />
  </PhotoContainer>
);

export default LastPhoto;
