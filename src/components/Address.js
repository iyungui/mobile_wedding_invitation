import React from "react";
import styled from "styled-components";

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

const ContentContainer = styled.div`
  display: inline-block;
  text-align: left;
`;

const Content = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 40px;
`;

const Address = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <Title>🚌 버스</Title>
        <Content>
          👉🏻 000번, 000번, 000번
          <br />
          👉🏻 살롱드레터 정류소 하차 후 도보 3분 (도보 30초)
        </Content>
        <Title>🚊 지하철</Title>
        <Content>
          👉🏻 5·6호선 공덕역 7번 출구 (도보 2분)
          <br />
          👉🏻 경의·중앙선, 공항철도 공덕역 10번 출구 (도보 30초)
        </Content>
        <Title>🚗 주차 안내</Title>
        <Content>
          👉🏻 건물 내 3-5층 2시간 무료주차
          <br />
          (안내데스크에서 주차권 수령)
        </Content>
      </ContentContainer>
    </SectionContainer>
  );
};

export default Address;
