import React from "react";
import "./Flex.css";
import Button from "@mui/material/Button";
import axios from "axios";

function Flex(props) {
  const handleSubmit = async (orderId) => {
    const res = await axios.post(
      "http://13.58.200.222:3001/admin/order/" + orderId,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    return res;
  };

  const menuList = props.menuList;
  const orderlist = [];
  let sumCost = 0;
  for (let i = 0; i < menuList.length; i++) {
    sumCost += menuList[i].price * menuList[i].count;

    orderlist.push(
      <div>
        {menuList[i].menuName +
          " : " +
          menuList[i].count +
          "개  " +
          menuList[i].price * menuList[i].count +
          "원"}
      </div>
    );
  }

  let buttonAdmin = null;
  if (props.admin === true) {
    buttonAdmin = (
      <Button
        variant="contained"
        onClick={(event) => {
          props.onChangeMode(props.topic.orderId);
          handleSubmit(props.topic.orderId);
        }}
      >
        완료
      </Button>
    );
  }
  return (
    <div className="FlexList">
      <div className="nickname">{props.topic.userId}</div>
      <div className="ordernumber">{props.topic.orderId}</div>
      {/* <div className="mid">{props.topic.menu}</div> */}
      <div className="mid">{orderlist}</div>
      <div className="totalCost">{sumCost + "원"}</div>
      <div className="ordertime">{props.topic.orderedAt}</div>
      {/* <Button
          variant="contained"
          onClick={(event) => {
            props.onChangeMode(props.topic.nickname);
          }}
        >
          완료
        </Button> */}
      {buttonAdmin}
    </div>
  );
}

export default Flex;
