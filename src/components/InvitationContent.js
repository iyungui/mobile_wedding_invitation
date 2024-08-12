import React from 'react';
import styled from 'styled-components';
import { Messages } from './Messages';
import Profile from './Profile';
import ScheduleAndLocation from './ScheduleAndLocation';
import RSVP from './RSVP';
import Account from './Account_layout/Account';
import Gallery from './Gallery';
import Fade from 'react-reveal/Fade';  // react-reveal에서 Fade 컴포넌트 임포트

// 폰트 적용 (예: Google Fonts 사용)
const fontFamily = "'Noto Sans KR', sans-serif, CustomFont";

const ContentContainer = styled.div`
  padding: 20px;
  text-align: center;
  line-height: 2;
  font-family: ${fontFamily};
  scroll-behavior: smooth; /* 부드러운 스크롤 효과 */
`;

const Section = styled.div`
  padding: 20px 0; // 상하 20px 패딩
`;

const InvitationContent = () => {
  return (
    <ContentContainer>
      <Section>
        <Fade bottom duration={1000}> {/* duration 속성으로 애니메이션의 부드러움 조정 */}
          <Messages />
        </Fade>
      </Section>
      <Section>
        <Fade bottom duration={1000}>
          <Profile />
        </Fade>
      </Section>
      <Section>
        <Fade bottom duration={1000}>
          <ScheduleAndLocation />
        </Fade>
      </Section>
      <Section>
        <Fade bottom duration={1000}>
          <RSVP />
        </Fade>
      </Section>
      <Section>
        <Fade bottom duration={1000}>
          <Account />
        </Fade>
      </Section>
      <Section>
        <Fade bottom duration={1000}>
          <Gallery />
        </Fade>
      </Section>
    </ContentContainer>
  );
};

export default InvitationContent;
