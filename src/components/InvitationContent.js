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
  font-family: ${fontFamily};
`;

const Section = styled(motion.div)`
  padding: 40px 0; // 상하 20px 패딩
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
    </ContentContainer>
  );
};

export default InvitationContent;
