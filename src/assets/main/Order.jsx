import { Button } from "@mui/material";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 30vw;
  height: 7vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

function Order(props) {
  return (
    <Wrapper>
      <p style={{ marginLeft: "2vw" }}>{props.menu.name}</p>
      <p>{props.menu.number}</p>
      <Button color="success">X</Button>
    </Wrapper>
  );
}

export default Order;
