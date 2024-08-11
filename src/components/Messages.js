import React from 'react';
import styled from 'styled-components';

const Message1 = styled.p`
  font-size: 13px;
  font-weight: 100;
  margin-bottom: 20px; /* 메시지 간 상하 여유 공간 */
`;

const Message2 = styled.p`
  font-size: 13px;
  font-weight: 100;
  margin-bottom: 80px;
`;

const Message3 = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 40px;
`;

const Message4 = styled.p`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 150px;
`;

export const Messages = () => (
  <>
    <Message1>You can not be happy every day.<br/>But there are happy things every day.</Message1>
    <Message2>매일 행복할 순 없지만,<br/>행복한 것들은 매일 있어.<br/>&lt;월트 디즈니&gt;, 곰돌이 푸</Message2>
    <Message3>오늘도, 내일도 함께하고 싶은 사람이 생겼습니다.<br/>함께라는걸 당연하게 생각하지 않겠습니다.<br/>서로가 함께한지 10년, 평생을 함께하려 합니다.</Message3>
    <Message4>류인창, 이에스더 결혼식에 초대합니다.</Message4>
  </>
);