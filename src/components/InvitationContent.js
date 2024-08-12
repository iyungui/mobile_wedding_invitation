
// InvitationContent.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Messages } from './Messages';
import Profile from './Profile';
import ScheduleAndLocation from './ScheduleAndLocation';
import RSVP from './RSVP';
import Account from './Account_layout/Account';
import Gallery from './Gallery';

const fontFamily = "'Noto Sans KR', sans-serif, CustomFont";

const ContentContainer = styled.div`
  padding: 20px;
  text-align: center;
  line-height: 2;
  width: 100%;
  max-width: 1000px;  /* 큰 화면에서의 최대 폭 설정 */
  margin: 0 auto;  /* 중앙 정렬 */
  font-family: ${fontFamily};
  box-sizing: border-box;  /* padding과 width 계산을 일관되게 처리 */
`;

const Section = styled(motion.div)`
  padding: 40px 0;
  text-align: center;
  width: 100%;
  box-sizing: border-box;  /* padding과 width 계산을 일관되게 처리 */
  @media (max-width: 768px) {
    padding: 20px 0;  /* 작은 화면에서는 패딩을 줄임 */
  }
`;

const InvitationContent = () => {
  return (
    <ContentContainer>
      <Section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Messages />
      </Section>
      <Section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Profile />
      </Section>
      <Section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
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
        <Gallery />
      </Section>
    </ContentContainer>
  );
};

export default InvitationContent;