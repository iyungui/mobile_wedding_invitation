import React from 'react';
import '../styles/components/Map.css';

const Map = () => {
    return (
        <section className="map">
            <p className="map-guide-title">
                오시는 길
            </p>
            <p className='map-guide-place'>
                더살롱드웨딩홀
            </p>
            <p className='map-guide-place-detail'>
                1층 레터홀<br />
                제주특별자치도 서귀포시 중앙로 105
            </p>
        </section>
    );
};

export default Map;