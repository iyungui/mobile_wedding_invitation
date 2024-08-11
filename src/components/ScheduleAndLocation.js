import React from 'react';
import styled from 'styled-components';

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


const ScheduleAndLocation = () => {
  return (
    <SectionContainer>
      <Title>오시는 길</Title>
      <Schedule>2024년 5월 25일 (토) 오후 2시</Schedule>
      <Location>서울특별시 강남구 청담동 123-45, 청담웨딩홀</Location>
      {/* <Map /> */}
    </SectionContainer>
  );
};

export default ScheduleAndLocation;
