import React, { useState, useEffect } from "react";
import styled from "styled-components";
import OverlayRSVPForm from "./OverlayRSVPForm";

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
  z-index: 1000;
`;

const CloseIcon = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 40px;
  color: rgba(128, 128, 128, 0.7);
  cursor: pointer;

  &:hover {
    color: rgba(128, 128, 128, 1);
  }
`;

const OverlayContent = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  position: relative;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Message = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 40px;
  line-height: 1.6;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(128, 128, 128, 0.5);
  margin-bottom: 40px;
`;

const EventDetails = styled.div`
  text-align: left;
  font-size: 14px;
  margin-bottom: 40px;
`;

const Names = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`;

const Groom = styled.span`
  color: gray;
  font-size: 12px;
`;

const Bride = styled.span`
  color: gray;
  font-size: 12px;
`;

const Name = styled.span`
  color: black;
  font-size: 14px;
  font-weight: 400;
`;

const DateTime = styled.div`
  font-size: 14px;
  color: black;
`;

const ActionButton = styled.button`
  padding: 10px 20px;
  background-color: pink;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  margin-top: 20px;
`;


const OverlayComponent = ({ profileRef, onClose }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayDismissed, setOverlayDismissed] = useState(false);
  const [showRSVPForm, setShowRSVPForm] = useState(false); // RSVP 폼 표시 여부

  useEffect(() => {
    const handleScroll = () => {
      if (profileRef.current && !overlayDismissed) {
        const profileTop = profileRef.current.getBoundingClientRect().top;
        if (profileTop <= window.innerHeight) {
          setShowOverlay(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [overlayDismissed, profileRef]);

  const handleCloseOverlay = () => {
    setShowOverlay(false);
    setOverlayDismissed(true);
    if (onClose) {
      onClose();
    }
  };

  const handleShowRSVPForm = () => {
    setShowRSVPForm(true);
  };

  return (
    <>
      {showOverlay && (
        <Overlay>
          <OverlayContent>
            <CloseIcon onClick={handleCloseOverlay}>×</CloseIcon>{" "}
            {/* x 버튼 추가 */}
            {!showRSVPForm ? (
              <>
                <Title>참석여부 전달 안내</Title>
                <Message>
                  소중한 시간을 내어 결혼식에 <br /> 참석해주시는 모든 분들께
                  감사드립니다.
                  <br />
                  예식이 지정좌석제로 진행되오니, <br /> 참석 여부를 회신해
                  주시면 <br />
                  더욱 감사하겠습니다.
                </Message>
                <Divider />
                <EventDetails>
                  <Names>
                    <Groom>신랑</Groom> <Name>류인창</Name> |{" "}
                    <Bride>신부</Bride> <Name>이에스더</Name>
                  </Names>
                  <DateTime>2024년 09월 22일 토요일 오전 11시 30분</DateTime>
                </EventDetails>
                <ActionButton onClick={handleShowRSVPForm}>
                  참석 여부 전달하기
                </ActionButton>
              </>
            ) : (
              <>
                <OverlayRSVPForm onClose={handleCloseOverlay} />
              </>
            )}
          </OverlayContent>
        </Overlay>
      )}
    </>
  );
};

export default OverlayComponent;
