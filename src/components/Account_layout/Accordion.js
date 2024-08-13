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
        <OpenSpan>{isOpen ? '▲' : '▼'}</OpenSpan>
      </AccordionHeader>
      {isOpen && <AccordionContent>{children}</AccordionContent>}
    </AccordionWrapper>
  );
};

export default Accordion;

const OpenSpan = styled.span`
  color: #d7d7d7; /* More subtle arrow color */
`;

const AccordionWrapper = styled.div`
  border: 1px solid #f4f4f4;
  margin-bottom: 15px;
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.3s ease;
  width: 100%;
  background-color: #f9f9f9; /* Light background to further soften the presence */
`;

const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 10px 15px;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;

  & > p {
    color: #6d6d6d;
    margin: 0;
    font-weight: 500;
  }

  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    transition: transform 0.3s ease;
  }
`;

const AccordionContent = styled.div`
  font-size: 14px;
  padding: 10px 15px;
  background-color: #fff;
  color: #555;
  line-height: 1.6;
`;
