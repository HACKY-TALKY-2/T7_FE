import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
//import Button from "@mui/material/Button";
import Flex from "./Flex";
import "./OrderList.css";
import axios from "axios";

function OrderList(props) {
  const [orderItems, setOrderItems] = useState([]);
  useEffect(() => {
    fetchOrderItems();
  }, []);

  async function fetchOrderItems() {
    return await axios
      .get("http://13.58.200.222:3001/order/queue", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setOrderItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  console.log(orderItems);

  const orderList = [];
  for (let i = 0; i < orderItems.length; i++) {
    orderList.push(
      <Flex
        admin={props.admin}
        topic={orderItems[i]}
        onChangeMode={(orderId) => {
          const lst = [];
          for (let i = 0; i < orderItems.length; i++) {
            if (orderItems[i].orderId !== orderId) {
              lst.push(orderItems[i]);
            }
          }
          setOrderItems(lst);
        }}
        menuList={orderItems[i].menu}
      ></Flex>
    );
  }

  console.log(orderList);

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
