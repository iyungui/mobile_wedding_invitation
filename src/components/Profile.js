import React from 'react';
import '../styles/components/Profile.css';
import groomImage from '../assests/images/groom.png';  // 신랑 사진 경로
import brideImage from '../assests/images/bride.png';  // 신부 사진 경로

const Profile = () => {
  return (
    <section className="profile">
      <div className="profile-item" data-aos="fade-up">
        <div className="profile-image-container">
          <img src={groomImage} alt="Groom" className="profile-image" />
        </div>
        <div className="profile-text">
          <p className="profile-title">신랑 류인창</p>
          <p className="profile-subtitle">오늘의 주인공✌️</p>
          <p className="profile-details">
            1990년생, 서울사람<br />
            다정한 사랑꾼 ESFJ<br />
            #운동러버 #IT개발자<br />
            나무같은 남편이 되겠습니다<br />
            김종혁·최은혜 의 장남
          </p>
        </div>
      </div>
      <div className="profile-item" data-aos="fade-up">
        <div className="profile-image-container">
          <img src={brideImage} alt="Bride" className="profile-image" />
        </div>
        <div className="profile-text">
          <p className="profile-title">신부 이에스더</p>
          <p className="profile-subtitle">오늘의 주인공✌️</p>
          <p className="profile-details">
            1993년생, 제주사람<br />
            세상의 소금형 ISTJ<br />
            #꿈꿈이 #은행원<br />
            햇살같은 아내가 되겠습니다<br />
            이주영·강지은 의 장녀
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
