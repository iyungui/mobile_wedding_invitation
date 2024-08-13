import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const SectionContainer = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const FormContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f7f7f7;
`;

const GuideMessage = styled.p`
  font-size: 12px;
  color: #555;
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  border: 1px solid #ddd;
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
  background-color: #ffb76f;
  color: white;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  font-family: 'MaruBuri-regular', 'Noto Sans KR', sans-serif;
`;

const Vegetarian = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("https://port-0-wedding-invitation-server-lzqmqzk6f911bb61.sel4.cloudtype.app/api/vegetarian", {
        name,
        phone,
      });
      console.log("Response:", response.data);
      alert("성공적으로 제출하였습니다.");
    } catch (error) {
      console.error("Error:", error);
      alert("제출하는 동안 오류가 발생했습니다.");
    }
  };

  return (
    <SectionContainer>
      <FormContainer>
        <GuideMessage>
          식사에 훈연 해산물 및 육류가 포함됩니다.
          <br />
          채식을 하시는 분들은 따로 음식을 마련해드리오니,
          <br />꼭 체크 부탁드립니다.
        </GuideMessage>
        <Input 
          type="text" 
          placeholder="이름을 입력하세요" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <Input 
          type="tel" 
          placeholder="전화번호를 입력하세요" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
        />
        <SubmitButton onClick={handleSubmit}>제출하기</SubmitButton>
      </FormContainer>
    </SectionContainer>
  );
};

export default Vegetarian;
