import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  font-size: 11px;
  color: #404040;
  text-align: center;
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
