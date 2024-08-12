import React, { useState } from 'react';
import styled from 'styled-components';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionWrapper>
      <AccordionHeader isActive={isOpen} onClick={toggleAccordion}>
        <p>{title}</p>
        <span>{isOpen ? '▲' : '▼'}</span>
      </AccordionHeader>
      {isOpen && <AccordionContent>{children}</AccordionContent>}
    </AccordionWrapper>
  );
};

export default Accordion;

const AccordionWrapper = styled.div`
  border: 1px solid #e6ece1;
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  width: 100%; /* 부모 컨테이너의 너비를 초과하지 않도록 설정 */
  box-sizing: border-box; /* padding 포함한 width 계산 */
`;

const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e6ece1;
  padding: 0 15px;
  cursor: pointer;
  width: 100%; /* 부모 컨테이너의 너비를 초과하지 않도록 설정 */
  box-sizing: border-box; /* padding 포함한 width 계산 */

  & > p {
    color: #44484d;
    margin: 0;
    flex: 1; /* p 요소가 가능한 너비를 차지하도록 설정 */
  }

  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    transition: all 0.3s ease;
  }
`;

const AccordionContent = styled.div`
  font-size: 14px;
  text-align: justify;
  padding: 10px 20px;
  background-color: #ffffff;
  width: 100%; /* 부모 컨테이너의 너비를 초과하지 않도록 설정 */
  box-sizing: border-box; /* padding 포함한 width 계산 */
`;
