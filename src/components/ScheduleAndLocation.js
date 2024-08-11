import React from 'react';
import styled from 'styled-components';
import Map from './Map';
import Address from './Address'

const SectionContainer = styled.div`
  padding: 20px;
  text-align: center;
  margin: 40px 0;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Schedule = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 20px;
`;

const Location = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 10px;
`;

const KakaoButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ffeb00;
  color: #000;
  font-weight: 600;
  text-decoration: none;
  border-radius: 5px;
  
  &:hover {
    background-color: #fdd835;
  }
`;


const ScheduleAndLocation = () => {
  return (
    <SectionContainer>
      <Title>오시는 길</Title>
      <Schedule>2024년 5월 25일 (토) 오후 2시</Schedule>
      <Location>서울특별시 강남구 청담동 123-45, 청담웨딩홀</Location>
      <Map />
      <KakaoButton
        href="https://map.kakao.com/link/map/청담웨딩홀,37.523123,127.047417"
        target="_blank"
        rel="noopener noreferrer"
      >
        카카오맵에서 보기
      </KakaoButton>
      <Address />
    </SectionContainer>
  );
};

export default ScheduleAndLocation;
