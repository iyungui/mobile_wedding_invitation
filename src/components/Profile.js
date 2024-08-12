import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin: 20px 0;
  max-width: 900px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProfileItem = styled.div`
  margin: 0 0px;
  text-align: center;
  max-width: 250px;
  width: 100%;
  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 4%;
  object-fit: cover;
`;

const ProfileName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const ProfileDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

const GroomThinText = styled.span`
  color: #758694;
  font-size: 11px;
  padding-right: 8px;
`;
const BrideThinText = styled.span`
  color: #E3A5C7;
  font-size: 11px;
  padding-right: 8px;
`;

const Highlight = styled.span`
  color: #1A5319; 
`;

const HighLightWithBackground = styled.span`
  background-color: #E7F0DC; /* 그린 배경색 */
  border-radius: 4px; /* 모서리를 둥글게 */
`;

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileItem>
        <ProfileImage src="/photos/profile-groom.png" alt="Groom" />
        <ProfileName><GroomThinText>신랑</GroomThinText><Highlight>류인창</Highlight></ProfileName>
        <ProfileDescription>
          오늘의 <HighLightWithBackground>주인공</HighLightWithBackground> ✌️
          <br/>
          <br/>
          
          1992년산
          <br/>
          다정한 팩폭러
          <br/>
          나무같은 남편이 되겠습니다 🌳
        </ProfileDescription>
      </ProfileItem>
      <ProfileItem>
        <ProfileImage src="/photos/profile-bride.png" alt="Bride" />
        <ProfileName><BrideThinText>신부</BrideThinText><Highlight>이에스더</Highlight></ProfileName>
        <ProfileDescription>
          오늘의 <HighLightWithBackground>주인공</HighLightWithBackground> ✌️
          <br/>
          <br/>
          
          1997년산 
          <br/>
          꼼꼼한 칠칠이
          <br/>
          햇살같은 아내가 되겠습니다 ☀️
        </ProfileDescription>
      </ProfileItem>
    </ProfileContainer>
  );
};

export default Profile;
