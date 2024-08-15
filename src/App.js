import React, { useState, useRef, useEffect, Suspense } from "react";
import styled, { keyframes, css } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import backgroundMusic from "./assests/backgroundMusic.mp3";
import soundOnIcon from "./assests/icons/1.png"; // 음악 재생 아이콘
import soundOffIcon from "./assests/icons/2.png"; // 음소거 아이콘
import scrollGif from "./assests/icons/scroll-large.gif"; // 스크롤 GIF 이미지

// Lazy load the InvitationContent component
const InvitationContent = React.lazy(() => import("./components/InvitationContent"));

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


// Scroll Image
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ScrollIcon = styled.img`
  position: absolute;
  bottom: 80px;
  right: 10px;
  width: 100px;
  height: auto;
  opacity: ${(props) => (props.show ? 1 : 0)};
  ${(props) =>
    props.show &&
    css`
      animation: ${fadeIn} 1s ease-in;
    `}
  display: ${(props) => (props.show ? 'block' : 'none')};
  z-index: 1000;
`;


// Gradient Overlay
const GradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 10%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    #fafafa 100%
  );
`;
// Spinner
const SpinnerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255);
  z-index: 1001;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

const Spinner = styled.div`
  border: 4px solid rgba(128, 128, 128, 0.3);
  border-top: 4px solid #808080; /* 진 회색 */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;



const ContentSection = styled.section`
  width: 100%;
  background-color: #fafafa;
`;

const AudioIconWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
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
  const [showScrollIcon, setShowScrollIcon] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const audioRef = useRef(new Audio(backgroundMusic));
  const videoRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    const handleVideoEnd = () => {
      setShowScrollIcon(true);
    };

    const handleVideoLoaded = () => {
      setVideoLoaded(true);
    };

    video.addEventListener("loadeddata", handleVideoLoaded);
    video.addEventListener("ended", handleVideoEnd);

    return () => {
      video.removeEventListener("loadeddata", handleVideoLoaded);
      video.removeEventListener("ended", handleVideoEnd);
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
        {!videoLoaded && (
          <SpinnerContainer show={!videoLoaded}>
            <Spinner />
          </SpinnerContainer>
        )}
        <Video
          ref={videoRef}
          src="/photos/headerVideo.MP4"
          autoPlay
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          style={{ display: videoLoaded ? 'block' : 'none' }}
        />
        <GradientOverlay />
        <ScrollIcon src={scrollGif} show={showScrollIcon} alt="Scroll" />
        <AudioIconWrapper onClick={toggleMusic}>
          <AudioIcon
            src={backgroundMusicPlaying ? soundOnIcon : soundOffIcon}
            alt="Toggle Sound"
          />
        </AudioIconWrapper>
      </VideoContainer>
      <ContentSection>
        <Suspense fallback={<div>Loading...</div>}>
          <InvitationContent />
        </Suspense>
      </ContentSection>
    </>
  );
};

export default App;