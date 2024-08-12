import React from 'react';
import styled from 'styled-components';
import Map from './Map';
import Address from './Address'

const SectionContainer = styled.div`
  padding: 10px;
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
      <Schedule>2024년 09월 22일 (일) 오전 11시 30분</Schedule>
      <Location>서울특별시 강남구 학동로 519 (청담동 73-4번지)<br/>빌라드지디 청담</Location>
      <Map />
      <KakaoButton
        href="https://map.kakao.com/link/map/빌라드지디 청담,37.520159,127.055451"
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
