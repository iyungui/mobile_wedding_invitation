import React, { useEffect } from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
  width: 100%;
  height: 300px; /* 지도의 높이를 조정할 수 있습니다 */
  margin-top: 20px;
`;

const Map = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY`;
    script.async = true;
    script.onload = () => {
      const container = document.getElementById('map'); // 지도를 표시할 container
      const options = {
        center: new window.kakao.maps.LatLng(37.5665, 126.9780), // 지도의 중심좌표 (서울의 좌표 예시)
        level: 3, // 지도의 확대 레벨
      };
      const map = new window.kakao.maps.Map(container, options);

      const positions = [
        {
          title: '청담웨딩홀', 
          latlng: new window.kakao.maps.LatLng(37.523123, 127.047417) // 웨딩홀 위치 (예시)
        }
      ];

      const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png'; 
      const imageSize = new window.kakao.maps.Size(24, 35);

      positions.forEach(position => {
        new window.kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: position.latlng, // 마커의 위치
          title: position.title, // 마커의 타이틀
          image: new window.kakao.maps.MarkerImage(imageSrc, imageSize), // 마커 이미지 
        });
      });
    };
    document.head.appendChild(script);
  }, []);

  return <MapContainer id="map"></MapContainer>;
};

export default Map;
