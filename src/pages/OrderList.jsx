import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Button from "@mui/material/Button";
import Flex from "./Flex";
import "./OrderList.css";

function OrderList(props) {
  const [topics, setTopics] = useState([
    {
      orderOrder: 1,
      nickname: "asdd",
      menu: [
        { name: "아메리카노", count: 3, price: 1000 },
        { name: "카페라떼", count: 3, price: 1000 },
      ],
      orderAt: "12:30",
    },
    {
      orderOrder: 2,
      nickname: "asdsd",
      menu: [{ name: "a", count: 2, price: 1000 }],
      orderAt: "12:40",
    },
  ]);

  const orderList = [];
  for (let i = 0; i < topics.length; i++) {
    orderList.push(
      <Flex
        admin={props.admin}
        topic={topics[i]}
        onChangeMode={(nickname) => {
          const lst = [];
          for (let i = 0; i < topics.length; i++) {
            if (topics[i].nickname !== nickname) {
              lst.push(topics[i]);
            }
          }
          setTopics(lst);
        }}
        menuList={topics[i].menu}
      ></Flex>
    );
  }

  return (
    <>
      <div>
        <div className="Header">
          <div className="nn">닉네임</div>
          <div className="on">주문번호</div>
          <div className="me">메뉴</div>
          {/* <div className="co">수량</div>
          <div className="pr">가격</div> */}

          <div className="tc">총 가격</div>
          <div className="ot">주문시간</div>
        </div>
        <div>{orderList}</div>
      </div>
    </>
  );
}

export default OrderList;
