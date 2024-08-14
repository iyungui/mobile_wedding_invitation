import React, { useState } from "react";
import styled from "styled-components";

const NoticeContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  font-family: "MaruBuri-regular", sans-serif;
  margin-top: 0px;
`;

// Tabs container
const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
`;

// Individual Tab
const Tab = styled.div`
  font-weight: bold;
  color: ${(props) => (props.active ? "#006c80" : "#888")};
  border-bottom: ${(props) => (props.active ? "2px solid #006c80" : "none")};
  cursor: pointer;

  &:hover {
    color: #006c80;
  }
`;

// Image container
const ImageContainer = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: auto;
  }
`;

// Content container
const Content = styled.div`
  color: #303030;
  padding: 20px;
  font-size: 14px;
`;

const HighLight = styled.span`
  font-family: "MaruBuri-semibold";
`;

const Notice = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "주차안내",
      content: (
        <>
          <p>
            <HighLight>차량 발렛 주차 (3시간 무료) 입니다.</HighLight>
            <br /><br />
            식사를 하지 않고 예식 종료 전<br />
            일찍 나가시는 경우,
            <br />
            차량 출차 시 지연이 예상되오니
            <br />
            주차 맡기실 때 발렛 직원분께
            <br />
            미리 말씀 부탁드립니다.
          </p>
        </>
      ),
      image: "/photos/parkingNotice-1.jpeg",
    },
    {
      label: "식사 안내",
      content: (
        <>
          <p>
            <HighLight>
            식사와 예식이 한 곳에서 이뤄지는 동시예식입니다.<br/>(2부에 식사를 진행합니다.)
            </HighLight>
          </p>
          <p>
            예식 시작과 함께 먼저 식사를 하실 하객분들은<br/>1층 연회장에서 여유
            있는 식사가 가능합니다.
          </p>
          <p>
            3층에 웰컴드링크와 핑거푸드를 준비했습니다.<br />예식 전 자유롭고
            편안한 시간 보내시길 바랍니다.
          </p>
        </>
      ),
      image: "/photos/resaurantNotice.jpeg",
    },
    {
      label: "안내사항",
      content: (
        <>
        <HighLight>
        <p>1층- 연회장, 리셉션 데스크</p>
          <p>2층- 로비, 예식홀</p>
          <p>3층- 신부대기실</p>
        </HighLight>

          <br/>
          <p>
            단독 건물에서 진행되기에<br/>엘리베이터가 보이는 곳에 없습니다.<br/>
            엘리베이터 이용이 필요하신 하객분들은<br/>직원분께 문의해 주시길
            바랍니다.
          </p>
          <p>
            예식 후 저희가 머리를 싸매고 고심해 골라낸 꽃으로<br/>작은 꽃다발을
            준비해 드립니다.<br/>(한정수량)
          </p>
        </>
      ),
      image: "/photos/NoticeImage.jpeg",
    },
  ];

  return (
    <NoticeContainer>
      <Tabs>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            active={activeTab === index}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </Tab>
        ))}
      </Tabs>

      <ImageContainer>
        <img src={tabs[activeTab].image} alt={tabs[activeTab].label} />
      </ImageContainer>

      <Content>{tabs[activeTab].content}</Content>
    </NoticeContainer>
  );
};

export default Notice;
