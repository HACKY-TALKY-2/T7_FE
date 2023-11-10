import React from "react";
import "./Flex.css";
import Button from "@mui/material/Button";

function Flex(props) {
  const menuList = props.menuList;
  const orderlist = [];
  let sumCost = 0;
  for (let i = 0; i < menuList.length; i++) {
    sumCost += menuList[i].price * menuList[i].count;

    orderlist.push(
      <div>
        {menuList[i].name +
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
          props.onChangeMode(props.topic.nickname);
        }}
      >
        완료
      </Button>
    );
  }
  return (
    <div className="FlexList">
      <div className="nickname">{props.topic.nickname}</div>
      <div className="ordernumber">{props.topic.orderOrder}</div>
      {/* <div className="mid">{props.topic.menu}</div> */}
      <div className="mid">{orderlist}</div>
      <div className="totalCost">{sumCost + "원"}</div>
      <div className="ordertime">{props.topic.orderAt}</div>
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
