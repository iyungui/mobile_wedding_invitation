import React from 'react';
import styled from 'styled-components';
import { Messages } from './Messages';
import Profile from './Profile';
import ScheduleAndLocation from './ScheduleAndLocation';
import RSVP from './RSVP';
import Account from './Account_layout/Account';
import Gallery from './Gallery';

// 폰트 적용 (예: Google Fonts 사용)
const fontFamily = "'Noto Sans KR', sans-serif, CustomFont";

const ContentContainer = styled.div`
  padding: 20px;
  text-align: center;
  line-height: 2;
  font-family: ${fontFamily};
`;

const Section = styled.div`
  padding: 20px 0; // 상하 20px 패딩
`;

const InvitationContent = () => {
  return (
    <ContentContainer>
      <Section>
        <Messages />
      </Section>
      <Section>
        <Profile />
      </Section>
      <Section>
        <ScheduleAndLocation />
      </Section>
      <Section>
        <RSVP />
      </Section>
      <Section>
        <Account />
      </Section>
      <Section>
        <Gallery />
      </Section>
    </ContentContainer>
  );
};

export default InvitationContent;
