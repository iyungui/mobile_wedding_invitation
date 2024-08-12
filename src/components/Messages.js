import React from 'react';
import styled from 'styled-components';

const Message1 = styled.p`
  font-size: 11px;
  font-weight: 100;
  margin-bottom: 20px; /* 메시지 간 상하 여유 공간 */
`;

const Message2 = styled.p`
  font-size: 11px;
  font-weight: 100;
  margin-bottom: 100px;
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
    <Message3>함께 있을 때, 서로를 더 빛나게 해주는 사람을 만났습니다.<br/>두 개의 빛이 하나가 되어 평생을 더욱이 밝혀보려 합니다.<br/>어떤 가을은 더 낭만적이에요<br/>올해 가을이 그리하여 저희 두 사람, 결혼합니다<br/>예쁜 빛이 두 사람에게 내려앉는 가을날<br/>설레는 첫걸음을 함께 빛내주세요</Message3>
    <Message4>류성철·주연희의 차남 류인창<br/>임정임의 장녀 이에스더<br/>2024.09.22 일요일 11:30 빌라드지디 청담</Message4>
  </>
);