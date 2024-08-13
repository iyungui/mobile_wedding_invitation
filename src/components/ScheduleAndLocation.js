import React from "react";
import styled from "styled-components";
import Map from "./Map";
import Address from "./Address";
import { motion } from "framer-motion";

const SectionContainer = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const HighLight = styled.span`
  font-size: 17px;
  color: #272727;
  font-family: "MaruBuri-semibold";
`;

const Location = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #272727;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px; /* Adds space between the buttons */
  padding: 20px;
`;

const MapButton = styled.a`
  display: inline-flex;
  font-family: "MaruBuri-semibold";
  align-items: center;
  padding: 8px 10px;
  background-color: #fff;
  color: #000;
  font-size: 11px;
  text-decoration: none;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  box-sizing: border-box;
  min-width: 100px; /* Ensures buttons have a consistent width */
  justify-content: center; /* Centers the text within the button */

  &:hover {
    background-color: #f5f5f5;
  }
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

const KakaoMapButton = () => (
  <MapButton
    href="https://map.kakao.com/link/map/빌라드지디 청담,37.520159,127.055451"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon src="/icon/kakaoMap.png" alt="카카오맵 아이콘" />
    카카오맵
  </MapButton>
);

const NaverMapButton = () => (
  <MapButton
    href="nmap://search?query=빌라드지디%20청담&appname=https://rotojuna.wedding"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon src="/icon/naverMap.png" alt="네이버지도 아이콘" />
    네이버지도
  </MapButton>
);

const TMapButtonComponent = () => (
  <MapButton
    href="tmap://search?name=빌라드지디 청담"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon src="/icon/tMap.png" alt="티맵 아이콘" />
    티맵
  </MapButton>
);

const ScheduleAndLocation = () => {
  return (
    <SectionContainer>
      <Location>
        <HighLight>빌라드지디 청담</HighLight>
        <br />
        서울특별시 강남구 학동로 519 (청담동 73-4번지)
      </Location>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Map />
      </motion.div>
      <motion.div>
        <ButtonContainer>
          <KakaoMapButton />
          <NaverMapButton />
          <TMapButtonComponent />
        </ButtonContainer>
      </motion.div>

      <motion.div>
        <Address />
      </motion.div>
    </SectionContainer>
  );
};

export default ScheduleAndLocation;
