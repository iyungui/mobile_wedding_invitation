import React from 'react';
import styled from 'styled-components';

// Container for the entire calendar
const CalendarContainer = styled.div`
  width: 320px;
  margin: 0 auto;
  font-family: "MaruBuri-regular";
  margin-bottom: 100px;
`;

// Header for the calendar
const Header = styled.div`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #36474a;
  text-align: left;
  margin-left: 10px;
  line-height: 1.5;
`;

// Divider below the header and at the bottom
const Divider = styled.div`
  height: 2px;
  background-color: #006c80; /* Blue-green color */
  margin-bottom: 10px;
`;

// Container for days of the week labels
const DaysOfWeek = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 10px;
  text-align: center;
`;

// Each day label (Sunday to Saturday)
const DayLabel = styled.div`
  font-weight: bold;
  color: #888;
`;

// Grid for days of the month
const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px; /* Gap between the days */
  text-align: center;
`;

// Style for each day box
const Day = styled.div`
  font-weight: normal;
  color: #333;
  position: relative;
`;

// Highlighted day (24th) with a circle background
const HighlightedDay = styled(Day)`
  background-color: #006c80;
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

// Text below the highlighted day
const HighlightText = styled.div`
  font-size: 0.6rem;
  margin-top: 5px;
`;

// Component for rendering the calendar
const Calendar = () => {
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const daysInMonth = new Date(2024, 9, 0).getDate(); // May 2024
  const firstDayOfMonth = new Date(2024, 8, 1).getDay(); // 0 = Sunday

  const renderDays = () => {
    const dayElements = [];

    // Add empty slots before the first day
    for (let i = 0; i < firstDayOfMonth; i++) {
      dayElements.push(<Day key={`empty-${i}`} />);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      if (day === 22) {
        dayElements.push(
          <div key={day}>
            <HighlightedDay>{day}</HighlightedDay>
            <HighlightText>오전<br/>11시 30분</HighlightText>
          </div>
        );
      } else {
        dayElements.push(<Day key={day}>{day}</Day>);
      }
    }

    return dayElements;
  };

  return (
    <CalendarContainer>
      <Header>
        구월의 <br />
        스물두번째 날.
      </Header>
      <Divider />
      <DaysOfWeek>
        {daysOfWeek.map((day, index) => (
          <DayLabel key={index}>{day}</DayLabel>
        ))}
      </DaysOfWeek>
      <DaysGrid>{renderDays()}</DaysGrid>
      <Divider /> {/* Bottom divider */}
    </CalendarContainer>
  );
};

export default Calendar;
