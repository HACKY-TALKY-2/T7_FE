import React from "react";
import "./Flex.css";
import Button from "@mui/material/Button";

function Flex(props) {
  return (
    <div className="FlexList">
      <div className="left">
        <div className="nickname">{props.topic.nickname}</div>
        <div>{props.topic.orderOrder}</div>
      </div>
      <div className="mid">{props.topic.menu}</div>
      <Button
        className="right"
        variant="contained"
        onClick={(event) => {
          nickname = event.target.props.nickname;
          props.onChangeMode(nickname);
        }}
      >
        완료
      </Button>
    </div>
  );
}

export default Flex;
