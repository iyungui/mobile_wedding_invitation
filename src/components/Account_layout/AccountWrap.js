import React from 'react';
import styled from 'styled-components';
import copyButtonImage from './copyButton.png';

const AccountWrap = ({
  name,
  relation,
  bank,
  account,
  phone
}) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(`${bank} ${account} ${name}`).then(
      () => {
        alert('계좌번호가 복사되었습니다.😉');
      },
      () => {
        alert('계좌번호 복사에 실패했습니다.🥲');
      },
    );
  };

  return (
    <Wrapper>
      <Info>
        <Relation>{relation}</Relation>
        <Name>{name}</Name>
      </Info>
      <Details>
        <AccountInfo>
          {bank} {account}
        </AccountInfo>
        <CopyButton onClick={handleCopy}>
          <img src={copyButtonImage} alt="Copy" width="32" height="32" />
        </CopyButton>
      </Details>
      <PhoneNumber href={`tel:${phone}`}>{phone}</PhoneNumber> {/* Clickable phone number */}
    </Wrapper>
  );
};

export default AccountWrap;

const Wrapper = styled.div`
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 5px;
`;

const Relation = styled.span`
  color: #777;
`;

const Name = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const AccountInfo = styled.div`
  flex: 1;
  color: #444;
  text-align: left;
`;

const PhoneNumber = styled.a`
  color: #888;
  font-size: 14px;
  margin-top: 5px;
  text-align: left;
  text-decoration: none;
  &:hover {
    text-decoration: underline; /* Optional: Underline on hover for a clearer indication that it’s clickable */
    color: #555; /* Optional: Darken color on hover */
  }
`;

const CopyButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  & > img {
    width: 32px;
    height: 32px;
  }
`;
