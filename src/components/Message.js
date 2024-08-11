import React from 'react';
import '../styles/components/Message.css';

const Message = () => {
  return (
    <section className="message">
      <p className="quote">
        You can not be happy every day.<br />
        But there are happy things every day.
      </p>
      <p className="quote-author">
        매일 행복할 순 없지만, 행복한 것들은 매일 있어.<br />
        &lt;월트 디즈니&gt;, 곰돌이 푸
      </p>
      <p className="subheadline" data-aos="fade-up">
        저희 결혼합니다 ❤️
      </p>
      <p className="invitation" data-aos="fade-up" data-aos-delay="100">
        오늘도, 내일도 함께하고 싶은 사람이 생겼습니다.<br />
        함께라는걸 당연하게 생각하지 않겠습니다.<br />
        서로가 함께한지 10년, 평생을 함께하려 합니다.<br />
        류인창, 이에스더 결혼식에 초대합니다.
      </p>
    </section>
  );
};

export default Message;
