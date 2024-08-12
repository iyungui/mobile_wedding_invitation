import React from 'react';
import styled from 'styled-components';
import copyButtonImage from './copyButton.png';

const AccountWrap = ({
  name,
  relation,
  bank,
  account,
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
          {<img src={copyButtonImage} alt="Copy" width="40" height="40" />}
        </CopyButton>
      </Details>
    </Wrapper>
  );
};

export default AccountWrap;

const Wrapper = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #dfdfdf;
  display: flex;
  flex-direction: column;
  align-items: left; /* 중앙 정렬 */
`;

const Info = styled.div`
  display: flex;
  align-items: left;
  gap: 5px;
  margin: 5px 0;
`;

const Relation = styled.span`
  color: #44484d;
`;

const Name = styled.span`
  font-size: 1rem;
`;

const Details = styled.div`
  display: flex;
  align-items: left;
  justify-content: space-between;
  width: 100%;
`;

const AccountInfo = styled.div`
  flex: 1;
  text-align: left; /* 계좌 정보는 왼쪽 정렬 */
`;

const CopyButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 0.1em 0.2em;
  cursor: pointer;
  background: white;
`;
