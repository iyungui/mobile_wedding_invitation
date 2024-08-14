import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  max-width: 100%;
  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
  margin-bottom: 100px;
`;

const ProfileItem = styled.div`
  flex: 1; 
  text-align: center;
  padding: 7px;
  margin: 0;
  font-family: "MaruBuri-regular";
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

const ProfileName = styled.h3`
  font-size: 17px;
  margin-bottom: 5px;
  font-family: "MaruBuri-light";
`;

const ProfileDescription = styled.p`
  font-size: 14px;
  font-family: "MaruBuri-light";
`;

const GroomThinText = styled.span`
  color: #7FA1C3;
  font-size: 16px;
  padding-right: 8px;
`;

const BrideThinText = styled.span`
  color: #D9ABAB;
  font-size: 16px;
  padding-right: 8px;
`;

const Highlight = styled.span`
  color: #3C3D37; 
`;

const HighLightWithBackground = styled.span`
  background-color: #fffbd6;
  border-radius: 4px;
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
          🌳
          <br />
          나무같은 남편이 되겠습니다
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
          ☀️
          <br />
          햇살같은 아내가 되겠습니다
        </ProfileDescription>
      </ProfileItem>
    </ProfileContainer>
  );
};

export default Profile;
