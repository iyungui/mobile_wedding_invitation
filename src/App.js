import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import InvitationContent from "./components/InvitationContent";
import headerVideo from "./assests/headerVideo.MP4";
import backgroundMusic from "./assests/backgroundMusic.mp3";
import soundOnIcon from "./assests/icons/1.png"; // 음악 재생 아이콘
import soundOffIcon from "./assests/icons/2.png"; // 음소거 아이콘

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
  height: 10%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    #ffffff 100%
  );
`;

const ContentSection = styled.section`
  width: 100%;
  background-color: #ffffff;
`;

const AudioIconWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.5); /* 배경 색상 추가 */
  border-radius: 50%; /* 원형으로 만들기 */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1000;
`;

const AudioIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const App = () => {
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

  const toggleMusic = () => {
    if (backgroundMusicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.log("음악 재생 실패:", error);
      });
    }
    setBackgroundMusicPlaying(!backgroundMusicPlaying);
  };

  return (
    <>
      <GlobalStyles />
      <VideoContainer>
        <Video src={headerVideo} autoPlay muted playsInline />
        <GradientOverlay />
        <AudioIconWrapper onClick={toggleMusic}>
          <AudioIcon
            src={backgroundMusicPlaying ? soundOnIcon : soundOffIcon}
            alt="Toggle Sound"
          />
        </AudioIconWrapper>
      </VideoContainer>
      <ContentSection>
        <InvitationContent />
      </ContentSection>
    </>
  );
};

export default App;
