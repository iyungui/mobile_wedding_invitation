// Account.js

import React from "react";
import styled from 'styled-components';
import data from "../../data.json";
import AccountWrap from './AccountWrap';
import Accordion from './Accordion';

const Title = styled.h2`
  font-size: 24px;
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
  max-width: 400px; 
  margin: 0 auto; 
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
