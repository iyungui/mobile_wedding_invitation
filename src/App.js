import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import InvitationContent from './components/InvitationContent';
import headerVideo from './assests/headerVideo.MP4'; // 동영상 파일 import

const VideoSection = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain;  // 전체 화면을 채우도록 설정
`;

const ContentSection = styled.section`
  padding: 20px;
  background-color: #f5f5f5;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <VideoSection>
        <Video
          src={headerVideo}
          autoPlay
          muted
          playsInline
        />
      </VideoSection>
      <ContentSection>
        <InvitationContent />
      </ContentSection>
    </>
  );
};

export default App;