import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

const RSVPContainer = styled.div`
  text-align: left;
  display: inline-block;
  width: 80%;
  max-width: 400px;
  margin-bottom: 100px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-family: "MaruBuri-regular";
  color: #303030;
  margin-bottom: 5px;
  font-size: 12px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;


const SelectButton = styled.button`
  flex: 1;
  padding: 10px;
  font-family: ${props => (props.selected ? "MaruBuri-SemiBold" : "MaruBuri-regular")};
  font-size: 12px;
  background-color: #fff;
  color: ${props => (props.selected ? '#ffb76f' : '#303030')};
  border: 1px solid ${props => (props.selected ? '#ffb76f' : '#e0e0e0')};
  margin-right: ${props => (props.marginRight ? '10px' : '0')};
  cursor: pointer;
`;


const Input = styled.input`
  padding: 10px;
  font-size: 12px;
  margin-bottom: 20px;
  border: 1px solid #e0e0e0;
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
  padding: 8px 0;
  background-color: #ffb76f;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  margin-top: 10px;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  display: block;
  font-family: 'MaruBuri-extralight', 'Noto Sans KR', sans-serif; 
`;

const LoadingMessage = styled.p`
  color: #1A5319;
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
`;


const RSVP = () => {
    const [formData, setFormData] = useState({
      side: '',
      attendance: '',
      name: '',
      phone: '',
      attendees: '',
      meal: '',
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleButtonClick = (field, value) => {
      setFormData({ ...formData, [field]: value });
    };
  
    const validate = () => {
      let formErrors = {};
  
      if (!formData.side) formErrors.side = '신랑측 또는 신부측을 선택해 주세요.';
      if (!formData.attendance) formErrors.attendance = '참석 여부를 선택해 주세요.';
      if (!formData.name) formErrors.name = '성함을 입력해 주세요.';
      if (!formData.phone) formErrors.phone = '대표 연락처를 입력해 주세요.';
      if (!formData.attendees) formErrors.attendees = '동행인원을 입력해 주세요.';
  
      return formErrors;
    };
  
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formErrors = validate();
        setErrors(formErrors);
        setSubmitted(true);
    
        if (Object.keys(formErrors).length === 0) {
          setIsLoading(true);
          setResponseMessage('');
          
          try {
            const response = await axios.post("https://port-0-wedding-invitation-server-lzqmqzk6f911bb61.sel4.cloudtype.app/api/rsvp", formData);
            console.log("폼 제출 성공: ", response.data);
            setResponseMessage('참석 여부가 성공적으로 전달되었습니다.');
            // 폼 제출 성공 후, 폼 초기화
            setFormData({
              side: '',
              attendance: '',
              name: '',
              phone: '',
              attendees: '',
              meal: '',
            });
            setErrors({});
            setSubmitted(false);
          } catch (error) {
            console.error("폼 제출 실패: ", error);
            setResponseMessage('참석 여부를 전달하지 못했습니다. 다시 시도해 주세요.');
          } finally {
            setIsLoading(false);
          }
        }
      };
    return (
      <RSVPContainer>
        <Form onSubmit={handleSubmit}>
          <ButtonGroup>
            <SelectButton
              type="button"
              selected={formData.side === 'groom'}
              onClick={() => handleButtonClick('side', 'groom')}
              marginRight
            >
              🤵🏻 신랑측
            </SelectButton>
            <SelectButton
              type="button"
              selected={formData.side === 'bride'}
              onClick={() => handleButtonClick('side', 'bride')}
            >
              👰🏻‍♀️ 신부측
            </SelectButton>
          </ButtonGroup>
          {submitted && errors.side && <ErrorMessage>{errors.side}</ErrorMessage>}
  
          <Label>참석 여부를 선택해 주세요</Label>
          <ButtonGroup>
            <SelectButton
              type="button"
              selected={formData.attendance === 'can'}
              onClick={() => handleButtonClick('attendance', 'can')}
              marginRight
            >
              참석 가능
            </SelectButton>
            <SelectButton
              type="button"
              selected={formData.attendance === 'cannot'}
              onClick={() => handleButtonClick('attendance', 'cannot')}
            >
              참석 불가
            </SelectButton>
          </ButtonGroup>
          {submitted && errors.attendance && <ErrorMessage>{errors.attendance}</ErrorMessage>}
  
          <Label htmlFor="name">성함(필수)</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {submitted && errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
  
          <Label htmlFor="phone">대표 연락처(필수)</Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          {submitted && errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
  
          <Label htmlFor="attendees">동행인원(본인 포함)</Label>
          <Input
            type="number"
            id="attendees"
            name="attendees"
            value={formData.attendees}
            onChange={handleInputChange}
            min="1"
          />
          {submitted && errors.attendees && <ErrorMessage>{errors.attendees}</ErrorMessage>}
  
          <Label>식사 여부</Label>
          <ButtonGroup>
            <SelectButton
              type="button"
              selected={formData.meal === 'yes'}
              onClick={() => handleButtonClick('meal', 'yes')}
              marginRight
            >
              식사 가능
            </SelectButton>
            <SelectButton
              type="button"
              selected={formData.meal === 'no'}
              onClick={() => handleButtonClick('meal', 'no')}
            >
              식사 불가<br/>(답례품 수령)
            </SelectButton>
          </ButtonGroup>
  
          <SubmitButton type="submit" disabled={isLoading}>
          {isLoading ? '제출 중...' : '참석 여부 전달'}
        </SubmitButton>
      </Form>
      {isLoading && <LoadingMessage>제출 중입니다...</LoadingMessage>}
      {responseMessage && <SuccessMessage>{responseMessage}</SuccessMessage>}
    </RSVPContainer>
    );
  };
  
  export default RSVP;