// App.js
import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import InvitationContent from './components/InvitationContent';
import headerVideo from './assests/headerVideo.MP4'; // 동영상 파일 import

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const GradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 10%;  /* 그라데이션의 높이를 조절할 수 있습니다 */
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #f5f5f5 100%);
`;


const ContentSection = styled.section`
  width: 100%;
  background-color: #f5f5f5;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <VideoContainer>
      <Video
        src={headerVideo}
        autoPlay
        muted
        playsInline
      />
      <GradientOverlay />
    </VideoContainer>
      <ContentSection>
        <InvitationContent />
      </ContentSection>
    </>
  );
};

export default App;