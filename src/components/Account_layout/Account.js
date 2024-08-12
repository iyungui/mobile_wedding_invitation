import React from "react";
import data from "../../data.json";
import styled from 'styled-components';
import AccountWrap from './AccountWrap.tsx';
import Accordion from './Accordion.tsx'; // 상대 경로로 변경

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const HostInfoWrapper = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  padding: 20px;
`;

const Account = () => {
  const { hostInfo } = data;

  return (
    <HostInfoWrapper>
      <Title>마음 전하실 곳</Title>
      {hostInfo.map((host) => {
        return (
          <Accordion title={host.host} key={host.host}>
            {host.accountInfo.map((account) => {
              return (
                <AccountWrap
                  key={account.name}
                  name={account.name}
                  relation={account.relation}
                  bank={account.bank}
                  account={account.account}
                  kakaopayAccount={account.kakaopayAccount}
                  tossAccount={account.tossAccount}
                />
              );
            })}
          </Accordion>
        );
      })}
    </HostInfoWrapper>
  );
};

export default Account;
