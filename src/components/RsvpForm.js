import React, { useState } from 'react';
import axios from 'axios';

const RsvpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [attendance, setAttendance] = useState(true);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/rsvp', { name, email, attendance, message });
      alert('참석 여부가 저장되었습니다.');
    } catch (error) {
      alert('저장 중 오류가 발생했습니다.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="이메일"
        required
      />
      <label>
        참석 여부:
        <select
          value={attendance}
          onChange={(e) => setAttendance(e.target.value === 'true')}
        >
          <option value="true">참석</option>
          <option value="false">불참</option>
        </select>
      </label>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="메시지"
      ></textarea>
      <button type="submit">제출</button>
    </form>
  );
};

export default RsvpForm;
