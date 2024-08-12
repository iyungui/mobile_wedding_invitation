import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

const RSVPContainer = styled.div`
  margin: 40px 0;
  text-align: left;
  display: inline-block;
  width: 100%;
  max-width: 400px;
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

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: -15px;
  margin-bottom: 15px;
`;

const SuccessMessage = styled.p`
  color: green;
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
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
  // 상태 관리
  const [side, setSide] = useState('');
  const [attendance, setAttendance] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [attendees, setAttendees] = useState('');
  const [meal, setMeal] = useState('');

  // 유효성 검사 상태
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false); // 제출 시점 확인
  const [success, setSuccess] = useState(false); // 성공 여부

  const validate = () => {
    let formErrors = {};

    if (!side) formErrors.side = '신랑측 또는 신부측을 선택해 주세요.';
    if (!attendance) formErrors.attendance = '참석 여부를 선택해 주세요.';
    if (!name) formErrors.name = '성함을 입력해 주세요.';
    if (!phone) formErrors.phone = '대표 연락처를 입력해 주세요.';
    if (!attendees) formErrors.attendees = '동행인원을 입력해 주세요.';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0; // 에러가 없을 때 true 반환
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // 폼 제출 시 페이지 리로드 방지
    setSubmitted(true);

    if (validate()) {
      // 폼 제출 성공 처리 (예: 서버에 데이터 전송 등)
      const formData = {
        side,
        attendance,
        name,
        phone,
        attendees,
        meal,
      };

      try {
        const response = await axios.post("https://port-0-wedding-invitation-server-lzqmqzk6f911bb61.sel4.cloudtype.app/api/rsvp", formData);
        console.log("폼 제출 성공: ", response.data);
        setSuccess(true);
        // 폼 제출 성공 후, 폼 초기화
        setSide('');
        setAttendance('');
        setName('');
        setPhone('');
        setAttendees('');
        setMeal('');
        setErrors({});
        setSubmitted(false); // 제출 상태 초기화

      } catch (error) {
        console.error("폼 제출 실패: ", error);
        alert("참석 여부를 전달하지 못했습니다. 다시 시도해 주세요.");
        setSuccess(false);
      }
    }
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
        {submitted && errors.side && <ErrorMessage>{errors.side}</ErrorMessage>}

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
        {submitted && errors.attendance && <ErrorMessage>{errors.attendance}</ErrorMessage>}

        <Label htmlFor="name">성함(필수)</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {submitted && errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}

        <Label htmlFor="phone">대표 연락처(필수)</Label>
        <Input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {submitted && errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}

        <Label htmlFor="attendees">동행인원(본인 포함)</Label>
        <Input
          type="number"
          id="attendees"
          name="attendees"
          value={attendees}
          onChange={(e) => setAttendees(e.target.value)}
          min="1"
        />
        {submitted && errors.attendees && <ErrorMessage>{errors.attendees}</ErrorMessage>}

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
      {success && <SuccessMessage>참석 여부가 성공적으로 전달되었습니다.</SuccessMessage>}
    </RSVPContainer>
  );
};

export default RSVP;
