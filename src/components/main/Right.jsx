import styled from "styled-components";
import { Button } from "@mui/material";
import Order from "../../assets/main/Order";

const Wrapper = styled.div`
  width: 30vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const OrderBox = styled.div`
  width: 30vw;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  background-color: beige;
`;

function Right() {
  return (
    <Wrapper>
      <OrderBox>
        <Order />
      </OrderBox>
      <div>
        <h3>Total Price</h3>
        <Button color="success">order</Button>
      </div>
    </Wrapper>
  );
}

export default Right;
