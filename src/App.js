import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import InvitationContent from './components/InvitationContent';
import headerVideo from './assests/headerVideo.MP4';
import backgroundMusic from './assests/backgroundMusic.mp3';


const MusicControl = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  background-color: #1A5319;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1000;
`;

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

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; /* 버튼을 세로로 나열 */
  gap: 20px; /* 버튼 사이 간격 */
  z-index: 1000;
`;
const StartButton = styled.button`
  padding: 20px;
  font-size: 18px;
  background-color: #1A5319;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 10px;
`;

const App = () => {
  const [started, setStarted] = useState(false);
  const [backgroundMusicPlaying, setBackgroundMusicPlaying] = useState(false);
  const audioRef = useRef(new Audio(backgroundMusic));

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true; // 음악 반복 재생

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const handleStart = () => {
    audioRef.current.play().catch(error => {
      console.log("음악 재생 실패:", error);
    });
    setBackgroundMusicPlaying(true);
    setStarted(true);
  };

  const handleStartWithoutMusic = () => {
    setStarted(true);
  };

  const toggleMusic = () => {
    if (backgroundMusicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => {
        console.log("음악 재생 실패:", error);
      });
    }
    setBackgroundMusicPlaying(!backgroundMusicPlaying);
  };

  return (
    <>
      <GlobalStyles />
      {!started && (
        <Overlay>
          <StartButton onClick={handleStart}>음악과 함께 시작하기</StartButton>
          <StartButton onClick={handleStartWithoutMusic}>음악 없이 시작하기</StartButton>
        </Overlay>
      )}
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
      {started && (
        <MusicControl onClick={toggleMusic}>
          {backgroundMusicPlaying ? '음악 끄기' : '음악 켜기'}
        </MusicControl>
      )}
    </>
  );
};

export default App;