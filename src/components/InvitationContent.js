import React from 'react';
import styled from 'styled-components';
import { Messages } from './Messages';
import Profile from './Profile';
import ScheduleAndLocation from './ScheduleAndLocation';

// 폰트 적용 (예: Google Fonts 사용)
const fontFamily = "'Noto Sans KR', sans-serif, CustomFont";

const ContentContainer = styled.div`
  padding: 20px;
  text-align: center;
  line-height: 2;
  font-family: ${fontFamily};
`;

const InvitationContent = () => {
  return (
    <ContentContainer>
      <Messages />
      <Profile />
      <ScheduleAndLocation />
    </ContentContainer>
  );
};

export default InvitationContent;
