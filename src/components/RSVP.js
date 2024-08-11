import React, { useState } from 'react';
import styled from 'styled-components';

const RSVPContainer = styled.div`
  margin: 40px 0;
  text-align: left;
  display: inline-block;
  width: 100%;
  max-width: 400px; /* 최대 너비 설정 */
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 600;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const SelectButton = styled.button`
  flex: 1;
  padding: 10px;
  font-size: 14px;
  background-color: ${props => (props.selected ? '#673ab7' : '#fff')};
  color: ${props => (props.selected ? '#fff' : '#673ab7')};
  border: 2px solid #673ab7;
  border-radius: 5px;
  margin-right: ${props => (props.marginRight ? '10px' : '0')};
  cursor: pointer;

  &:hover {
    background-color: #5e35b1;
    color: white;
  }

  &:focus {
    outline: none;
  }
`;

const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  padding: 15px;
  font-size: 16px;
  font-weight: 600;
  background-color: #673ab7;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #5e35b1;
  }

  &:focus {
    outline: none;
  }
`;

const RSVP = () => {
  const [side, setSide] = useState('');
  const [attendance, setAttendance] = useState('');
  const [meal, setMeal] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("폼이 제출되었습니다.");
  };
  return (
    <RSVPContainer>
      <Title>참석 여부 전달하기</Title>
      <Form onSubmit={handleSubmit}>
        <ButtonGroup>
          <SelectButton
            selected={side === 'groom'}
            onClick={() => setSide('groom')}
            marginRight
          >
            신랑측
          </SelectButton>
          <SelectButton
            selected={side === 'bride'}
            onClick={() => setSide('bride')}
          >
            신부측
          </SelectButton>
        </ButtonGroup>

        <Label>참석 여부를 선택해 주세요</Label>
        <ButtonGroup>
          <SelectButton
            selected={attendance === 'cannot'}
            onClick={() => setAttendance('cannot')}
            marginRight
          >
            참석 불가
          </SelectButton>
          <SelectButton
            selected={attendance === 'can'}
            onClick={() => setAttendance('can')}
          >
            참석 가능
          </SelectButton>
        </ButtonGroup>

        <Label htmlFor="name">성함(필수)</Label>
        <Input type="text" id="name" name="name" required />

        <Label htmlFor="phone">대표 연락처</Label>
        <Input type="tel" id="phone" name="phone" />

        <Label htmlFor="attendees">동행인원(본인 포함)</Label>
        <Input type="number" id="attendees" name="attendees" min="1" />

        <Label>식사 여부</Label>
        <ButtonGroup>
          <SelectButton
            selected={meal === 'yes'}
            onClick={() => setMeal('yes')}
            marginRight
          >
            식사 가능
          </SelectButton>
          <SelectButton
            selected={meal === 'no'}
            onClick={() => setMeal('no')}
          >
            식사 불가(답례품 수령)
          </SelectButton>
        </ButtonGroup>

        <SubmitButton type="submit">참석 여부 전달하기</SubmitButton>
      </Form>
    </RSVPContainer>
  );
};

export default RSVP;
