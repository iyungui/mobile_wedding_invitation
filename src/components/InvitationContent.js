// InvitationContent.js
import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Messages } from "./Messages";
import Profile from "./Profile";
import ScheduleAndLocation from "./ScheduleAndLocation";
import RSVP from "./RSVP";
import Gallery from "./Gallery";
import OverlayComponent from "./OverlayComponent";
import Account from "./Account_layout/Account";
import Footer from "./Footer";
import Notice from "./Notice";
import Vegetarian from "./Vegetarian";

const fontFamily = "'MaruBuri-regular', 'Noto Sans KR', sans-serif";

const ContentContainer = styled.div`
  text-align: center;
  line-height: 2;
  width: 100%;
  max-width: 600px; /* 큰 화면에서의 최대 폭 설정 */
  margin: 0 auto; /* 중앙 정렬 */
  font-family: ${fontFamily};
  box-sizing: border-box; /* padding과 width 계산을 일관되게 처리 */
`;

const Section = styled(motion.div)`
  padding: 40px 0;
  text-align: center;
  width: 100%;
  box-sizing: border-box; /* padding과 width 계산을 일관되게 처리 */
`;

const Title = styled.h2`
  font-size: 20px;
  font-family: "MaruBuri-extralight";
  color: #ffb76f;
  margin-top: 0;
`;

const SubTitle = styled.h3`
  font-size: 11px;
  font-family: "MaruBuri-extralight";
  color: #ffb76f;

  letter-spacing: 0.2rem;
  margin-bottom: 0;
`;

const messageVariants = {
  hidden: { opacity: 0, y: 100 }, // 아래에 위치하고 투명
  visible: {
    opacity: 1,
    y: 0, // 제자리로 이동
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const InvitationContent = () => {
  const profileRef = useRef(null);

  return (
    <ContentContainer>
      <OverlayComponent profileRef={profileRef} />

      <Section>
        <Messages />
      </Section>
      <Section
        ref={profileRef}
        variants={messageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SubTitle>PROFILE</SubTitle>
        <Title>우리의 이야기</Title>
        <Profile />
      </Section>

      <Section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <SubTitle>LOCATION</SubTitle>
        <Title>오시는 길</Title>
        <ScheduleAndLocation />
      </Section>

      <Section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SubTitle>RSVP</SubTitle>
        <Title>참석 여부 전달</Title>
        <RSVP />
      </Section>

      <Section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SubTitle>ACCOUNT</SubTitle>
        <Title>마음 전하실 곳</Title>
        <Account />
      </Section>

      <Section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SubTitle>GALLERY</SubTitle>
        <Title>갤러리</Title>
        <Gallery />
      </Section>

      <Section>
        <Notice />
      </Section>

      <Section>
        <Vegetarian />
      </Section>

      <Section>
        <Footer />
      </Section>
    </ContentContainer>
  );
};

export default InvitationContent;
