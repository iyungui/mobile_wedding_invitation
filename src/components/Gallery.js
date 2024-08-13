import React from 'react';
import styled from 'styled-components';

const GalleryWrapper = styled.div`
  padding: 0px 0;
`;

const ScrollContainer = styled.div`
  padding: 20px 0;
  overflow-x: auto; /* 가로 스크롤 가능하도록 설정 */
  white-space: nowrap; /* 이미지들이 한 줄로 나란히 배치되도록 설정 */
`;

const GalleryContainer = styled.div`
  margin-left: 20px;
  display: inline-flex;
  flex-direction: column; /* 두 줄로 배치되도록 설정 */
  gap: 5px; /* 이미지 간의 간격 설정 */
`;

const Row = styled.div`
  display: flex;
  gap: 5px; /* 이미지 간의 간격 설정 */
`;

const SquareImageWrapper = styled.div`
  flex-shrink: 0;
  width: 200px; /* 정사각형 이미지의 너비 */
  height: 200px; /* 정사각형 이미지의 높이 */
`;

const RectangularImageWrapper = styled.div`
  flex-shrink: 0;
  width: 300px; /* 직사각형 이미지의 너비 */
  height: 200px; /* 직사각형 이미지의 높이 (정사각형 이미지와 동일한 높이) */
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지가 프레임에 맞게 크기 조절되며, 잘릴 수 있음 */
  border-radius: 0; /* 모서리를 각지게 설정 */
`;

const TopImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지가 프레임에 맞게 크기 조절되며, 잘릴 수 있음 */
  border-radius: 0; /* 모서리를 각지게 설정 */
  object-position: top; /* 이미지의 위쪽 부분을 보이게 설정 */
`;

const Gallery = () => {
  const imagesTopRow = [
    '/photos/IMG_5460.JPG',
    '/photos/IMG_5461.JPG',
    '/photos/IMG_5462.JPG',
    '/photos/IMG_5468.JPG',
    '/photos/IMG_5469.JPG',
    '/photos/IMG_5470.JPG',
    '/photos/IMG_5463.JPG',
    '/photos/IMG_5472.JPG',
    // 필요한만큼 추가...
  ];

  const imagesBottomRow = [
    '/photos/IMG_5471.JPG',
    '/photos/IMG_5464.JPG',
    '/photos/IMG_5465.JPG',
    '/photos/IMG_5466.JPG',
    '/photos/IMG_5467.JPG',
    // 필요한만큼 추가...
  ];

  return (
    <GalleryWrapper>
      <ScrollContainer>
        <GalleryContainer>
          <Row>
            {imagesTopRow.map((src, index) => (
              <SquareImageWrapper key={index}>
                <Image src={src} alt={`Gallery image ${index + 1}`} />
              </SquareImageWrapper>
            ))}
          </Row>
          <Row>
            {imagesBottomRow.map((src, index) => (
              <RectangularImageWrapper key={index}>
                <TopImage src={src} alt={`Gallery image ${index + 1}`} />
              </RectangularImageWrapper>
            ))}
          </Row>
        </GalleryContainer>
      </ScrollContainer>
    </GalleryWrapper>
  );
};

export default Gallery;
