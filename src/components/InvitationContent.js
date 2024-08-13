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

const fontFamily = "'MaruBuri-regular', 'Noto Sans KR', sans-serif";

const ContentContainer = styled.div`
  padding: 10px;
  text-align: center;
  line-height: 2;
  width: 100%;
  max-width: 1000px; /* 큰 화면에서의 최대 폭 설정 */
  margin: 0 auto; /* 중앙 정렬 */
  font-family: ${fontFamily};
  box-sizing: border-box; /* padding과 width 계산을 일관되게 처리 */
`;

const Section = styled(motion.div)`
  padding: 40px 0;
  text-align: center;
  width: 100%;
  box-sizing: border-box; /* padding과 width 계산을 일관되게 처리 */
  @media (max-width: 768px) {
    padding: 20px 0; /* 작은 화면에서는 패딩을 줄임 */
  }
`;

const messageVariants = {
  hidden: { opacity: 0, y: 40 }, // 아래에 위치하고 투명
  visible: {
    opacity: 1,
    y: 0, // 제자리로 이동
    transition: { duration: 0.8, ease: "easeOut" },
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
      <Section ref={profileRef}
        variants={messageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Profile />
      </Section>

      <Section
        variants={messageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <ScheduleAndLocation />
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <RSVP />
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Account />
      </Section>
      
      <Section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Gallery />
      </Section>

      <Section>
        <Footer />
      </Section>
    </ContentContainer>
  );
};

export default InvitationContent;
