import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const FormContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 15px;
  border: 1px solid #e0e0e0; /* Light gray border */
  border-radius: 8px;
  background-color: #f7f7f7; /* Very light gray background */
`;

const GuideMessage = styled.p`
  font-size: 12px;
  color: #555; /* Dark gray text color */
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  border: 1px solid #ddd; /* Light gray border */
  border-radius: 4px;
  font-size: 12px;
  color: #333; 
  background-color: #fafafa; 
  box-sizing: border-box;
  font-family: 'MaruBuri-regular', 'Noto Sans KR', sans-serif; 
`;


const SubmitButton = styled.button`
  width: 100%;
  padding: 8px;
  margin-top: 10px;
  background-color: #ffb76f; /* Softer coral color */
  color: white; /* Dark gray text color */
  border: 1px solid #e0e0e0; /* Light gray border */
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  font-family: 'MaruBuri-regular', 'Noto Sans KR', sans-serif; 
`;

const Vegetarian = () => {
  return (
    <SectionContainer>
      <FormContainer>
        <GuideMessage>
          식사에 훈연 해산물 및 육류가 포함됩니다.
          <br />
          채식을 하시는 분들은 따로 음식을 마련해드리오니,
          <br />꼭 체크 부탁드립니다.
        </GuideMessage>
        <Input type="text" placeholder="이름을 입력하세요" />
        <Input type="tel" placeholder="전화번호를 입력하세요" />
        <SubmitButton>제출하기</SubmitButton>
      </FormContainer>
    </SectionContainer>
  );
};

export default Vegetarian;
