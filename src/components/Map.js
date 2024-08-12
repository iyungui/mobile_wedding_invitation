import React, { useEffect } from "react";

const { kakao } = window;

function Map() {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);

    var iwContent =
        '<div style="padding:5px;">빌라드지디 청담</div>',
      iwPosition = new kakao.maps.LatLng(33.450701, 126.570667); //인포윈도우 표시 위치입니다

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
      position: iwPosition,
      content: iwContent,
    });

    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    infowindow.open(map, marker);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        id="map"
        style={{
          width: "250px",
          height: "250px",
        }}
      ></div>
    </div>
  );
}

export default Map;
