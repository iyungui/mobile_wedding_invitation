import React from "react";
import styled from 'styled-components';
import data from "../../data.json";
import AccountWrap from './AccountWrap';
import Accordion from './Accordion';

const HostInfoWrapper = styled.div`
  padding: 0px 40px;
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 100px;
`;

const Account = () => {
  const { hostInfo } = data;

  return (
    <HostInfoWrapper>
      {hostInfo.map((host, index) => (
        <div key={host.host}>
          <Accordion title={host.host}>
            {host.accountInfo.map((account, accIndex) => (
              <React.Fragment key={account.name}>
                <AccountWrap
                  name={account.name}
                  relation={account.relation}
                  bank={account.bank}
                  account={account.account}
                  phone={account.phone}
                />
              </React.Fragment>
            ))}
          </Accordion>
        </div>
      ))}
    </HostInfoWrapper>
  );
};

export default Account;
