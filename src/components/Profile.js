import React from 'react';
import styled from 'styled-components';


const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
`;

const ProfileItem = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
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

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileItem>
        <ProfileImage src="/photos/IMG_5461.JPG" alt="Groom" />
        <ProfileName>류인창</ProfileName>
        <ProfileDescription>신랑 소개</ProfileDescription>
      </ProfileItem>
      <ProfileItem>
        <ProfileImage src="/photos/IMG_5460.JPG" alt="Bride" />
        <ProfileName>이에스더</ProfileName>
        <ProfileDescription>신부 소개</ProfileDescription>
      </ProfileItem>
    </ProfileContainer>
  );
};

export default Profile;
