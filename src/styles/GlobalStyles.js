// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial, sans-serif';
  }

  /* 모바일 대응을 위한 설정 */
  @media (max-width: 600px) {
    body {
      background-color: #f5f5f5;
    }
  }
`;

export default GlobalStyles;
