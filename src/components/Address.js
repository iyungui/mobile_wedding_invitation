import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  // padding: 20px;
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
        {/* <Title>🚌 버스</Title>
        <Content>
          👉🏻 000번, 000번, 000번
          <br />
          👉🏻 살롱드레터 정류소 하차 후 도보 3분 (도보 30초)
        </Content> */}
        <Title>🚊 지하철</Title>
        <Content>
          👉🏻 청담역 (7호선) 12번 출구 바로 앞 위치
        </Content>
        <Title>🚗 주차 안내</Title>
        <Content>
          👉🏻 서울특별시 강남구 학동로 519 (청담동 73-4번지)
          <br />
          👉🏻 발렛 파킹 무료입니다 (3시간)
        </Content>

        <Content>
          협소한 공간으로 인하여 화한은 정중히 사양합니다.
        </Content>
      </ContentContainer>
    </SectionContainer>
  );
};

export default Address;
