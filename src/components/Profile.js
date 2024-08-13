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
  max-width: 100%; /* 컨테이너의 양 옆 여백을 최소화 */
  @media (max-width: 768px) {
    flex-direction: row; /* 모바일에서도 가로 배열 유지 */
    align-items: center;
  }
`;

const ProfileItem = styled.div`
  flex: 1;  /* 각 항목이 동일한 너비를 가짐 */
  text-align: center;
  padding: 7px;
  margin: 0;
`;

const ProfileImage = styled.img`
  width: 100%;  /* 각 이미지가 부모의 너비를 100% 차지 */
  height: auto;
  border-radius: 4%;
  object-fit: cover;
`;

const ProfileName = styled.h3`
  font-size: 17px;
  margin-bottom: 5px;
`;

const ProfileDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
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
  background-color: #fff9c2;
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
