import React from 'react';
import '../styles/components/Header.css';
import headerImage from '../assests/images/header-image.png';

const Header = () => {
  return (
    <div className="header">
      <img src={headerImage} alt="Wedding Header" className="header-image" />
      <div className="header-message">
        <h1>두 사람, 결혼합니다.</h1>
      </div>
    </div>
  );
};


export default Header;
