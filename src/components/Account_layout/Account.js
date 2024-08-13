import React from "react";
import styled from 'styled-components';
import data from "../../data.json";
import AccountWrap from './AccountWrap';
import Accordion from './Accordion';

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
`;

const HostInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%; 
  max-width: 100%; /* 최대 너비를 부모 컨테이너의 100%로 설정 */
  margin: 0 auto;
  box-sizing: border-box; /* padding 포함한 width 계산 */
`;

const Account = () => {
  const { hostInfo } = data;

  return (
    <HostInfoWrapper>
      <Title>마음 전하실 곳</Title>
      {hostInfo.map((host) => (
        <Accordion title={host.host} key={host.host}>
          {host.accountInfo.map((account) => (
            <AccountWrap
              key={account.name}
              name={account.name}
              relation={account.relation}
              bank={account.bank}
              account={account.account}
            />
          ))}
        </Accordion>
      ))}
    </HostInfoWrapper>
  );
};

export default Account;
