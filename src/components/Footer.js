import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  font-size: 12px;
  color: #111111;
  text-align: center;
  bottom: 0;
  width: 100%;
`;

const Link = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        Copyright 2024.{" "}
        <Link
          href="https://github.com/iyungui"
          target="_blank"
          rel="noopener noreferrer"
        >
          iyungui
        </Link>
        . All rights reserved.
      </p>
    </FooterContainer>
  );
};

export default Footer;
