// Notice.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const messageVariants = {
  hidden: { opacity: 0, y: 40 }, // 아래에 위치하고 투명
  visible: {
    opacity: 1,
    y: 0, // 제자리로 이동
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const NoticeContainer = styled.div`
  padding: 10px;
  color: #191a17;
`;

const Title = styled(motion.h2)`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
`;

const Divider = styled(motion.div)`
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  display: block;
  height: 1px;
  background-color: #dddddd;
  margin-bottom: 30px;
`;

const Content = styled(motion.p)`
  font-size: 13px;
  margin-bottom: 30px;
`;

const CenteredContent = styled(motion.p)`
  font-size: 13px;
  margin-bottom: 40px;
  text-align: center;
`;

const Notice = () => {
  return (
    <NoticeContainer>
      <Title
        variants={messageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        공지사항
      </Title>

      <Content
        variants={messageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        차량 발렛 주차(3시간) 입니다.
        <br />
        식사를 안 하시거나 일찍 나가셔야 하는 분들은
        <br />
        예식 종료 전 차량 출차 시 딜레이가 예상되오니
        <br />
        주차 맡기실 때 발렛 직원분께 미리 말씀 부탁드립니다.
      </Content>
      <Divider
        variants={messageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />

      <Content
        variants={messageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        식사와 예식이 한 곳에서 진행되는 동시예식입니다.
        <br />
        (2부에 식사 진행)
        <br />
        <br />
        예식 시작과 동시에 먼저 식사를 하실 하객분들은
        <br />
        1층 연회장에서 여유 있는 식사가 가능하십니다.
      </Content>
      <Divider
        variants={messageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />

      <Content
        variants={messageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        단독 건물에서 진행되기에
        <br />
        엘리베이터가 보이는 곳에 없습니다.
        <br />
        엘리베이터 이용이 필요하신 하객분들은
        <br />
        직원분께 문의해 주시길 바랍니다.
      </Content>
      <Divider
        variants={messageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />

      <Content
        variants={messageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        신부대기실(3층)에 웰컴 드링크와 핑거푸드를 준비했습니다.
        <br />
        예식 전 자유롭고 편안하게 시간 보내시기를 바랍니다.
      </Content>
      <Divider
        variants={messageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />

      <Content
        variants={messageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        로비공간이 많이 협소하여 화환은 정중히 사양합니다.
      </Content>
      <Divider
        variants={messageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />

      <CenteredContent
        variants={messageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        편안한 시간을 보내고 가셨으면 하는 바람에 🥹
        <br />
        쓰다 보니 구구절절.. 글이 길어졌습니다
        <br />
        양해 부탁드리며
        <br />
        긴 글 읽어주셔서 감사합니다 <br /><br />
        -신랑 신부 올림-
      </CenteredContent>

    </NoticeContainer>
  );
};

export default Notice;