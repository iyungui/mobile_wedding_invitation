import React from 'react';
import styled from 'styled-components';

const GalleryWrapper = styled.div`
  display: flex;
  justify-content: center; /* 부모 컨테이너 내에서 중앙 정렬 */
  padding: 20px 0;
`;

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px; /* 이미지 간의 간격을 조금 넓게 설정 */
  max-width: 1000px; /* 중앙 정렬을 위한 최대 너비 설정 */
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05); /* 호버 시 확대 효과 */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* 호버 시 그림자 강화 */
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 30px;
  text-align: center;
  color: #673ab7; /* 타이틀 색상 설정 */
`;

const Gallery = () => {
  const images = [
    '/photos/IMG_5460.JPG',
    '/photos/IMG_5461.JPG',
    '/photos/IMG_5462.JPG',
    '/photos/IMG_5463.JPG',
    '/photos/IMG_5464.JPG',
    '/photos/IMG_5465.JPG',
    '/photos/IMG_5466.JPG',
    '/photos/IMG_5467.JPG',
    '/photos/IMG_5468.JPG',
    '/photos/IMG_5469.JPG',
    '/photos/IMG_5470.JPG',
    '/photos/IMG_5471.JPG',
    '/photos/MainImage.JPG',
    '/photos/SubMainImage.JPG',
    // 추가 이미지 경로들...
  ];

  return (
    <GalleryWrapper>
      <div>
        <Title>갤러리</Title>
        <GalleryContainer>
          {images.map((src, index) => (
            <Image key={index} src={src} alt={`Gallery image ${index + 1}`} />
          ))}
        </GalleryContainer>
      </div>
    </GalleryWrapper>
  );
};

export default Gallery;
