// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { ko } from "date-fns/locale";
// import "../styles/components/Calendar.css";

// const Calendar = () => {
//   const weddingDate = new Date(2024, 8, 22); // 2024년 9월 22일
//   const [startDate, setStartDate] = useState(weddingDate);

//   return (
//     <div className="calendar-container">
//       <h2>9월의 <br></br>22번째 날.</h2>
//       <DatePicker
//         selected={startDate}
//         onChange={(date) => setStartDate(date)}
//         // dateFormat="MM월 dd일" // 년도를 제외한 포맷 설정
//         locale={ko} // 한국어 로케일 설정
//         inline // 캘린더를 인라인으로 표시
//         includeDates={[weddingDate]} // 특정 날짜만 선택 가능
//         minDate={weddingDate} // 최소 날짜 설정
//         maxDate={weddingDate} // 최대 날짜 설정
//         // showMonthDropdown={false} // 월 변경 비활성화
//         // showYearDropdown={false} // 연도 변경 비활성화
//       />
//     </div>
//   );
// };

// export default Calendar;
